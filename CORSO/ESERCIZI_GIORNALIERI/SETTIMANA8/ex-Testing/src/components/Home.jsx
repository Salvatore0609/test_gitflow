import Gallery from "./Gallery";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <h1>Home</h1>
      <Gallery title="black mirror" type="movie" />
      <Gallery title="batman" type="movie" />
    </Container>
  );
};

export default Home;
