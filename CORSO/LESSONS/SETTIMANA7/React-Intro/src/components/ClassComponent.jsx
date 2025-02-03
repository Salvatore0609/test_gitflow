import { Component } from "react";

class ClassComponent extends Component {
  // definiamo il metodo render per avere la possibilità di ritornare il consueto codice JSX dal nostro componente (nel momento in cui verrà eseguito)
  render() {
    console.log("THIS", this);
    // il this all'interno del componente fa riferiemento all'ISTANZA del componente renderizzato
    // è l'oggetto specifico di un particolare componente
    return (
      <div className="container">
        <div className={this.props.className} role="alert">
          {this.props.alertText}
        </div>
      </div>
    );
  }
}

// anche in questo caso l'export è d'obbligo se vogliamo usare il componente nella nostra applicazione
export default ClassComponent;
