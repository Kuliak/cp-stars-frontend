import ProjectDescription from './projectDescription';
import Acknowledgements from './Acknowledgements/acknowledgements';

const About = () => {
  return (
    <div className="text-box-transparent w-75 p-5 m-5 mx-auto">
      <ProjectDescription />
      <Acknowledgements />
    </div>
  );
};

export default About;
