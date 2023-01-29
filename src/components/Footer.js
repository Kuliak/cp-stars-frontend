import packageInfo from './../../package.json';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <p>{`${new Date().getFullYear()}, ${t('general.university.name')}, ${t(
          'footer.client_version'
        )}:${packageInfo.version}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
