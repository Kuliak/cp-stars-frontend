import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getStarDetails } from '../../services/DatabaseService';
import { useParams } from 'react-router-dom';
import Coordinates from './Coordinates';
import Paper from '@mui/material/Paper';
import Magnitudes from '../../components/Data/Magnitudes';

const StarDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    setLoading(true);
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
            <div className="fs-5 mb-5">
              <div
                className="fw-bold me-2"
                style={{ display: 'inline-block' }}>
                {t('star_details.name')}:
              </div>
              {details.name}
            </div>
            <Coordinates
              icrsRA={details.icrsRightAscension}
              icrsDec={details.icrsDeclination}
              galacticLongitude={details.galacticLongitude}
              galacticLatitude={details.galacticLatitude}
            />
          </Paper>

          <Paper className="mt-4">
            <Magnitudes magnitudes={[]} />
          </Paper>
        </>
      )}
    </div>
  );
};

export default StarDetails;