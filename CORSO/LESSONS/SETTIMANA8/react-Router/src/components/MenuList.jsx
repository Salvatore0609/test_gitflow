import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const MenuList = (props) => {
  return (
    <Container>
      {props.menu.map((plate) => (
        <Row key={`pasta-${plate.id}`} className="justify-content-center mb-2">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={plate.image} />
              <Card.Body>
                <Card.Title>{plate.name}</Card.Title>
                <Card.Text className="mb-2">{plate.description}</Card.Text>
                <Card.Text>
                  <Badge bg="info">{plate.price}€</Badge>
                </Card.Text>
                <Link className="btn btn-dark w-100" to={`/menu/details/${plate.name.replaceAll(" ", "-").toLowerCase()}/${plate.id}`}>
                  Vai a {plate.name}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default MenuList;
