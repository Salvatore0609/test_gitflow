import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Counter from "./components/Counter";
// import StateExample from "./components/StateExample";
import EffectsExample from "./components/EffectsExample";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {/* <Counter /> */}
      {/* <StateExample /> */}
      {toggle && <EffectsExample />}

      <Button onClick={() => setToggle(!toggle)}>toggle component</Button>
    </>
  );
}

export default App;
