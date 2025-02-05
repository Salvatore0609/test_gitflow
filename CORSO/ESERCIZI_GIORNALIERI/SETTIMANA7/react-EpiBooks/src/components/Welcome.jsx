import { Alert } from "react-bootstrap";

function Welcome() {
  return (
    <div className="container">
      <Alert className="text-center" variant="warning">
        Scegli il tuo libro!
      </Alert>
      <p>Il miglior shop online per comprare i tuoi libri preferiti!</p>
    </div>
  );
}

export default Welcome;
