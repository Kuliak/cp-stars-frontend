import { databaseURLs } from '../shared/databaseURLs';

const getBasicInfoForAllStars = () => {
  const options = {
    method: 'GET',
  };
  return fetch(databaseURLs.getBasicInfoForAllStars, options).then((response) => response.json());
};

const getStarDetails = (id) => {
  const options = {
    method: 'GET',
  };
  return fetch(`${databaseURLs.getBasicInfoForAllStars}/${id}`, options).then((response) =>
    response.json()
  );
};

export { getBasicInfoForAllStars, getStarDetails };
