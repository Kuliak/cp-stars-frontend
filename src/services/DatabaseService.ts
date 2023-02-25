import { URLPaths } from '../shared/URLPaths';
import StarBasicInfo from '../shared/interfaces/StarBasicInfo';
import Star from '../shared/interfaces/Star';

const getBasicInfoForAllStars = (): Promise<Array<StarBasicInfo>> => {
  const options = {
    method: 'GET',
  };
  return fetch(URLPaths.getBasicInfoForAllStars, options).then((response) => response.json());
};

const getStarDetails = (id: string): Promise<Star> => {
  const options = {
    method: 'GET',
  };
  return fetch(`${URLPaths.getBasicInfoForAllStars}/${id}`, options).then((response) =>
    response.json()
  );
};

export { getBasicInfoForAllStars, getStarDetails };
