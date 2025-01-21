class AgendaEvent {
  constructor(name, description, imageUrl) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

let appointments = [];

const form = document.getElementById("appointment-form");

// questa funzione si attiva solamente all'invio del form tramite click sul pulsante submit
form.onsubmit = function (event) {
  event.preventDefault(); // abbiamo appena evitato un refresh inutile

  const { name, description, image } = event.target.elements;
  // creiamo un oggetto a partire dal modello della classe AgendaEvent
  const newAppointment = new AgendaEvent(name.value, description.value, image.value);

  generateCard(newAppointment); // generiamo nel DOM una card con il dato ormai noto (i dati della nuova istanza della classe)

  // inseriamo il nuovo oggetto nell'array esterno appointments
  // ⚠️ ogni volta che modifichiamo l'array dovremmo aggiornare quello salvato nello storage!
  appointments.push(newAppointment);
  //   così salviamo/aggiorniamo il dato precedente
  localStorage.setItem("appointments", JSON.stringify(appointments));
};

const generateCard = function (obj) {
  // questa funzione genera una singola card sulla base dei dati contenuti nel parametro obj
  // (che sarà l'istanza della classe) ogni volta che viene invocata,
  const row = document.getElementById("card-list"); // la griglia che conterrà le card

  // genero un nuovo elemento col
  const col = document.createElement("div");
  col.classList.add("col");
  // inserisco nella nuova colonna la struttura di una card che si creerà con i dati dell'oggetto del parametro
  col.innerHTML = `<div class="card">
                    <img src=${obj.imageUrl} class="card-img-top" alt=${obj.name}>
                    <div class="card-body">
                        <h5 class="card-title">${obj.name}</h5>
                        <p class="card-text">${obj.description}</p>
                    </div>
                </div>`;
  // inserisco la card appena creata nella sua griglia
  row.appendChild(col);
};

// queste operazioni vengono svolte SOLO al caricamento iniziale della pagina
window.addEventListener("DOMContentLoaded", function () {
  // prendo il dato dallo storage,
  // se presente mi darà una qualche stringa (truthy), se assente mi ritornerà null (falsy)
  const appointmentsFromStorage = localStorage.getItem("appointments"); // o string o null

  //   in base a cosa riceviamo sé un valore truthy o un valore falsy il codice seguente potrebbe eseguirsi come anche no
  // (es. al primo avvio in assoluto non si eseguirà perché il valore di appointmentsFromStorage sarà null quindi falsy)
  if (appointmentsFromStorage) {
    // se siamo qui significa che c'era una stringa di un array di oggetti, quindi la riconvertiamo in un vero array di oggetti
    // una volta convertito lo utilizziamo per sostituire il valore iniziale di appointments, che lo aggiornerà con i dati più recenti
    appointments = JSON.parse(appointmentsFromStorage);

    // a questo punto, se ciclassimo appointments troveremo sicuramente almeno un elemento e quindi chiameremo la funzione generateCard il
    // giusto numero di volte, per il numero di elementi contenuti nell'array, al caricamento iniziale della pagina
    appointments.forEach(appObj => generateCard(appObj));
  }
});
