import { Button, Form } from "react-bootstrap";

function Login() {
  const handlesubmit = (event) => {
    event.preventDefault();
    //quando si avvia l'app va a recuperare l'indirizzo dell'api (a seconda se è ambiente di produzione o di sviluppo)
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("api url", apiUrl);
    fetch(apiUrl + "/dipendenti/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //abbiamo preso i due campi del form e li abbiamo messi nel body della richiesta
        username: event.target[0].value,
        password: event.target[1].value,
      }),
    })
      .then((response) => response.json())
      //il token viene salvato nel browser col session storage
      .then((data) => sessionStorage.setItem("token", data.token))
      .catch((error) => alert.error(error))
      .finally(() => (window.location.href = "/"));
  };
  return (
    <div>
      <Form onSubmit={(event) => handlesubmit(event)}>
        <Form.Label>username</Form.Label>
        <Form.Control type="text" />
        <Form.Label>password</Form.Label>
        <Form.Control type="password" />
        <Button type="submit">login</Button>
      </Form>
    </div>
  );
}

export default Login;
