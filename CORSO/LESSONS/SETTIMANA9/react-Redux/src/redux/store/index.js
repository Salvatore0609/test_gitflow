// questo file si occuperà di creare il nostro Redux Store all'avvio dell'applicazione

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

// questa funzione si occuperà di creare effettivamente il nostro Store globale per l'applicazione, grazie ad una funzione esportata dal pacchetto @reduxjs/toolkit
// possiamo immaginarlo come il magazzino del nostro ufficio postale.

// la funzione ci chiede delle opzioni (oggetto), nel quale inseriremo il riferimento al nostro primo reducer (la funzione che importeremo)

const store = configureStore({
  reducer: mainReducer
});

// il configureStore restituirà quindi un oggetto di Stato globale che sarà poi contenuto nella variabile store che exportiamo per renderla disponibile all'intera applicazione
// tra le altre cose configureStore ci abilita in automatico anche i redux dev tools, oltre che aggiungere funzionalità avanzate tramite middlewares
export default store;
