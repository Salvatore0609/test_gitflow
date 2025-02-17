import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Aziende Preferite</h1>
          {favourites.length > 0 ? (
            favourites.map((company, index) => (
              <Row key={index} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
                <Col>
                  <Link to={`/${company}`}>{company}</Link>
                </Col>
              </Row>
            ))
          ) : (
            <p>Nessuna azienda tra i preferiti.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
