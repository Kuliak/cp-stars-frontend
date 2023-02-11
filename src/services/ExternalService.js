import { URLPaths } from '../shared/URLPaths';

const getAllAliases = (name) => {
  const options = {
    method: 'GET',
  };
  return fetch(`${URLPaths.getAllAliases}/${name}`, options).then((response) => response.json());
};

export { getAllAliases };
