import BasicInfoStarsTable from './Stars';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import React from 'react';
import { StarBasicInfo, StarsControllerApi } from '../../libs/cpstars/openapi';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [stars, setStars] = useState<StarBasicInfo[]>([]);
  const [starsController] = useState(() => new StarsControllerApi());

  useEffect(() => {
    setLoading(true);
    starsController.getBasicInfoStarsList().then((data) => {
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
