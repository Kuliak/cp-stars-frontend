const Contributors = () => {
  const contributors = [
    { name: 'Ľuboslav Halama', dedication: 'Analysis, Design, Development, Testing' },
    { name: 'Ernst Paunzen', dedication: 'Project Consultant' },
    { name: 'Martin Kuba', dedication: 'Deployment' },
  ];

  return (
    <div>
      <ul>
        {contributors.map((contributor) => (
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
