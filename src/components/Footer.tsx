import packageInfo from './../../package.json';
import { useTranslation } from 'react-i18next';
import React from 'react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        {`${new Date().getFullYear()}, ${t('general.university.name')}, ${t(
          'footer.client_version'
        )}:${packageInfo.version}`}
      </div>
    </footer>
  );
};

export default Footer;
