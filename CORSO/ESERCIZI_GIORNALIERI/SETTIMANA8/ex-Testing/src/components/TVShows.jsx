import { Container } from "react-bootstrap";
import Gallery from "./Gallery";

const TVShows = () => {
  return (
    <Container fluid>
      <h1>TVShows</h1>
      <Gallery title="black mirror" type="series" />
    </Container>
  );
};

export default TVShows;
