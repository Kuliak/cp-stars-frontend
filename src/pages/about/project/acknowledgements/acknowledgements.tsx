import React from 'react';
import { useTranslation } from 'react-i18next';
import Graphics from './graphics';
import Server from './server';
import Hosting from './hosting';

const Acknowledgements = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <h3>{t('about.acknowledgements.name')}</h3>
      <Hosting />
      <Server />
      <Graphics />
    </div>
  );
};

export default Acknowledgements;
