import React from 'react';
import { useTranslation } from 'react-i18next';

interface ManualHomePageProps {
  id: string;
  title: string;
}

const ManualHomePage = (props: ManualHomePageProps) => {
  const { t } = useTranslation();

  return (
    <div
      id={props.id}
      className="mt-6">
      <h5>{props.title}</h5>
      <p className="manual-text">{t('manual.sections.home_page.intro')}</p>
      <p className="manual-text">{t('manual.sections.home_page.table.intro')}</p>
      <ul className="list-disc">
        <li>
          <b>Id</b> – {t('manual.sections.home_page.table.id_description')}
        </li>
        <li>
          <b>Renson</b> – {t('manual.sections.home_page.table.renson_description')}
        </li>
        <li>
          <b>{t('manual.sections.home_page.table.category_probability')}</b> –{' '}
          {t('manual.sections.home_page.table.category_probability_description')}
        </li>
        <li>
          <b>{t('manual.sections.home_page.table.binary_system')}</b> –{' '}
          {t('manual.sections.home_page.table.binary_system_description')}
        </li>
        <li>
          <b>ICRS RA</b> – {t('manual.sections.home_page.table.icrs_ra_description')}
        </li>
        <li>
          <b>ICRS Dec</b> – {t('manual.sections.home_page.table.icrs_dec_description')}
        </li>
        <li>
          <b>{t('manual.sections.home_page.table.galactic_longitude')}</b> –{' '}
          {t('manual.sections.home_page.table.galactic_longitude_description')}
        </li>
        <li>
          <b>{t('manual.sections.home_page.table.galactic_latitude')}</b> –{' '}
          {t('manual.sections.home_page.table.galactic_latitude_description')}
        </li>
      </ul>
    </div>
  );
};

export default ManualHomePage;
