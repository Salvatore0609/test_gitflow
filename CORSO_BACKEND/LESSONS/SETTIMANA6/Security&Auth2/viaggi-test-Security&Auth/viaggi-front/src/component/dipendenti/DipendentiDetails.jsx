import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";

function DipendentiDetails() {
  const { id } = useParams();
  const [dipendente, setDipendente] = useState(null);
  function fetchDipendenteDetails(id) {
    const token = sessionStorage.getItem("token");
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/dipendenti/${id}`, { method: "GET", headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => {
        console.log(id);
        console.log(data);
        setDipendente(data);
      })
      .catch((error) => {
        console.error("Errore nella fetch dei dipendenti", error);
        alert(error);
      });
  }
  useEffect(() => {
    fetchDipendenteDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {dipendente ? (
        <div>
          <h1>DipendentiDetails</h1>
          <p>nome: {dipendente.nome}</p>
          <p>cognome: {dipendente.cognome}</p>
          <p>email: {dipendente.email}</p>
          <p>username: {dipendente.username}</p>
          <img src={dipendente.avatar} alt="avatar" />
        </div>
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
}
export default DipendentiDetails;
