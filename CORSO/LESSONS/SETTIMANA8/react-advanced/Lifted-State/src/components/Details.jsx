import { Alert } from "react-bootstrap";

const Details = (props) => {
  console.log("RENDER Details");
  return (
    <Alert variant="success">
      Hai selezionato: <strong>{props.selected || "ancora niente"}</strong>
    </Alert>
  );
};

export default Details;
