import React from 'react';
import { contributorsList } from '../../../components/data/contributorsList';

const Contributors = () => {
  return (
    <div>
      <ul>
        {contributorsList.map((contributor) => (
          <div key={contributor.name}>
            <li>
              <div>{`${contributor.name}: ${contributor.dedication}`}</div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Contributors;
