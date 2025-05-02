import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

function MyHomePage() {
  return (
    <>
      <Container>
        <Container className="py-2 mx-auto my-3 rounded-pill text-center text-light bg-success">
          <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
            Lumon Industries
          </h1>
        </Container>
        <iframe
          width="100%"
          className="rounded-5 iframe"
          src="https://www.youtube.com/embed/OraR-G4RiLc?si=87x3jDqVYA7VAwJu"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <Row>
          <Col className="d-flex">
            <Link
              to="/login"
              className="button bg-success my-3 mx-auto rounded-pill py-2 px-5 text-light fw-bold fs-3 text-decoration-none text-center"
            >
              Entra
            </Link>
          </Col>
          <Col className="d-flex">
            <Link
              to="/register"
              className="button bg-success my-3 mx-auto rounded-pill py-2 px-5 text-light fw-bold fs-3 text-decoration-none text-center"
            >
              Registra nuovo Lavoratore Scisso
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default MyHomePage;
