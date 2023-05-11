import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import BackButton from '../../../../components/buttons/BackButton';
import { paths } from '../../../../shared/paths';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { SpectrumMeasurement } from '../../../../libs/cpstars/openapi';
import ApiCaller from '../../../../services/ApiCaller';
import Spectrum from '../../../../components/data/graphs/Spectrum';
import { createContainer } from 'victory';

const StarDetailsSpectrum = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [measurements, setMeasurements] = useState<SpectrumMeasurement[] | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.starsController.getStarSpectraMeasurements({ id: Number(id) }).then((data) => {
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
          {t('star_details.spectrum.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {measurements &&
        (measurements.length > 0 ? (
          <Spectrum data={measurements ? measurements : []} />
        ) : (
          <Typography className="fs-5">{t('star_details.spectrum.no_data')}</Typography>
        ))}
    </div>
  );
};

export default StarDetailsSpectrum;
