import { Button, Card, FormSelect } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    books: fantasy.slice(0, 12),
    genre: fantasy,
  };

  showOtherBooks = () => {
    const numberOfBooks = this.state.books.length + 12;

    this.setState({ books: [...this.state.books, ...this.state.genre.slice(this.state.books.length, numberOfBooks)] });
  };

  render() {
    return (
      <div className="container">
        <div>
          <FormSelect
            aria-label="Default select example"
            onChange={(e) => {
              switch (e.target.value) {
                case "Fantasy":
                  this.setState({ books: fantasy.slice(0, 12), genre: fantasy });
                  break;
                case "History":
                  this.setState({ books: history.slice(0, 12), genre: history });
                  break;
                case "Horror":
                  this.setState({ books: horror.slice(0, 12), genre: horror });
                  break;
                case "Romance":
                  this.setState({ books: romance.slice(0, 12), genre: romance });
                  break;
                case "Scifi":
                  this.setState({ books: scifi.slice(0, 12), genre: scifi });
                  break;
                default:
              }
            }}
          >
            <option>Fantasy</option>
            <option>History</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Scifi</option>
          </FormSelect>
        </div>
        <div className="text-center">
          <Button variant="warning" onClick={() => this.setState({ books: fantasy.slice(0, 12), genre: fantasy })}>
            fantasy
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: history.slice(0, 12), genre: history })}>
            history
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: horror.slice(0, 12), genre: horror })}>
            horror
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: romance.slice(0, 12), genre: romance })}>
            romance
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: scifi.slice(0, 12), genre: scifi })}>
            scifi
          </Button>
        </div>

        <div className="row text-center d-flex justify-content-center">
          {this.state.books.map((book) => {
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

        <Button variant="warning" onClick={() => this.showOtherBooks()}>
          altro...
        </Button>
      </div>
    );
  }
}

export default AllTheBooks;
