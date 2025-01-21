class User {
  constructor(name) {
    this.name = name;
  }
}

let savedUsers = []; // Array per memorizzare più utenti

const form = document.getElementById("name-form");
const removeButton = document.getElementById("remove-button");
const savedNamesList = document.getElementById("saved-names-list");




// Gestione dell'invio del form
form.onsubmit = function (event) {
  event.preventDefault(); // Evita il refresh della pagina

  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim()//.trim() mi evita errori di spazi bianchi non necessari;

  if (name) {
    // Creiamo un nuovo oggetto User
    const newUser = new User(name);
    // Aggiungiamo l'utente all'array savedUsers
    savedUsers.push(newUser);
    // Salviamo l'array aggiornato nel localStorage
    localStorage.setItem("users", JSON.stringify(savedUsers));
    // Aggiorniamo l'interfaccia utente
    displaySavedNames();
    // Puliamo il campo di input
    nameInput.value = "";

    alert("Nome salvato con successo!");
  } else {
    alert("Inserisci un nome valido.");
  }
};



// Gestione del clic sul pulsante "Rimuovi Tutti"
removeButton.addEventListener("click", function () {
  localStorage.removeItem("users"); // Rimuove tutti i dati dal localStorage
  savedUsers = []; // Svuota l'array savedUsers
  displaySavedNames(); // Aggiorna l'interfaccia utente
  alert("Tutti i nomi sono stati rimossi!");
});



// Funzione per visualizzare i nomi salvati
function displaySavedNames() {
  // Svuota la lista corrente
  savedNamesList.innerHTML = "";
  // Se ci sono utenti salvati, li mostriamo
  if (savedUsers.length > 0) {
    savedUsers.forEach((user, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = user.name;
      savedNamesList.appendChild(listItem);
    });
  } else {
    // Se non ci sono utenti salvati, mostra un messaggio
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = "Nessun nome salvato.";
    savedNamesList.appendChild(listItem);
  }
}

// Al caricamento della pagina, mostra il nome salvato
window.addEventListener("DOMContentLoaded", function () {
  displaySavedName();
});
