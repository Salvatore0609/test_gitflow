import { useEffect, useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";

function PrenotaViaggio() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/dipendenti/current-user`, { method: "GET", headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Errore nella fetch dei dipendenti navbar", error);
        alert(error);
      });
  }, []);
  function handlesubmit(event) {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    event.preventDefault();
    fetch(apiUrl + "/prenotazioni/utente/" + user.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: event.target[0].value,
        destinazione: event.target[1].value,
        noteDipendente: event.target[2].value,
        dataRichiesta: new Date(),
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Prenotazione avvenuta con successo");
        } else alert("Prenotazione fallita");
      })
      .catch((error) => console.error("Errore nella fetch dei dipendenti", error));
  }
  return (
    <div>
      <h1>prenotaViaggio</h1>
      <Form onSubmit={(event) => handlesubmit(event)}>
        <FormLabel>data</FormLabel>
        <Form.Control type="date" />
        <FormLabel>Destinazione</FormLabel>
        <Form.Control type="text" />
        <FormLabel>Note dipendente</FormLabel>
        <Form.Control type="text" />
        <Button type="submit">Prenota</Button>
      </Form>
    </div>
  );
}
export default PrenotaViaggio;
