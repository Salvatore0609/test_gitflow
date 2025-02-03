import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import EpiSection from "./components/EpiSection";

// questo file rappresenta il nostro PRIMO COMPONENTE REACT
// è un file con estensione .jsx

// un Component in React, nella sua forma più basilare, è una funzione che RITORNA del JSX
function App() {
  // JSX è una sintassi simil-HTML che permette l'inserimento di codice dinamico (JavaScript) direttamente in quello che SEMBRA codice HTML
  // ci permetterà di combinare struttura e logica nello stesso punto

  // piccole differenze con HTML:
  // - class diventa className
  // - i tag autoconclusivi tipo: img, br, hr, input, ecc... es <img src="https://google.com/image.jpg" />
  // - l'attritubo "for" delle label diventa "htmlFor"
  console.log("reactLogo", reactLogo);
  console.log("viteLogo", viteLogo);
  return (
    <div className="main-container">
      {/* Questo è il modo per utilizzare (renderizzare) un componente di un file .jsx nella cartella components */}

      {/* Una Prop è un dato passato dal contesto più esterno, a quello più interno (dentro al componente) */}
      {/* Mi permette di variare l'utilizzo di uno stesso componente, magari con la stessa struttura, ma 
      variando i dati renderizzati all'interno per ogni suo utilizzo */}
      {/* Una Prop è come fosse un attributo di un tag HTML, in questo caso un attributo del Component */}
      <TopBar navTitle="Epicode - First React App" />

      <EpiSection
        imageUrl="https://images.unsplash.com/photo-1734966901441-ac6c1fff1fd2?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageWidth={400}
        description="Painting"
      />
      <EpiSection
        imageUrl="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageWidth={250}
        description="Landscape"
      />
      <EpiSection imageUrl={reactLogo} imageWidth={100} description="Rect Logo" />
      <EpiSection imageUrl={viteLogo} imageWidth={100} description="Vite Logo" />
    </div>
  );
}

export default App;
