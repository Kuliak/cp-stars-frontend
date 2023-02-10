import { URLPaths } from '../shared/URLPaths';

const getBasicInfoForAllStars = () => {
  const options = {
    method: 'GET',
  };
  return fetch(URLPaths.getBasicInfoForAllStars, options).then((response) => response.json());
};

const getStarDetails = (id) => {
  const options = {
    method: 'GET',
  };
  return fetch(`${URLPaths.getBasicInfoForAllStars}/${id}`, options).then((response) =>
    response.json()
  );
};

export { getBasicInfoForAllStars, getStarDetails };
