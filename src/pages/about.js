import { useTranslation } from 'react-i18next';
import Contributors from './Home/contributors';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h3>{t('about.project.project')}</h3>
        <p>{t('about.project.description.created_on')}</p>
        <p>{t('about.project.description.created_for')}</p>

        <h4>{t('about.project.description.contributors')}</h4>
        <Contributors />
      </div>
    </div>
  );
};

export default About;
