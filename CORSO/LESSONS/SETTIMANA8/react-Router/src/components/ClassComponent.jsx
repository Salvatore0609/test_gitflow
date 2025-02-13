import { Component } from "react";
import withRouter from "../helpers/withRouter";
import { Link } from "react-router";
import { Button, Container } from "react-bootstrap";

class ClassComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <Container className="text-center">
        <Row>
          <Col xs={12} md={8} xl={6}>
            <h1>
              {/* 2) come puoi notare this.props.title è una nostra prop che abbiamo inserito in App.jsx sul componente,
                mentre le altre sono prop arrivano dal router grazie all'operazione sull'export che utilizza la funzione withRouter 
                che ci ha aumentato le funzionalità con le prop aggiuntive, 
                che ora possiamo leggere ed utilizzare tranquillamente come un qualunque altro dato che fosse arrivato dalle props normalmente */}
              {this.props.title} renderizzato con id dimanico: {this.props.params.dynamicId}
            </h1>
            <p>Location: {this.props.location.pathname}</p>
            <Link to="/">Vai alla Home</Link>
            <div>
              <Button variant="dark" onClick={() => this.props.navigate("/prenota-tavolo")}>
                Prenota un tavolo
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

// 1) questo passaggio è fondamentale per "aumentare" le funzionalità del componente prima che venga esportato
// verranno mantenute le prop nostre, in più gli si aggiungeranno quelle specifiche del router
export default withRouter(ClassComponent);
