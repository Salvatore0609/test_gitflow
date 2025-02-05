import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav title="EpiBooks" claim="Cerca il libro che preferisci!" />
      <Welcome />
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
