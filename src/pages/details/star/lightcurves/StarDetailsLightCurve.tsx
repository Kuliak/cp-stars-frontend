import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import BackButton from '../../../../components/buttons/BackButton';
import { paths } from '../../../../shared/paths';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import LightCurve from '../../../../components/data/graphs/LightCurve';
import ApiCaller from '../../../../services/ApiCaller';
import { LightCurveMeasurement } from '../../../../libs/cpstars/openapi';

const StarDetailsLightCurve = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [measurements, setMeasurements] = useState<LightCurveMeasurement[] | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.externalServicesController
      .getStarLightCurveMeasurements({ name: id })
      .then((data) => {
        setMeasurements(data);
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
          {t('star_details.light_curve.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {measurements && <LightCurve data={measurements ? measurements : []} />}
    </div>
  );
};

export default StarDetailsLightCurve;
