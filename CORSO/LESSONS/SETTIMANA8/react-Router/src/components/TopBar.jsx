import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router";

const TopBar = (props) => {
  const location = useLocation();
  // useLocation è un hook che quando invocato ci costruisce un oggetto con i dati aggiornati di una location, con pathname e search all'interno
  console.log(location.pathname);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          {props.title} — {props.claim}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname === "/prenotazioni" ? "active" : ""}`} to="/prenotazioni">
              Prenotazioni
            </Link>
            <Link className={`nav-link ${location.pathname === "/prenota-tavolo" ? "active" : ""}`} to="/prenota-tavolo">
              Prenota tavolo
            </Link> */}
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
            <NavLink className="nav-link" to="/prenotazioni">
              Prenotazioni
            </NavLink>
            <NavLink className="nav-link" to="/prenota-tavolo">
              Prenota tavolo
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
