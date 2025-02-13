import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ToggleSection = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button variant="primary" className="d-block mx-auto my-3" onClick={() => setShow(!show)}>
        {show ? "Nascondi" : "Mostra"} Sezione
      </Button>

      {show && (
        <Card className="mx-auto" style={{ width: "18rem" }} data-testid="card-example">
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1677340568921-91bef1f07d24?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Card.Body>
            <Card.Title>Fountain</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ToggleSection;
