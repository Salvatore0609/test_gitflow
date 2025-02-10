import { FormSelect } from "react-bootstrap";

const MovieSelect = (props) => {
  // movieTitle è il dato del titolo che arriva dallo stato esterno, e se cambia farà cambiare la selezione del value della Select
  // changeMovieTitle è invece la nostra possibilità di attivare un cambio di stato in App.jsx da qui dentro, con il valore ricavato dalla selezione di una option
  return (
    <FormSelect value={props.movieTitle} onChange={(e) => props.changeMovieTitle(e.target.value)} aria-label="Default select example">
      <option>Iron Man</option>
      <option>Dr. Strange</option>
      <option>Wonder Woman</option>
      <option>Black Panther</option>
      <option>Venom</option>
      <option>DeadPool</option>
      <option>Batman</option>
      <option>Shrek</option>
      <option>Aquaman</option>
    </FormSelect>
  );
};

export default MovieSelect;
