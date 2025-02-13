import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// 1) Gli Hooks possono essere utilizzati SOLO all'interno di componenti a funzione
// 2) Bisogna utilizzare gli Hooks SEMPRE in modo esplicito all'interno del componente, prima del return.
// MAI all'interno di condizioni, cicli, blocchi intermedi.. ecc..
// devono essere dichiarati nel contesto PRINCIPALE della funzione senza vincoli
const StateExample = () => {
  const [name, setName] = useState("Stefano");
  //   setName sarà una variabile contenente la funzione SETTER che ci permetterà di cambiare il valore di name nel tempo
  //⚠️ Le funzioni setter operano un cambio di stato SEMPRE ASINCRONO! attenzione quindi a leggerne il valore troppo presto
  // (usa i react dev tools per controllare i valori di stato che si aggiornano)

  const [comments, setComments] = useState([]);
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
      </Row>

      <Row>
        <Col xs={12}>
          {/* generiamo elementi di una lista che poi andranno ad aggiungere una nuova colonna */}
          <Button variant="warning" onClick={() => setComments([...comments, { text: "Best restaurant in town!" }])}>
            Aggiungi commento
          </Button>
        </Col>
        {/* comments è uno stato, ogni volta che si aggiorna mapperà il nuovo array visualizzando più elementi */}
        {comments.map((comment, index) => (
          <Col xs={12} key={`comment-${index}`}>
            {comment.text}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StateExample;
