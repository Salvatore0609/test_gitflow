import { ListGroup } from "react-bootstrap";

const Table = (props) => {
  //   state = {
  //     selected: ""
  //   };

  const checkSelected = (tablePos) => (props.selected === tablePos ? `table-item-selected` : "");

  console.log("RENDER Table");
  return (
    <>
      <ListGroup>
        <ListGroup.Item
          //   onClick={() => this.setState({ selected: "Uno" })}
          onClick={() => props.changeSelected("Uno")}
          className={checkSelected("Uno")}
        >
          Uno
        </ListGroup.Item>
        <ListGroup.Item
          //   onClick={() => this.setState({ selected: "Due" })}
          onClick={() => props.changeSelected("Due")}
          className={checkSelected("Due")}
        >
          Due
        </ListGroup.Item>
        <ListGroup.Item
          //   onClick={() => this.setState({ selected: "Tre" })}
          onClick={() => props.changeSelected("Tre")}
          className={checkSelected("Tre")}
        >
          Tre
        </ListGroup.Item>
        <ListGroup.Item
          //   onClick={() => this.setState({ selected: "Quattro" })}
          onClick={() => props.changeSelected("Quattro")}
          className={checkSelected("Quattro")}
        >
          Quattro
        </ListGroup.Item>
      </ListGroup>
      <p>
        L&apos;elemento attualmente selezionato è <strong>{props.selected || "Nessuno"}</strong>
      </p>
    </>
  );
};

export default Table;
