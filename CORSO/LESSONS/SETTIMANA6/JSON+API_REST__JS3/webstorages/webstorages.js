// MOTORI DI STORAGE DEL BROWSER
// 1) localStorage --> permanenza dei dati finché l'utente o lo sviluppatore non li cancella esplicitamente
// 2) sessionStorage --> permanenza dei dati fino a chiusura del tab/browser (sì permamenza al refresh)

// entrambi i motori utilizzano gli stessi metodi:
// .setItem("key", value) --> SALVERA' il valore nella chiave corrispondente
// .getItem("key") --> ritornerà il valore corrispondente alla chiave fornita (se presente). Se non presente ritornerà null.

// .removeItem("key") --> rimuove un elemento specifico tramite sua chiave
// .clear() --> rimuove tutti i dati nello storage utilizzato (specifico per dominio)

// N.B. I valori ritornati dagli storage sono SEMPRE STRINGHE!

// settiamo il nostro primo valore:

const LIVE_LECTURE_KEY = "isLectureLiveNow";

localStorage.setItem(LIVE_LECTURE_KEY, true); // creo un un nuovo elemento

localStorage.removeItem(LIVE_LECTURE_KEY); // rimuovo l'elemento precedentemente creato

console.log(localStorage.getItem(LIVE_LECTURE_KEY)); // vado a leggere il valore, ma in questo caso non esiste più la chiave e quindi il metodo .getItem() ci restituisce null

if (localStorage.getItem(LIVE_LECTURE_KEY) === "true") {
  console.log("vero");
} else {
  // non esistendo più l'elemento con chiave LIVE_LECTURE_KEY finiremo sicuramente qui
  console.log("falso");
}

// numbers

localStorage.setItem("numItem", 15);
console.log(typeof localStorage.getItem("numItem")); // il dato che nasceva come numero, è tornato indietro come stringa. bisogna saperlo!
// trattiamo il dato quindi per poterlo utilizzare di nuovo come numero
const numFromStorage = parseInt(localStorage.getItem("numItem")); // il parseInt() è il metodo che converte effettivamente la stringa che ci viene restitutita dallo storage
console.log(typeof numFromStorage); // vediamo la conferma dell'avvenuta modifica del dato da stringa a numero
// a questo punto potremmo usare il dato contenuto in numFromStorage normalmente come numero

// arrays

const myArr = [78, 2, 28, 55, 44];
// quando vogliamo salvare l'array dovremo convertirlo in formato JSON
localStorage.setItem("arrItem", JSON.stringify(myArr));

// nel momento in cui lo riprendiamo dallo storage dovremo convertirlo di nuovo in un vero array prima di fare le consuete operazioni
const arrFromStorage = JSON.parse(localStorage.getItem("arrItem")); // clone dell'array originario, è un'altra entità
// console.log(typeof arrFromStorage);
console.log(Array.isArray(arrFromStorage));

arrFromStorage.splice(0, 1); // se questa operazione va a buon fine, significa che abbiamo a che fare con un vero array, perché convertito in precedenza

console.log(arrFromStorage);

// objects

const myObj = { name: "Stefano", surname: "Miceli" };

// FONDAMENTALE sarà convertire l'oggetto nella sua rappresentazione JSON, quindi in stringa
localStorage.setItem("objItem", JSON.stringify(myObj));

// FONDAMENTALE sarà riconvertire la stringa JSON di nuovo in oggetto nativo JavaScript PRIMA di poterlo usare!
const objFromStorage = JSON.parse(localStorage.getItem("objItem")); // prima si risolve il getItem, con la stringa ritorata,
// fornendola al metodo .parse() otteniamo di nuovo un oggetto nativo da poter usare come vogliamo.
console.log(objFromStorage.name); // ora possiamo tranquillamente leggere la proprietà name che l'oggetto a questo punto avrà.
