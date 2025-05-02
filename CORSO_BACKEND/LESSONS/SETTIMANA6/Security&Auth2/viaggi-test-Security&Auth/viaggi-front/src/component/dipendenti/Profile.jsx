import { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState(null);
  function fetchUser() {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/dipendenti/current-user`, { method: "GET", headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
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

  return (
    <Container>
      {user ? (
        <div>
          <h1>DipendentiDetails</h1>
          <p>nome: {user.nome}</p>
          <p>cognome: {user.cognome}</p>
          <p>email: {user.email}</p>
          <p>username: {user.username}</p>
          <img src={user.avatar} alt="avatar" />
          <br />
          <Button
            className="btn btn-primary mt-3"
            onClick={() => {
              window.location.href = "profile/modifica";
            }}
          >
            Modifica
          </Button>
        </div>
      ) : (
        <Spinner animation="border" />
      )}
    </Container>
  );
}
export default Profile;
