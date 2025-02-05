import { Button, Col, Container, Form, FormSelect, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    books: fantasy.slice(0, 12),
    genre: fantasy,
    searchQuery: "",
  };

  showOtherBooks = () => {
    const numberOfBooks = this.state.books.length + 12;

    this.setState({ books: [...this.state.books, ...this.state.genre.slice(this.state.books.length, numberOfBooks)] });
  };

  handleGenreChange = (selectedGenre) => {
    let genreData;
    switch (selectedGenre) {
      case "Fantasy":
        genreData = fantasy;
        break;
      case "History":
        genreData = history;
        break;
      case "Horror":
        genreData = horror;
        break;
      case "Romance":
        genreData = romance;
        break;
      case "Scifi":
        genreData = scifi;
        break;
      default:
        genreData = fantasy;
    }
    this.setState({ books: genreData.slice(0, 12), genre: genreData });
  };

  render() {
    return (
      <Container>
        <Row className="my-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Col>
        </Row>

        <Row>
          <Form>
            <FormSelect
              aria-label="Seleziona un genere"
              value={this.state.genre === fantasy ? "Fantasy" : ""}
              onChange={(e) => this.handleGenreChange(e.target.value)}
            >
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Scifi">Scifi</option>
            </FormSelect>
          </Form>
        </Row>

        <Row>
          <Col className="text-center">
            <Button className="mx-3 my-3" variant="warning" onClick={() => this.handleGenreChange("Fantasy")}>
              fantasy
            </Button>
            <Button className="mx-3 my-3" variant="warning" onClick={() => this.handleGenreChange("History")}>
              history
            </Button>
            <Button className="mx-3 my-3" variant="warning" onClick={() => this.handleGenreChange("Horror")}>
              horror
            </Button>
            <Button className="mx-3 my-3" variant="warning" onClick={() => this.handleGenreChange("Romance")}>
              romance
            </Button>
            <Button className="mx-3 my-3" variant="warning" onClick={() => this.handleGenreChange("Scifi")}>
              scifi
            </Button>
          </Col>
        </Row>

        <Row className="text-center justify-content-center">
          {this.state.books
            .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
            .map((book) => (
              <SingleBook key={book.asin} {...book} />
            ))}

          {this.state.books.length < this.state.genre.length && (
            <Button className="justify-content-center text-secondary my-3" variant="warning" onClick={this.showOtherBooks}>
              altro...
            </Button>
          )}
        </Row>
      </Container>
    );
  }
}

export default BookList;
