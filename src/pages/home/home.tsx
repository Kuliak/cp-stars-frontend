import BasicInfoStarsTable from './Stars';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import React from 'react';
import { StarBasicInfo } from '../../libs/cpstars/openapi';
import ApiCaller from '../../services/ApiCaller';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [stars, setStars] = useState<StarBasicInfo[]>([]);

  useEffect(() => {
    setLoading(true);
    ApiCaller.starsController.getBasicInfoStarsList().then((data) => {
      setStars(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="center content-page">
      {isLoading && <CircularProgress />}
      {!isLoading && <BasicInfoStarsTable originalRows={stars} />}
    </div>
  );
};

export default Home;
