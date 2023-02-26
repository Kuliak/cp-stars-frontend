import BasicInfoStarsTable from './Stars';
import { getBasicInfoForAllStars } from '../../services/DatabaseService';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import React from 'react';
import StarBasicInfo from '../../shared/interfaces/StarBasicInfo';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [stars, setStars] = useState<StarBasicInfo[]>([]);

  useEffect(() => {
    setLoading(true);
    getBasicInfoForAllStars().then((data) => {
      setStars(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="center">
      {isLoading && <CircularProgress />}
      {!isLoading && <BasicInfoStarsTable originalRows={stars} />}
    </div>
  );
};

export default Home;
