import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = (props) => {
  // state = {
  //   movie: null
  // };

  const [movie, setMovie] = useState(null);

  const fetchMovieData = async () => {
    console.log("fetch()");
    const resp = await fetch("http://www.omdbapi.com/?apikey=43a932c8&s=" + props.movieTitle);

    if (resp.ok) {
      const movieData = await resp.json();

      console.log("setState()");
      // this.setState({ movie: movieData.Search[0] });
      setMovie(movieData.Search[0]);
    }
  };

  // come fosse un componentDidMount + componentDidUpdate (che controlla il cambio di props.movieTitle)
  useEffect(() => {
    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.movieTitle]);

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentDidUpdate()");

  //   // non posso semplicemente riattivare la fetch da qui... perché altrimenti tornerei a creare un loop infinito di fetch che scatena un aggiornamento,
  //   // che scatena un altro componentDidUpdate, che chiama un'altra fetch e così via all'infinito...

  //   // devo creare un argine, in modo da rompere questa eventualità di loop infinito.
  //   console.log("prevProps", prevProps.movieTitle);
  //   console.log("this.props", this.props.movieTitle);

  //   if (prevProps.movieTitle !== this.props.movieTitle) {
  //     // solo se sarà cambiata la prop (solo se l'utente ha cambiato selezione dal componente fratello MovieSelect)
  //     // andremo a riattivare una fetch che ci aggiornerà il dato nello stato e conseguente dato visualizzato nella pagina

  //     console.log("PROP DIVERSE, Aggiorniamo!");
  //     this.fetchMovieData();
  //     // successivamente a questa chiamata entreremo in una NUOVA fase di aggiornamento,
  //     // saremo di nuovo a rivalutare il controllo di questo if.
  //     // NON VORREMO rieseguire questa fetch, se ci siamo arrivati solo per via del cambio di stato
  //     // se la prop precedente è uguale alla prop attuale, a questo punto ci FERMEREMO
  //     // non finiremo più qui dentro
  //   } else {
  //     // saremo eventualmente qui.
  //     console.log("PROP IDENTICHE, nessun aggiornamento ulteriore");
  //   }
  // }

  // componentDidMount() {
  //   console.log("componentDidMount()");
  //   this.fetchMovieData();
  // }

  useEffect(() => {
    return () => console.log("me ne vado, bye bye");
  }, []);
  // componentWillUnmount() {
  //   console.log("me ne vado, bye bye");
  //   // può avere senso usarlo per chiudere connessioni rimaste attive,
  //   // intervalli che altrimenti rimarrebbero attivi in memoria in modo persistente... ecc
  //   // serve a pulire i dati del componente che rimerrebbero in memoria anche a componente smontato
  // }

  console.log("render()");
  return movie ? (
    <Card>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Year}</Card.Text>
        <Button variant="primary">{movie.imdbID}</Button>
      </Card.Body>
    </Card>
  ) : (
    <div>Loading...</div>
  );
};
export default MovieCard;
