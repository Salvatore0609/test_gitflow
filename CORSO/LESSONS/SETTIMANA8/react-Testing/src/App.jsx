import "./App.css";
import FetchComponent from "./components/FetchComponent";
import ToggleSection from "./components/ToggleSection";

function App() {
  return (
    <>
      <h1 className="border-danger" style={{ border: "1px solid gray" }}>
        A simple react-test EXAMPLE
      </h1>
      <ToggleSection />
      <FetchComponent />
    </>
  );
}

export default App;
