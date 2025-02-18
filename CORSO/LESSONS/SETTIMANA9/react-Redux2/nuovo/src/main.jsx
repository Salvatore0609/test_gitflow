import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  // Provider è un HOC - Higher Order Component, che ricevendo lo stato globale,
  // si occuperà di fornire le logiche per leggere e scrivere in questo stato nei nostri componenti interni
  // e li notificherà dei vari momenti in cui lo stato cambia nel tempo,
  // e quindi gli permetterà di ri-renderizzarsi per aggiornare i dati a schermo (se necessario)
  <Provider store={store}>
    <App />
  </Provider>
);
