import { useEffect, useState } from "react";
import { Alert, Badge, Button, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

import { Trash3 } from "react-bootstrap-icons";

const ReservationList = (props) => {
  // state = {
  //   reservations: [],
  //   isLoading: false,
  //   hasError: false,
  //   errorMessage: ""
  // };

  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //   metodi custom devono essere creati come arrow function!
  const fetchReservations = async () => {
    // this.setState({ isLoading: true });
    setIsLoading(true);

    try {
      console.log("fetching data...");
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/reservation/");
      if (resp.ok) {
        const reservations = await resp.json();

        // this.setState({ reservations: reservations });
        // sintassi equivalente
        console.log("data retrieved, setting state...");
        // this.setState({ reservations });
        setReservations(reservations);
      } else {
        if (resp.status === 404) {
          throw new Error("404 - risorsa inesistente");
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      }
    } catch (error) {
      console.log(error);

      // this.setState({ hasError: true, errorMessage: error.message });
      setHasError(true);
      setErrorMessage(error.message);
    } finally {
      // this.setState({ isLoading: false });
      setIsLoading(false);
    }
  };

  const deleteReservation = async (id) => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/reservation/" + id, { method: "DELETE" });
    try {
      if (resp.ok) {
        // qui abbiamo certezza che l'elemento si sia cancellato effettivamente
        const deletedObj = await resp.json();

        // visualizziamo un avviso nella pagina di avvenuta cancellazione
        // this.setState({ hasError: true, errorMessage: deletedObj.name + " è stato eliminato con successo!" });
        setHasError(true);
        setErrorMessage(deletedObj.name + " è stato eliminato con successo!");

        // aggiorniamo la lista, rilanciando la stessa fetch di prima
        fetchReservations();

        // dopo 5 secondi l'avviso verrà chiuso
        setTimeout(() => {
          // this.setState({ hasError: false, errorMessage: "" });
          setHasError(false);
          setErrorMessage("");
        }, 5000);
      }
    } catch (err) {
      console.log(err);
      //  utilizziamo lo stesso alert anche in caso di errore nella cancellazione
      // this.setState({ hasError: true, errorMessage: err.message });
      setHasError(true);
      setErrorMessage(err.message);
    }
  };

  //  metodi pre-configurati possono essere creati sia come metodo normale sia come arrow function
  // componentDidMount() {
  //   this.fetchReservations();
  // }
  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <Container fluid>
      <h2 className="text-center mt-5">{props.title}</h2>
      {/* <Button onClick={this.fetchReservations}>Fetch data</Button> */}
      {isLoading && (
        <Spinner animation="border" role="status" variant="primary" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Row className="justify-content-center">
        <Col xs={10} md={6}>
          {hasError && <Alert variant="danger">{errorMessage ? errorMessage : "Errore generico"}</Alert>}
          <ListGroup>
            {reservations.map((reserv) => (
              <ListGroup.Item key={reserv._id} className="d-flex align-items-center gap-1">
                <span>{reserv.name}</span> per <strong>{reserv.numberOfPeople}</strong> {reserv.smoking && <span>🚬</span>}
                <Badge bg="light" className="text-bg-light fw-lighter ms-auto">
                  {new Date(reserv.dateTime).toLocaleString("it-IT")}
                </Badge>
                {/* premere questo bottone di cestino avvierà l'operazione di cancellazione della risorsa con reserv._id dalle API */}
                <Button variant="danger" size="sm" onClick={() => deleteReservation(reserv._id)}>
                  <Trash3 />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ReservationList;
