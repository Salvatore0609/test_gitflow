import { useEffect, useState } from "react";
import { Badge, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import DishComments from "./DishComments";

const PastaDetails = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  // useParams è un hook che se invocato ci torna un oggetto con all'interno coppie chiave-valore con la chiave dello stesso nome
  // del parametro dinamico specificato in App.jsx
  // nel nostro caso il parametro si chiamava pastaId e quindi possiamo leggerlo come params.pastaId
  console.log(params);
  console.log(params.pastaId);
  console.log(props.menu);

  const [pasta, setPasta] = useState(null);

  useEffect(() => {
    const pastaObj = props.menu.find((plate) => plate.id.toString() === params.pastaId);
    console.log(pastaObj);

    // per via del fatto che il dato prodotto non è stato ricavato da una fetch, per simulare un tempo di attesa (che normalmente non servirebbe!)
    // impostiamo un timeout di 2s, così da vedere lo spinner azionarsi e poi disattivarsi nella pagina
    setTimeout(() => {
      if (pastaObj) {
        setPasta(pastaObj);
      } else {
        navigate("/menu");
      }
    }, 2000);
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          {pasta ? (
            <>
              <Image className="w-100" fluid src={pasta.image} />
              <h1>{pasta.name}</h1>
              <p>{pasta.description}</p>
              <Badge bg="success" className="mb-3">
                {pasta.price}€
              </Badge>

              <DishComments selectedPasta={pasta} />
            </>
          ) : (
            <div className="text-center mt-5">
              <Spinner animation="grow" variant="success" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PastaDetails;
