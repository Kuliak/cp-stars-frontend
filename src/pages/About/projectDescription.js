import Contributors from './contributors';
import { useTranslation } from 'react-i18next';

const ProjectDescription = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('about.project.name')}</h3>
      <p>{t('about.project.description.created_on')}</p>
      <p>{t('about.project.description.created_for')}</p>

      <h5>{t('about.project.description.contributors')}</h5>
      <Contributors />
    </div>
  );
};

export default ProjectDescription;
