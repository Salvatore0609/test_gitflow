import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyHomePage from "./component/home/MyHomePage";
import MyNavBar from "./component/navbar/MyNavbar";
import Dipendenti from "./component/dipendenti/Dipendenti";
import Login from "./component/login/Login";
import DipendentiDetails from "./component/dipendenti/DipendentiDetails";
import Registrazione from "./component/login/Registrazione";
import Profile from "./component/dipendenti/profile";
import Modifica from "./component/dipendenti/Modifica";
import PrenotaViaggio from "./component/viaggi/PrenotaViaggio";
import ViaggiPrenotati from "./component/viaggi/ViaggiPrenotati";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<MyHomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/prenotaViaggio" element={<PrenotaViaggio />} />
          <Route path="/dipendenti" element={<Dipendenti />} />
          <Route path="/prenotazioni" element={<ViaggiPrenotati />} />
          <Route path="*" element={<MyHomePage />} />
          <Route path="/dipendenti/:id" element={<DipendentiDetails />} />
          <Route path="/register" element={<Registrazione />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/modifica" element={<Modifica />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
