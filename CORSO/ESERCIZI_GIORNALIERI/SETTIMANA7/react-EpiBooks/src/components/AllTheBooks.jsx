import { Button, Card, FormSelect } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    Books: fantasy.slice(0, 10),
    Genre: fantasy,
  };

  showOtherBooks = () => {
    const numberOfBooks = this.state.Books.length + 10;

    this.setState({ Books: [...this.state.Books, ...this.state.Genre.slice(this.state.Books.length, numberOfBooks)] });
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
                  this.setState({ Books: fantasy.slice(0, 10), Genre: fantasy });
                  break;
                case "History":
                  this.setState({ Books: history.slice(0, 10), Genre: history });
                  break;
                case "Horror":
                  this.setState({ Books: horror.slice(0, 10), Genre: horror });
                  break;
                case "Romance":
                  this.setState({ Books: romance.slice(0, 10), Genre: romance });
                  break;
                case "Scifi":
                  this.setState({ Books: scifi.slice(0, 10), Genre: scifi });
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
          <Button variant="warning" onClick={() => this.setState({ Books: fantasy.slice(0, 10), Genre: fantasy })}>
            fantasy
          </Button>
          <Button variant="warning" onClick={() => this.setState({ Books: history.slice(0, 10), Genre: history })}>
            history
          </Button>
          <Button variant="warning" onClick={() => this.setState({ Books: horror.slice(0, 10), Genre: horror })}>
            horror
          </Button>
          <Button variant="warning" onClick={() => this.setState({ Books: romance.slice(0, 10), Genre: romance })}>
            romance
          </Button>
          <Button variant="warning" onClick={() => this.setState({ Books: scifi.slice(0, 10), Genre: scifi })}>
            scifi
          </Button>
        </div>

        <div className="row text-center d-flex justify-content-center">
          {this.state.Books.map((book) => {
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
