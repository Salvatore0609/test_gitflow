import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router";

function ViaggiPrenotati() {
  const [prenotazioni, setPrenotazioni] = useState(null);
  const [viaggio, setViaggio] = useState(null);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(apiUrl + "/prenotazioni", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        }
        if (data) {
          setPrenotazioni(data.content);
        }
      });
    fetch(apiUrl + "/viaggi", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        }
        if (data) {
          setViaggio(data.content);
        }
      });
  }, []);
  const deletePrenotazione = (id) => {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(apiUrl + "/prenotazioni/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        }
        if (data) {
          setPrenotazioni(data.content);
        }
      });
  };
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center text-success">Viaggi Prenotati</h1>
        </Col>
      </Row>
      <Container>
        <Row>
          {prenotazioni ? (
            prenotazioni.map((prenotazione) => (
              <Col key={prenotazione.id} className="gy-3">
                <Card style={{ width: "18rem" }}>
                  <Link to={`/dipendenti/${prenotazione.id}`}>
                    <Card.Img
                      variant="top"
                      src={
                        prenotazione.avatar ||
                        "https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
                      }
                    />
                  </Link>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{prenotazione.username}</Card.Title>
                    <Card.Text>
                      <span>nome: {prenotazione.nome}</span> <br />
                      <span>cognome: {prenotazione.cognome}</span> <br />
                      <span>email: {prenotazione.email}</span> <br />
                    </Card.Text>
                    <div className="mx-auto">
                      <Button variant="success m-2">Modifica</Button>
                      <Button variant="danger m-2" onClick={() => deletePrenotazione(prenotazione.id)}>
                        cancella prenotazione
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Spinner animation="border" variant="success" />
          )}
        </Row>
      </Container>
    </>
  );
}
export default ViaggiPrenotati;
