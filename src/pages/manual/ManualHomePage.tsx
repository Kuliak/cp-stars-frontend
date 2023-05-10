import React from 'react';
import { useTranslation } from 'react-i18next';

interface ManualHomePageProps {
  id: string;
}

const ManualHomePage = (props: ManualHomePageProps) => {
  const { t } = useTranslation();

  return (
    <div
      id={`#${props.id}`}
      className="mt-5">
      <h5>{t('manual.sections.home_page.title')}</h5>
    </div>
  );
};

export default ManualHomePage;
