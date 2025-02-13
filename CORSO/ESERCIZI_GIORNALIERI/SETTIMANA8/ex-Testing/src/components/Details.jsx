import { useEffect, useState } from "react";
import { Alert, Image, Spinner } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {
  const params = useParams();
  const [film, setFilm] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getSingleFilm = async () => {
    try {
      const resp = await fetch(`http://www.omdbapi.com/?i=${params.showId}&apikey=43a932c8`);
      if (resp.ok) {
        const filmData = await resp.json();
        setFilm(filmData);
      } else {
        throw new Error("Errore, non possiamo ricevere i dati");
      }
    } catch (error) {
      console.log(error.message);
      setHasError(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getSingleFilm();
  }, []);

  return (
    <>
      {film ? (
        <>
          <p>il dato da trovare è: {params.showId}</p>
          <Image src={film.Poster} alt={film.Title} />
          <h1>{film.Title}</h1>
          <p>{film.Plot}</p>
          <p>{film.Year}</p>
        </>
      ) : hasError ? (
        <Alert variant="danger">{errorMessage}</Alert>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
};

export default Details;
