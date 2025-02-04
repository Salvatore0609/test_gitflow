import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          {props.title} — {props.claim}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              About
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
