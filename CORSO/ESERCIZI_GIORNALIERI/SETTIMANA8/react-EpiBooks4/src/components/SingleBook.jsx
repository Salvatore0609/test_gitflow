import { Badge, Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    const { img, title, category, price, asin, isSelected, onSelect } = this.props;

    return (
      <Card
        className={`col-sm-6 col-md-4 col-lg-3 my-3 mx-2 p-0 ${isSelected ? "border-2 border-danger" : ""}`}
        style={{ width: "18rem", cursor: "pointer" }}
        onClick={() => onSelect(asin)}
      >
        <Card.Img variant="top" src={img} style={{ objectFit: "cover", minHeight: "430px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Badge>{price}€</Badge>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
