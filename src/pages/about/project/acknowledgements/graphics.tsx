import React from 'react';
import { useTranslation } from 'react-i18next';

const Graphics = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('about.acknowledgements.graphics')}</p>
      <ul>
        <li>
          <a
            className="link-primary text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://getbootstrap.com/">
            Bootstrap
          </a>
        </li>
        <li>
          <a
            className="link-primary text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://reactjs.org/">
            React
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Graphics;
