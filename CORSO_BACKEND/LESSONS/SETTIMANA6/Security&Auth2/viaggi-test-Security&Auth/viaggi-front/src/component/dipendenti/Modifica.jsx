import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function Modifica() {
  const [user, setUser] = useState(null);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  function fetchUser() {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/dipendenti/current-user`, { method: "GET", headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        setNome(data.nome);
        setCognome(data.cognome);
        setEmail(data.email);
        setUsername(data.username);
      })
      .catch((error) => {
        console.error("Errore nella fetch dei dipendenti", error);
        alert(error);
      });
  }
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlesubmit = (event) => {
    event.preventDefault();
    //quando si avvia l'app va a recuperare l'indirizzo dell'api (a seconda seè ambiente di produzione o di sviluppo)
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("api url", apiUrl);
    fetch(apiUrl + "/dipendenti/" + user.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: event.target[0].value,
        cognome: event.target[1].value,
        email: event.target[2].value,
        username: event.target[3].value,
        password: event.target[4].value,
      }),
    })
      .then((response) => {
        if (response.ok) alert("Modifica avvenuta con successo");
      })
      .catch((error) => console.error("Errore nella fetch dei dipendenti", error));
  };
  return (
    <div>
      <Container>
        <Form onSubmit={(event) => handlesubmit(event)}>
          <Form.Label>nome</Form.Label>
          <Form.Control type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
          <Form.Label>cognome</Form.Label>
          <Form.Control type="text" value={cognome} onChange={(event) => setCognome(event.target.value)} />
          <Form.Label>email</Form.Label>
          <Form.Control type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Form.Label>username</Form.Label>
          <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} />

          <Button type="submit" className="mt-3">
            Modifica
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Modifica;
