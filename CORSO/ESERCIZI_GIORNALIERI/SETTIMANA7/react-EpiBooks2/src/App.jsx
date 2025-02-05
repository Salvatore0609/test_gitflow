import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav title="EpiBooks" claim="Cerca il libro che preferisci!" />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
