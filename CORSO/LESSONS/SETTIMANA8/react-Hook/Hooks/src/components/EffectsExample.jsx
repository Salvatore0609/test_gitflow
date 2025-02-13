import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// 1) Gli Hooks possono essere utilizzati SOLO all'interno di componenti a funzione
// 2) Bisogna utilizzare gli Hooks SEMPRE in modo esplicito all'interno del componente, prima del return.
// MAI all'interno di condizioni, cicli, blocchi intermedi.. ecc..
// devono essere dichiarati nel contesto PRINCIPALE della funzione senza vincoli
const EffectsExample = () => {
  const [name, setName] = useState("Stefano");
  const [count, setCount] = useState(0);
  //   setName sarà una variabile contenente la funzione SETTER che ci permetterà di cambiare il valore di name nel tempo
  //⚠️ Le funzioni setter operano un cambio di stato SEMPRE ASINCRONO! attenzione quindi a leggerne il valore troppo presto
  // (usa i react dev tools per controllare i valori di stato che si aggiornano)

  // questo useEffect chiama la sua funzione di callback sia all'avvio, sia dopo qualsiasi aggiornamento del componente
  // sta facendo il lavoro sia di componentDidMount, che di componentDidUpdate (senza freni)
  useEffect(() => {
    console.log("useEffect senza freni");
  });

  // componentDidMount() - uno useEffect con dependency list vuota
  useEffect(() => {
    console.log("useEffect come didMount");
  }, []);

  // componentDidMount() + componentDidUpdate() - dependency list con un valore di stato o props
  useEffect(() => {
    console.log("useEffect come didUpdate che controlla name");
  }, [name]);

  useEffect(() => {
    console.log("useEffect come didUpdate che controlla count");
  }, [count]);

  useEffect(() => {
    console.log("useEffect come didUpdate che controlla sia name che count");
  }, [name, count]);

  // componentWillUnmount() - con una funzione associata al return della callback
  useEffect(() => {
    // la funzione associata al return sarà chiamata poco prima che il componente si smonti
    return () => {
      console.log("bye bye");
      // questo è il punto in cui possiamo spegnere intervalli, scollegarci da connessioni che rimarrebbero attive ecc...
    };
  }, []);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <p>
            {/* il valore di name dipende da uno stato, quindi è variabile */}
            Il valore di name è: <strong>{name}</strong>
          </p>

          {/* questo elemento si visualizza solo se il nome sarà Armando */}
          {name === "Armando" && (
            <p className="mt-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZbRhAsuuw1QCAOW9J9P3U2dIO-P-Qk0biQ&s" height="50" />
              Ciao Armando!
            </p>
          )}

          <Button
            variant="success"
            onClick={() => {
              {
                /* cambiamo lo stato in base al valore di name in quel momento */
              }
              if (name === "Armando") {
                setName("Stefano");
              } else {
                setName("Armando");
              }
            }}
          >
            Change name
          </Button>
        </Col>
        <Col xs={12}>
          {count}
          <Button
            variant="primary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +1
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EffectsExample;
