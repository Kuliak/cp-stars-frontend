import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { Motion } from '../../../../libs/cpstars/openapi';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import MotionsList from '../../../../components/data/MotionsList';
import { paths } from '../../../../shared/paths';
import BackButton from '../../../../components/buttons/BackButton';
import ApiCaller from '../../../../services/ApiCaller';

const StarDetailsMotions = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [motions, setMotions] = useState<Motion[] | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.starsController.getStarMotions({ starId: Number(id) }).then((data) => {
      setMotions(data);
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
          {t('star_details.motions.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {motions && <MotionsList motions={motions ? motions : []} />}
    </div>
  );
};

export default StarDetailsMotions;
