import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    text: "",
    rating: 1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd({ comment: this.state.text, rate: this.state.rating, elementId: this.props.bookId });
    this.setState({ text: "", rating: 1 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mt-3">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Scrivi un commento..."
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Select value={this.state.rating} onChange={(e) => this.setState({ rating: Number(e.target.value) })}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="dark" className="my-3">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;
