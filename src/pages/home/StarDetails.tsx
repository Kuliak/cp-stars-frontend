import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Coordinates from './coordinates/Coordinates';
import Paper from '@mui/material/Paper';
import Magnitudes from '../../components/data/magnitudes/Magnitudes';
import Identifiers from '../../components/data/IdentifiersList';
import React from 'react';
import { Star, StarsControllerApi } from '../../libs/cpstars/openapi';
import MotionsList from '../../components/data/MotionsList';
import RadialVelocities from '../../components/data/RadialVelocities';

const StarDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [starsController] = useState(() => new StarsControllerApi());

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<Star | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    starsController.getStarDetails({ id: Number(id) }).then((data) => {
      setDetails(data);
      console.log(details);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="p-5">
      {loading && <CircularProgress />}
      {details && (
        <>
          <Paper className="p-4">
            <div className="fs-5 mb-3">
              <div
                className="fw-bold me-2"
                style={{ display: 'inline-block' }}>
                {t('star_details.name')}:
              </div>
              {details.id2009AANDA498961R}
            </div>
            <Coordinates
              alpha={details.alpha}
              delta={details.delta}
              icrsRA={details.icrsRightAscension}
              icrsRAError={details.icrsRightAscensionError}
              icrsDec={details.icrsDeclination}
              icrsDecError={details.icrsDeclinationError}
              galacticLongitude={details.galacticLongitude}
              galacticLatitude={details.galacticLatitude}
            />
          </Paper>

          <Paper className="mt-4">
            <Magnitudes magnitudes={details.magnitudes ? details.magnitudes : []} />
            <MotionsList motions={details.motions ? details.motions : []} />
            <RadialVelocities
              radialVelocities={details.radialVelocities ? details.radialVelocities : []}
            />
            <Identifiers
              identifiers={details.identifiers}
              id2009AANDA498961R={details.id2009AANDA498961R}
            />
          </Paper>
        </>
      )}
    </div>
  );
};

export default StarDetails;
