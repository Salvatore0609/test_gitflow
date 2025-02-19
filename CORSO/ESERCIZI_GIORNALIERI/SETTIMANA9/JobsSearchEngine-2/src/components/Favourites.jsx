import { Container, Row, Col, Alert } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {favourites.length > 0 ? (
            favourites.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <>
              <Alert variant="warning">Non ci sono preferiti</Alert>
              <Link to="/">Vai a homepage</Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
