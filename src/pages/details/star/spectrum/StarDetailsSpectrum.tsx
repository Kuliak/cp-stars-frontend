import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import BackButton from '../../../../components/buttons/BackButton';
import { paths } from '../../../../shared/paths';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import VizierMetadata from '../../../../components/data/VizierMetadata';

const StarDetailsSpectrum = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  return (
    <div className="content-page">
      <BackButton navigateTo={`${paths.starDetails.general}/${id}`} />
      <div className="fs-5 mb-5">
        <Typography
          variant="h4"
          component="div">
          {t('star_details.spectrum.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {/*{vizierTables && <VizierMetadata vizierTables={vizierTables ? vizierTables : []} />}*/}
    </div>
  );
};

export default StarDetailsSpectrum;
