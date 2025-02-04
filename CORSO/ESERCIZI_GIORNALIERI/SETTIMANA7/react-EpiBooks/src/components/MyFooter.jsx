import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container className="container text-center mt-3 p-4 bg-dark text-light">
      <Row>
        <Col>
          <p className="mb-0">Ciao sono il footer component fatto in REACT</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
