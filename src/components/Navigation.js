import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-4">
          <Nav.Link
            href="/"
            className="ms-5 text-light">
            Home
          </Nav.Link>
          <Nav.Link
            href="/about"
            className="ms-4 text-light">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
