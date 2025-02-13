import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
// import Counter from "./components/Counter";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import TopBar from "./components/TopBar";
import NotFound from "./components/NotFound";
import MenuList from "./components/MenuList";

import menu from "./data/menu.json";
import PastaDetails from "./components/PastaDetails";
import ClassComponent from "./components/ClassComponent";

// ROUTING IN REACT

// per fare in modo di poter avere un cambio di pagina in una SPA (Single Page Application)
// mi dovrò avvalere di un sistema che mi renderizzi in maniera CONDIZIONALE i componenti a partire da un indirizzo URL,
// in modo che tali componenti riflettano il cambiamento di pagina (seppur virtuale)

// questo è il motivo per cui abbiamo implementato il pacchetto react-router-dom (in futuro sarà solo react-router) che ci aiuterà
// a gestire le dinamiche di cambio pagina sempre a partire da segmenti presenti nella URL

// a questo punto dovremmo importare i 3 componenti fondamentali per il funzionamento di questa meccanica:
// BrowserRouter, Routes, Route.

// 1) BrowserRouter permette agli altri due di funzionare: lo inseriremo come CORNICE DI TUTTO il contenuto della nostra App.jsx

// 2) Routes sarà il secondo componente da utilizzare DENTRO a BrowserRouter (l'ordine è importante)
// Potremmo usare Routes solo se avremo un BrowserRouter esterno.
// Con Routes delimiteremo solamente il contenuto che vorremmo diventi DINAMICO (visibile condizionalmente)
// quindi metteremo delle rotte singole che attiveranno il proprio componente nel venire renderizzato.

// 3) Route quindi è un componente che può esistere SOLO DENTRO a Routes (e Routes vorrà avere all'interno SOLO Route) e
// dovrà contentere il componente da renderizzare per specica PATH

function App() {
  return (
    <BrowserRouter>
      <TopBar title="EpicStaurant" claim="Niente secondi piatti" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prenota-tavolo" element={<ReservationForm title="Prenota Tavolo" />} />
        <Route path="/prenotazioni" element={<ReservationList title="Prenotazioni" />} />
        <Route path="/menu" element={<MenuList menu={menu} />} />
        <Route path="/menu/details/:pastaName/:pastaId/" element={<PastaDetails menu={menu} />} />
        <Route path="/class-component/:dynamicId" element={<ClassComponent title="Sono un Class Component" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
