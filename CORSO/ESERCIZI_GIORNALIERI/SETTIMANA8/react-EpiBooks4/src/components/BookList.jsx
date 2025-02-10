import { Button, Col, Container, Form, FormSelect, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Component } from "react";

class BookList extends Component {
  state = {
    books: fantasy.slice(0, 12),
    genre: fantasy,
    searchQuery: "",
    selectedBookAsin: null, // Stato per il libro selezionato
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
    this.setState({ books: genreData.slice(0, 12), genre: genreData, selectedBookAsin: null });
  };

  handleBookSelection = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  showOtherBooks = () => {
    const numberOfBooks = this.state.books.length + 12;
    this.setState({
      books: [...this.state.books, ...this.state.genre.slice(this.state.books.length, numberOfBooks)],
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Form className="mb-3">
              <Form.Control
                type="text"
                placeholder="Cerca un libro..."
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
              <FormSelect className="mt-2" onChange={(e) => this.handleGenreChange(e.target.value)}>
                <option value="Fantasy">Fantasy</option>
                <option value="History">History</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Scifi">Scifi</option>
              </FormSelect>
            </Form>

            <Row className="text-center">
              {this.state.books
                .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                .map((book) => (
                  <SingleBook key={book.asin} {...book} isSelected={this.state.selectedBookAsin === book.asin} onSelect={this.handleBookSelection} />
                ))}
            </Row>

            {this.state.books.length < this.state.genre.length && (
              <Button className="justify-content-center text-secondary my-3" variant="warning" onClick={this.showOtherBooks}>
                altro...
              </Button>
            )}
          </Col>

          <Col md={4}>
            <CommentArea bookId={this.state.selectedBookAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
