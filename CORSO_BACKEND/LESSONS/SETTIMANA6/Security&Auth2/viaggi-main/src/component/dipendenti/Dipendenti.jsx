import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router";

function Dipendenti() {
  const [dipendenti, setDipendenti] = useState(null);
  useEffect(() => {
    fetchDipendenti();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function fetchDipendenti() {
    //abbiamo recuperato il token dal session storage
    const token = sessionStorage.getItem("token");
    fetch("http://localhost:8080/dipendenti?size=100", {
      //abbiamo aggiunto gli headers per poter mettere il token recuperato dal session storage
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        //abbiamo gestito l'errore mostrando un alert
        if (data.error) {
          alert(data.error);
        }
        if (data) {
          setDipendenti(data.content);
        }
      })
      .catch((error) => {
        console.error("Errore nella fetch dei dipendenti", error);
        alert(error);
      });
  }
  function deleteDipendente(id) {
    if (confirm("sei sicuro di voler reintegrare questo dipendente?")) {
      fetch(`http://localhost:8080/dipendenti/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          fetchDipendenti();
          alert("dipendente eliminato");
        })
        .catch((error) => {
          console.error("Errore nella reintegrazione", error);
          alert("sei stato scoperto dal sig. Milchik");
        });
    }
  }
  function uploadAvatar(id) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);
      fetch(`http://localhost:8080/dipendenti/${id}/upload`, {
        method: "PATCH",
        body: formData,
      })
        .then(() => {
          fetchDipendenti();
        })
        .catch((error) => {
          console.error("Errore nell'upload dell'avatar", error);
          alert("Errore nell'upload dell'avatar");
        });
    };
  }
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center text-success">Dipendenti</h1>
        </Col>
      </Row>
      <Container>
        <Row>
          {dipendenti ? (
            dipendenti.map((dipendente) => (
              <Col key={dipendente.id} className="gy-3">
                <Card style={{ width: "18rem" }}>
                  <Link to={`/dipendenti/${dipendente.id}`}>
                    <Card.Img
                      variant="top"
                      src={
                        dipendente.avatar ||
                        "https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
                      }
                    />
                  </Link>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{dipendente.username}</Card.Title>
                    <Card.Text>
                      <span>nome: {dipendente.nome}</span>
                      <span>cognome: {dipendente.cognome}</span>
                      <span>email: {dipendente.email}</span>
                    </Card.Text>
                    <div className="mx-auto">
                      <Button variant="primary m-2" onClick={() => uploadAvatar(dipendente.id)}>
                        Cambia avatar
                      </Button>
                      <Button variant="danger m-2" onClick={() => deleteDipendente(dipendente.id)}>
                        Reintegra
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

export default Dipendenti;
