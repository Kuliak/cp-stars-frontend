import { contributorsList } from '../../shared/contributorsList';

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
