import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import lumon from "../../assets/img/lumon.png";
import { Link } from "react-router";
function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={lumon} alt="lumon logo" height={50} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/prenotaViaggio" className="nav-link">
              Viaggi
            </Link>
            <Link to="/dipendenti" className="nav-link">
              Dipendenti
            </Link>
            <Link to="/prenotazioni" className="nav-link">
              prenotazioni
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
