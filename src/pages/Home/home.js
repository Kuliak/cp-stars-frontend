import BasicInfoStarsTable from './Stars';
import { getBasicInfoForAllStars } from '../../services/DatabaseService';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [stars, setStars] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log('starting query');
    getBasicInfoForAllStars().then((data) => {
      setStars(data);
      setLoading(false);
    });
    console.log('Query done');
  }, []);

  return (
    <div className="center">
      {isLoading && <CircularProgress />}
      {stars && <BasicInfoStarsTable originalRows={stars} />}
    </div>
  );
};

export default Home;
