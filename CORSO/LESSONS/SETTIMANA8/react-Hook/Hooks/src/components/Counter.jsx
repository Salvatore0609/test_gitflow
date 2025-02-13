import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// gli hook possono essere utilizzati SOLO in componenti a funzione

const Counter = () => {
  // useState è un hook, di fatto una funzione preconfigurata, che, se chiamata, produce come valore un array di due elementi
  //   const state = useState(); // [dato, funzione]
  // approccio 1)
  //   const value = state[0];
  //   const setValue = state[1];
  // approccio 2)
  //   const [value, setValue] = state

  // approccio 3) *ottimizzato*
  const [value, setValue] = useState();
  //   console.log(value);
  //   console.log(setValue);

  // l'argomento passato al hook useState diventerà il valore con cui la variabile count si inizializzerà
  const [count, setCount] = useState(0);
  // la funzione setter è SEMPRE ASINCRONA (come lo era il this.setState())
  console.log("primo", count);
  return (
    <Container className=" text-center mt-5">
      <h1>Counter</h1>
      <Row className="justify-content-center">
        <Col md={4}>
          <Button
            variant="primary"
            onClick={() => {
              setCount(count - 1);
              // ⚠️ NON CERCATE DI LEGGERE UN VALORE APPENA SETTATO
              console.log("secondo", count); // questo console log vi mentirà!
              // perché leggerà sempre troppo presto, un valore di stato che verrà cambiato in modo ASINCRONO,
              // e quindi si salverà successivamente all'esecuzione di questo console.log
            }}
          >
            -1
          </Button>
          {count}
          <Button
            variant="primary"
            onClick={() => {
              setCount(count + 1);
              // ⚠️ NON CERCATE DI LEGGERE UN VALORE APPENA SETTATO
              console.log("terzo", count); // questo console log vi mentirà!
            }}
          >
            +1
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
