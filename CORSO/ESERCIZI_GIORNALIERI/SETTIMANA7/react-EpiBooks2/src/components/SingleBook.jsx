import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false, // Stato per evidenziare il libro
  };

  toggleSelection = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { img, title, category, price } = this.props;

    return (
      <Card
        className={`col-sm-6 col-md-4 col-lg-3 my-3 mx-2 ${this.state.selected ? "border-2 border-danger" : ""}`}
        style={{ width: "18rem", cursor: "pointer" }}
        onClick={this.toggleSelection}
      >
        <Card.Img variant="top" src={img} style={{ objectFit: "cover", minHeight: "420px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{price}€</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
