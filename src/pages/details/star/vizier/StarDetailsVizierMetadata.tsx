import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { VizierTable } from '../../../../libs/cpstars/openapi';
import ApiCaller from '../../../../services/ApiCaller';
import BackButton from '../../../../components/buttons/BackButton';
import { paths } from '../../../../shared/paths';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import VizierMetadata from '../../../../components/data/VizierMetadata';

const StarDetailsVizierMetadata = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [vizierTables, setVizierTables] = useState<VizierTable[] | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.externalServicesController
      .getVizierMetadata({ name: 'Renson ' + id })
      .then((data) => {
        setVizierTables(data.vizierTables ? data.vizierTables : []);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="content-page">
      <BackButton navigateTo={`${paths.starDetails.general}/${id}`} />
      <div className="fs-5 mb-5">
        <Typography
          variant="h4"
          component="div">
          {t('star_details.vizier_metadata.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {vizierTables && <VizierMetadata vizierTables={vizierTables ? vizierTables : []} />}
    </div>
  );
};

export default StarDetailsVizierMetadata;
