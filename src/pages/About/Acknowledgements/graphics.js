import { useTranslation } from 'react-i18next';

const Graphics = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('about.acknowledgements.graphics')}</p>
      <ul>
        <li>
          <a
            className="link-warning text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://getbootstrap.com/">
            Bootstrap
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Graphics;
