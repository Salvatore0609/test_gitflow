import { Form } from "react-bootstrap";

function Login() {
  const handlesubmit = (event) => {
    event.preventDefault();
    //quando si avvia l'app va a recuperare l'indirizzo dell'api (a seconda se è ambiente di produzione o di sviluppo)
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("api url", apiUrl);
    fetch(apiUrl + "/api/auth/login", {
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
      .then((data) => sessionStorage.setItem("token", data.token));
  };
  return (
    <div>
      <Form onSubmit={(event) => handlesubmit(event)}>
        <label>username</label>
        <input type="text" />
        <label>password</label>
        <input type="password" />
        <button type="submit">login</button>
      </Form>
    </div>
  );
}

export default Login;
