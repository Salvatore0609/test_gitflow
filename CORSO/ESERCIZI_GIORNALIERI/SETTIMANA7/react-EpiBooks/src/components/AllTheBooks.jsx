import { Card } from "react-bootstrap";
import books from "../data/fantasy.json";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    selectedBook: null,
  };

  render() {
    return (
      <div className="container">
        <div className="row text-center d-flex justify-content-center">
          {books.map((book) => {
            return (
              <Card className="col-sm-6 col-md-4 col-lg-3 my-3 mx-2" key={`book-${book.asin}`} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} style={{ objectFit: "contain", minHeight: "420px" }} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}€</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllTheBooks;
