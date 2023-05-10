import React from 'react';
import { useTranslation } from 'react-i18next';

interface ManualStarDetailsProps {
  id: string;
  title: string;
}

const ManualStarDetails = (props: ManualStarDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div
      id={props.id}
      className="mt-6">
      <h5>{props.title}</h5>
      <p className="manual-text">{t('manual.sections.star_details.intro')}</p>
      <ol className="list-decimal">
        <li>
          <b>{t('manual.sections.star_details.parts.general_star_info.title')}</b>
          <p className="manual-text">
            {t('manual.sections.star_details.parts.general_star_info.intro')}
          </p>
        </li>
        <li>
          <b>{t('manual.sections.star_details.parts.clickable_cards.title')}</b>
          <p className="manual-text">
            {t('manual.sections.star_details.parts.clickable_cards.intro')}
          </p>
          <ul className="list-disc">
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.magnitudes')}</b> –
              {t('manual.sections.star_details.parts.clickable_cards.magnitudes_description')}
            </li>
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.motions')}</b>–
              {t('manual.sections.star_details.parts.clickable_cards.motions_description')}
            </li>
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.radial_velocities')}</b>
            </li>
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.identifiers')}</b> –
              {t('manual.sections.star_details.parts.clickable_cards.identifiers_description')}
            </li>
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.attributes')}</b> –{' '}
              {t('manual.sections.star_details.parts.clickable_cards.attributes_description')}
            </li>
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.vizier_metadata')}</b> –{' '}
              {t('manual.sections.star_details.parts.clickable_cards.vizier_metadata_description')}
            </li>
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.light_curve')}</b> –{' '}
              {t('manual.sections.star_details.parts.clickable_cards.light_curve_description')}
            </li>
            <li>
              <b>{t('manual.sections.star_details.parts.clickable_cards.spectrum')}</b> –{' '}
              {t('manual.sections.star_details.parts.clickable_cards.spectrum_description')}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default ManualStarDetails;
