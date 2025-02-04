import { Alert } from "react-bootstrap";

function Welcome() {
  return (
    <div className="container">
      <Alert className="text-center" variant={"warning"}>
        Scegli il tuo libro!
      </Alert>
    </div>
  );
}

export default Welcome;
