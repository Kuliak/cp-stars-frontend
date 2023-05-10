import React from 'react';
import { useTranslation } from 'react-i18next';
import ManualHomePage from './ManualHomePage';
import ManualStarDetails from './ManualStarDetails';

const Manual = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('manual.sections.home_page.title'),
      id: 'home-page',
      subsections: [],
      content: (
        <ManualHomePage
          id={'home-page'}
          title={t('manual.sections.home_page.title')}
        />
      ),
    },
    {
      title: t('manual.sections.star_details.title'),
      id: 'star-details',
      content: (
        <ManualStarDetails
          id={'star-details'}
          title={t('manual.sections.star_details.title')}
        />
      ),
      subsections: [
        {
          title: t('manual.sections.star_details.magnitudes'),
          id: 'star-details-magnitudes',
          content: <div />,
        },
        {
          title: t('manual.sections.star_details.motions'),
          id: 'star-details-motions',
          content: <div />,
        },
        {
          title: t('manual.sections.star_details.radial_velocities'),
          id: 'star-details-radial-velocities',
          content: <div />,
        },
        {
          title: t('manual.sections.star_details.identifiers'),
          id: 'star-details-identifiers',
          content: <div />,
        },
      ],
    },
  ];

  return (
    <div className="content-page">
      <h3>{t('manual.title')}</h3>

      <p className="manual-text">{t('manual.description')}</p>

      <p className="manual-text">{t('manual.navigation')}</p>

      <div>
        {sections.map((section) => {
          return (
            <div>
              <a
                className="link-primary text-decoration-none"
                href={`#${section.id}`}>
                {section.title}
              </a>
            </div>
          );
        })}
      </div>

      {sections.map((section) => {
        return section.content;
      })}
    </div>
  );
};

export default Manual;
