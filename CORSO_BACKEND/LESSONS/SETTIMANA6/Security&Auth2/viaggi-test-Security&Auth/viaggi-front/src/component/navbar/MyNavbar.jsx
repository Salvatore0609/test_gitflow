import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import lumon from "../../assets/img/lumon.png";
import { Link } from "react-router";
import { useEffect, useState } from "react";
function MyNavbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/dipendenti/current-user`, { method: "GET", headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Errore nella fetch dei dipendenti navbar", error);
        alert(error);
      });
  }, []);
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
            <Link to={user ? "/prenotaViaggio" : "/login"} className="nav-link">
              Prenota
            </Link>
            <Link to="/dipendenti" className="nav-link">
              Dipendenti
            </Link>
            <Link to="/prenotazioni" className="nav-link">
              Viaggi prenotati
            </Link>
          </Nav>
          {user && (
            <Link to="/profile">
              <img src={user.avatar} alt="user" height={50} />
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
