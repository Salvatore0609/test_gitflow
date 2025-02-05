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
    this.setState((prevState) => {
      const numberOfBooks = prevState.books.length + 12;
      return { books: [...prevState.books, ...prevState.genre.slice(prevState.books.length, numberOfBooks)] };
    });
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
        <Row>
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
        </Row>

        <Row>
          <Col className="text-center">
            {["Fantasy", "History", "Horror", "Romance", "Scifi"].map((genre) => (
              <Button key={genre} className="mx-3 my-3" variant="warning" onClick={() => this.handleGenreChange(genre)}>
                {genre.toLowerCase()}
              </Button>
            ))}
          </Col>
        </Row>

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
