import React from 'react';
import { useTranslation } from 'react-i18next';
import Graphics from './graphics';
import Server from './server';

const Acknowledgements = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('about.acknowledgements.name')}</h3>
      <Server />
      <Graphics />
    </div>
  );
};

export default Acknowledgements;
