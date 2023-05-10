import { Trans, useTranslation } from 'react-i18next';
import React from 'react';
import { Link } from 'react-router-dom';

const Hosting = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t('about.acknowledgements.hosting.description.host')}
        <a
          className="link-primary text-decoration-none"
          target="_blank"
          rel="noreferrer"
          href="https://www.cerit-sc.cz/about/mission">
          CERIT Scientific Cloud
        </a>
        {t('about.acknowledgements.hosting.description.on_behalf')}
        <a
          className="link-primary text-decoration-none"
          target="_blank"
          rel="noreferrer"
          href="https://astro.physics.muni.cz/en/">
          {t('about.acknowledgements.hosting.user_behalf')}.
        </a>
      </p>
    </div>
  );
};

export default Hosting;
