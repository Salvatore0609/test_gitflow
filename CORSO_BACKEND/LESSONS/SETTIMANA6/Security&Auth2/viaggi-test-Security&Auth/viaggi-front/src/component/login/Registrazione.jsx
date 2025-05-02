import { Button, Form, FormControl, FormLabel } from "react-bootstrap";

function Registrazione() {
  function handlesubmit(event) {
    event.preventDefault();
    fetch(import.meta.env.VITE_API_URL + "/dipendenti/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: event.target[0].value,
        cognome: event.target[1].value,
        username: event.target[2].value,
        email: event.target[3].value,
        password: event.target[4].value,
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          alert("Registrazione avvenuta con successo");
        }
      })
      .catch((error) => {
        console.error("Errore nella fetch dei dipendenti", error);
        alert(error);
      })
      .finally(() => {
        window.location.href = "/";
      });
  }
  return (
    <div>
      <h1>Registrazione</h1>
      <Form onSubmit={(event) => handlesubmit(event)}>
        <FormLabel>Nome</FormLabel>
        <FormControl type="text" placeholder="Nome" />
        <FormLabel>Cognome</FormLabel>
        <FormControl type="text" placeholder="Cognome" />
        <FormLabel>Username</FormLabel>
        <FormControl type="text" placeholder="username" />
        <FormLabel>Email</FormLabel>
        <FormControl type="email" placeholder="email" />
        <FormLabel>Password</FormLabel>
        <FormControl type="password" placeholder="password" />
        <Button type="submit">Registrati</Button>
      </Form>
    </div>
  );
}
export default Registrazione;
