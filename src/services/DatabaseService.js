import { databaseURLs } from '../shared/databaseURLs';

const getBasicInfoForAllStars = () => {
  const options = {
    method: 'GET',
  };

  const resp = fetch(databaseURLs.getBasicInfoForAllStars, options).then((response) =>
    response.json()
  );
  console.log(resp);
  return fetch(databaseURLs.getBasicInfoForAllStars, options).then((response) => response.json());
};

export { getBasicInfoForAllStars };
