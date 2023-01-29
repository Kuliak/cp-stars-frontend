import { useTranslation } from 'react-i18next';

const Server = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('about.acknowledgements.server.resources_description')}</p>
      <ul>
        <li>
          <a
            className="link-warning text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://astrosearcher.cerit-sc.cz/index">
            AstroSearcher
          </a>
          &nbsp;({t('about.acknowledgements.server.astrosearcher.purpose_description')})
        </li>
      </ul>
    </div>
  );
};

export default Server;
