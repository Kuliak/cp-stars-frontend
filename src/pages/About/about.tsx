import ProjectDescription from './projectDescription';
import Acknowledgements from './Acknowledgements/acknowledgements';
import React from 'react';

const About = () => {
  return (
    <div className="w-100 p-5">
      <ProjectDescription />
      <Acknowledgements />
    </div>
  );
};

export default About;
