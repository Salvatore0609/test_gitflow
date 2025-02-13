import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import Details from "./components/Details";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/details/:showId" element={<Details />} />
          <Route path="*" element={<div>404 non trovato</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
