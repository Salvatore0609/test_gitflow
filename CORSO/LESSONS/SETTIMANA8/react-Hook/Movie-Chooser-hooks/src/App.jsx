import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

import MovieSelect from "./components/MovieSelect";
import MovieCard from "./components/MovieCard";

const App = () => {
  // stato condiviso con MovieSelect e MovieCard
  // ogni cambiamento di questo stato, produrrà una ri-renderizzazione di entrambi i componenti figli MovieSelect e MovieCard
  // state = {
  //   movieTitle: "Iron Man"
  // };

  const [movieTitle, setMovieTitle] = useState("Iron Man");

  // MovieSelect sarà in grado di chiamare internamente questo metodo che però esiste nel livello più esterno (App.jsx)
  // gli viene passato come prop chiamata allo stesso modo
  const changeMovieTitle = (newTitle) => {
    // this.setState({ movieTitle: newTitle })
    setMovieTitle(newTitle);
  };

  return (
    <Container className="mt-5 pt-1">
      <h1 className="text-center display-3 mt-5">Movie Chooser</h1>
      <Row className="justify-content-center ">
        <Col xs={12} md={4}>
          <MovieSelect movieTitle={movieTitle} changeMovieTitle={changeMovieTitle} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={4}>
          {movieTitle && <MovieCard movieTitle={movieTitle} />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
