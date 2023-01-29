import { Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-4">
          <Nav.Link
            href="/"
            className="ms-5 text-light">
            {t('navigation.home')}
          </Nav.Link>
          <Nav.Link
            href="/about"
            className="ms-4 text-light">
            {t('navigation.about')}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
