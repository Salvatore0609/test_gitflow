/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("number --> I numeri sono come i numeri che usi per contare. Possono essere interi (come 1, 2, 3) o decimali (come 1.5, 2.75). Puoi fare operazioni come addizione, sottrazione, moltiplicazione e divisione con i numeri.")
console.log("string --> Le stringhe sono come le parole o le frasi che scrivi. Sono racchiuse tra virgolette e puoi pensare alle stringhe come a un insieme di lettere che formano un messaggio.")
console.log("boolean --> I booleani sono come i pulsanti di accensione e spegnimento. Possono essere solo true (vero) o false (falso). Sono utili per prendere decisioni, come 'è vero che hai mangiato la torta?' o 'è falso che hai finito i compiti?'.")
console.log("null --> Null è come dire 'non c'è niente'. Avevamo un scatola piena che abbiamo svuotato e ora non c'è niente.")
console.log("undefined --> Undefined è come dire 'non è stato ancora deciso'. È un valore speciale che significa che una variabile è stata dichiarata ma non ha ancora un valore.")


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Salvatore"; 
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
num1 += 20;
console.log(num1)  

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Desole";
console.log(myName)
const MYSURNAME = "Desole";
console.log(MYSURNAME)
/* 
MYSURNAME = "Solinas";
console.log(MYSURNAME) 
D1.js:59 Uncaught TypeError: Assignment to constant variable.
at D1.js:59:11 ---> messaggio d'errore della console che dimostra che un const non può cambiare valore 
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x -= 4
console.log(x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log(name2)

let disuguaglianza = (name1 !== name2) ? "diverso" : "uguale" ;
console.log(disuguaglianza)

let uguaglianza
if (name2.toLowerCase() === name1) {
  uguaglianza = "uguale"
} else {
  uguaglianza = "diverso"
}
console.log(uguaglianza) //dove "John diventa john"