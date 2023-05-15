import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { MagnitudeAttribute, StarDatasourceAttribute } from '../../../../libs/cpstars/openapi';
import BackButton from '../../../../components/buttons/BackButton';
import { paths } from '../../../../shared/paths';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import ApiCaller from '../../../../services/ApiCaller';
import StarDatasourceAttributesList from '../../../../components/data/datasources/attributes/StarDatasourceAttributesList';

const StarDetailsDatasourceAttributes = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [datasourceAttributes, setDatasourceAttributes] = useState<
    StarDatasourceAttribute[] | null
  >(null);
  const [magnitudesAttributes, setMagnitudesAttributes] = useState<MagnitudeAttribute[] | null>(
    null
  );

  useEffect(() => {
    let firstCallDone = false;
    let secondCallDone = false;

    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.starsController
      .getStarDatasourceAttributes({ starId: Number(id) })
      .then((starAttributes) => {
        setDatasourceAttributes(starAttributes);
        setLoading(firstCallDone && secondCallDone);
      });

    ApiCaller.starsController
      .getStarMagnitudeAttributes({ starId: Number(id) })
      .then((magnitudesAttributes) => {
        setMagnitudesAttributes(magnitudesAttributes);
        setLoading(firstCallDone && secondCallDone);
      });
  }, [id]);

  return (
    <div className="content-page">
      <BackButton navigateTo={`${paths.starDetails.general}/${id}`} />
      <div className="fs-5 mb-5">
        <Typography
          variant="h4"
          component="div">
          {t('star_details.star_datasource_attributes.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {datasourceAttributes && (
        <StarDatasourceAttributesList
          datasourceAttributes={datasourceAttributes ? datasourceAttributes : []}
          magnitudesAttributes={magnitudesAttributes ? magnitudesAttributes : []}
        />
      )}
    </div>
  );
};

export default StarDetailsDatasourceAttributes;
