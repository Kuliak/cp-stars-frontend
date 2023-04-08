import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { RadialVelocity, StarsControllerApi } from '../../../../libs/cpstars/openapi';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import RadialVelocities from '../../../../components/data/RadialVelocities';
import { paths } from '../../../../shared/paths';
import BackButton from '../../../../components/buttons/BackButton';

const StarDetailsRadialVelocities = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [radialVelocities, setRadialVelocities] = useState<RadialVelocity[] | null>(null);
  const [starsController] = useState(() => new StarsControllerApi());

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    starsController.getStarRadialVelocities({ starId: Number(id) }).then((data) => {
      setRadialVelocities(data);
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
          {t('star_details.radial_velocities.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {radialVelocities && (
        <RadialVelocities radialVelocities={radialVelocities ? radialVelocities : []} />
      )}
    </div>
  );
};

export default StarDetailsRadialVelocities;
