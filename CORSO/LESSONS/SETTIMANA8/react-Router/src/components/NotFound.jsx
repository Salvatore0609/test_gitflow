import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  // useNavigate va invocato perché possa ritornare l'effettiva funzione che
  // potremmo andare a chiamare per attivare un cambio pagina (senza refresh)
  //   console.log("navigate", navigate);
  const handleClick = () => navigate("/prenotazioni");

  return (
    <Container>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8}>
          <h1 className="display-3 text-primary">404 — Risorsa non trovata!</h1>
          <p className="lead"> La pagina che stai cercando non è disponibile.</p>

          <Link to="/" className="btn btn-outline-success">
            Torna alla pagina principale
          </Link>

          <Button variant="info" className="d-block mx-auto mt-3" onClick={handleClick}>
            Vai a prenotazioni
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
