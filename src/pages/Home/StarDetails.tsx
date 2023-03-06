import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getStarDetails } from '../../services/DatabaseService';
import { useParams } from 'react-router-dom';
import Coordinates from './Coordinates';
import Paper from '@mui/material/Paper';
import Magnitudes from '../../components/Data/Magnitudes';
import Identifiers from '../../components/Data/IdentifiersList';
import React from 'react';
import Star from '../../shared/interfaces/Star';

const StarDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<Star | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    getStarDetails(id).then((data) => {
      setDetails(data);
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
              {details.id_2009_A_AND_A_498_961_R}
            </div>
            <Coordinates
              icrsRA={details.icrsRightAscension}
              icrsRAError={details.icrsRightAscensionError}
              icrsDec={details.icrsDeclination}
              icrsDecError={details.icrsDeclinationError}
              galacticLongitude={details.galacticLongitude}
              galacticLatitude={details.galacticLatitude}
            />
          </Paper>

          <Paper className="mt-4">
            <Magnitudes magnitudes={details.magnitudes} />
            <Identifiers
              identifiers={details.identifiers}
              objectName={details.id_2009_A_AND_A_498_961_R}
            />
          </Paper>
        </>
      )}
    </div>
  );
};

export default StarDetails;
