import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 py-5">
      <ButtonComponent bgColor="bg-danger" style={{ padding: "1rem 3rem" }} textButton="BUTTON REACT" />

      <ImageComponent
        imageUrl="https://images.pexels.com/photos/29913506/pexels-photo-29913506/free-photo-of-riflesso-monocromatico-di-alberi-su-un-lago-invernale.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="immagine a caso"
        width={600}
      />
    </div>
  );
}

export default App;
