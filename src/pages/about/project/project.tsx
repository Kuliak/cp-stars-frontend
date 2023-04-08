import ProjectDescription from './projectDescription';
import Acknowledgements from './acknowledgements/acknowledgements';
import React from 'react';
import { paths } from '../../../shared/paths';
import BackButton from '../../../components/buttons/BackButton';

const Project = () => {
  return (
    <div className="w-100 content-page">
      <BackButton navigateTo={paths.about.general} />
      <ProjectDescription />
      <Acknowledgements />
    </div>
  );
};

export default Project;
