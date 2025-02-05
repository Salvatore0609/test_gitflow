import { Alert, Container } from "react-bootstrap";

function Welcome() {
  return (
    <Container fluid className="p-0">
      <Alert className="text-center" variant="warning">
        Scegli il tuo libro!
      </Alert>
      <p className="text-center">Il miglior shop online per comprare i tuoi libri preferiti!</p>
    </Container>
  );
}

export default Welcome;
