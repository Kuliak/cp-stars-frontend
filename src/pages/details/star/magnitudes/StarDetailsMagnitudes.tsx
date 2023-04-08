import Magnitudes from '../../../../components/data/magnitudes/Magnitudes';
import React, { useEffect, useState } from 'react';
import { Magnitude } from '../../../../libs/cpstars/openapi';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import { paths } from '../../../../shared/paths';
import BackButton from '../../../../components/buttons/BackButton';
import ApiCaller from '../../../../services/ApiCaller';

const StarDetailsMagnitudes = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [magnitudes, setMagnitudes] = useState<Magnitude[] | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.starsController.getStarMagnitudes({ starId: Number(id) }).then((data) => {
      setMagnitudes(data);
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
          {t('star_details.magnitudes.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {magnitudes && <Magnitudes magnitudes={magnitudes ? magnitudes : []} />};
    </div>
  );
};

export default StarDetailsMagnitudes;
