import { useTranslation } from 'react-i18next';
import Graphics from './graphics';

const Acknowledgements = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('about.acknowledgements.name')}</h3>
      <Graphics />
    </div>
  );
};

export default Acknowledgements;
