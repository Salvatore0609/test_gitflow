import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Table from "./components/Table";
import Details from "./components/Details";
import { Component } from "react";

class App extends Component {
  state = {
    selected: ""
  };

  changeSelected = (tablePos) => this.setState({ selected: tablePos });

  render() {
    console.log("RENDER App");
    return (
      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <Table selected={this.state.selected} changeSelected={this.changeSelected} />
          </Col>
          <Col>
            <Details selected={this.state.selected} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
