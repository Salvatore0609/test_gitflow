// JavaScript ci permette di creare oggetti con la NOTAZIONE LETTERALE {}
// le graffe nel contesto di un valore (di variabile, di parametro, ecc.) mi danno la possibilità di far creare un oggetto in memoria.

const obj = {}; // abbiamo creato il RIFERIMENTO IN MEMORIA per un elemento di tipo Oggetto (vuoto)

// si dice anche che abbiamo creato una REFERENCE.
// tutto quello che NON E' una primitiva (oggetti, array, funzioni) viene salvato come REFERENCE. Quindi solo il suo riferimento (indirizzo) viene effettivamente immagazzinato nella variabile.

// PRMITIVE:

// String
// Number
// Boolean
// Undefined
// Null

// Symbol
// BigInt
let propertyName = "furColor";

const dog = {
  breed: "Terrier",
  age: 3,
  "is-adopted": true,
  bark: function () {
    return "BAU";
  },
  // generazione dinamica di nome proprietà
  [propertyName]: "brown"
};

// una funzione associata ad un parametro di oggetto si definisce METODO dell'oggetto.
// e ne stabilisce le sue abilità

// Accedere alle proprietà di un oggetto

// 1) DOT Notation
dog.age;

// console.log(dog.is - adopted); // non potremo mai accedere a questa proprietà con la dot notation

// 2) SQUARE BRACKETS Notation
dog["age"];

console.log(dog["is-adopted"]);

console.log(dog[propertyName]); // console.log(dog["furColor"]) ==>  console.log("brown") ==> "brown";
console.log(dog["propertyName"]); // ==> console.log(undefined) ==> undefined;

let var1 = "fur";
let var2 = "Color";

console.log(dog[var1 + var2]); // console.log(dog["fur" + "Color"]) ==>  console.log(dog["furColor"]) ==> console.log("brown") ==> "brown";
console.log(dog[var1.concat(var2)]); // console.log(dog["fur" + "Color"]) ==>  console.log(dog["furColor"]) ==> console.log("brown") ==> "brown";

// accedere al metodo
console.log(dog.bark());
// priorità degli eventi:

// 1) viene interpretata la variabile dog, esiste? se sì procedi, se no lancia errore
// 2) il metodo bark esiste? se sì invocalo, se no lancia errore
// 3) con il valore ritornato (se c'è), verrà avviato il metodo .log()
// 4) vediamo in console il risultato della funzione

// console.log(bark()); // bark da solo non esiste, non è mai stata definita una funzione globale con questo nome.
// bark esiste SOLO associato all'oggetto (come metodo dell'oggetto).

console.log(dog.hasOwnProperty("age")); // true
console.log(dog.toString()); // [object Object]

// document.body.innerHTML = document.body.innerHTML + "CIAO";
// document.body.innerHTML += "CIAO";

// qui possiamo notare il comportamento di JavaScript che, nel cercare di convertire l'oggetto in stringa, userà il metodo .toString() per tentare la conversione
// che come vediamo non va proprio a buon fine. La stringa "[object Object]" serve solo a darci un segnale di un potenziale problema, o errore.
document.body.innerHTML += dog; // [object Object]

// forse ha più senso ESTRARRE da quell'oggetto il valore che ci interessava posizionare nel DOM
document.body.innerHTML += dog.breed; // "Terrier" (aggiunta come stringa in fondo al body)

// tutti i metodi pre-associate ai nostri elementi JS, derivano da un'ereditarietà dovuta al loro COSTRUTTORE che li ha generati

console.log(dog.__proto__); // Object
console.log(dog.__proto__.__proto__); // null

const num = 5;
console.log(num.__proto__); // Number
console.log(num.__proto__.__proto__); // Object
console.log(num.__proto__.__proto__.__proto__); // null

const str = "hello";
console.log(str.__proto__); // String
console.log(str.__proto__.__proto__); // Object
console.log(str.__proto__.__proto__.__proto__); // null

const arr = [];
console.log(arr.__proto__); // Array
console.log(arr.__proto__.__proto__); // Object
console.log(arr.__proto__.__proto__.__proto__); // null

const cat = {
  name: "Speedy",
  "date.of.adoption": "01/01/2025",
  ancestors: { mom: "Dasy", dad: "Lucifer" }
};

console.log(cat["date.of.adoption"]);

console.log(cat.eyeColor); // undefined
// aggiungere proprietà nuove in un oggetto (programmaticamente)
cat.eyeColor = "green";
// uso l'operatore di assegnazione = su una proprietà inesistente, che a quel punto comincerà ad esistere

console.log(cat.eyeColor); // "green"

cat.deleteMe = null;
delete cat.deleteMe; // la keyword delete elimina una proprietà di un oggetto

// cat.meow = function () {
//   return "Meeowww";
// };

//❌ meow()

// console.log(cat.meow() + "!");

const catKeys = Object.keys(cat);
console.log(catKeys); // ['name', 'date.of.adoption', 'ancestors', 'eyeColor', 'meow']

console.log(catKeys[0]); // "name"

// catKeys[0] è la selezione di una posizione di un ARRAY

// cat["name"] è la selezione di una PROPRIETA' di un OGGETTO

console.log(cat[catKeys[0]]); // ==> cat["name"] ==> "Speedy"

const randomIndex = Math.floor(Math.random() * catKeys.length);
console.log(cat[catKeys[randomIndex]]);

const cat2 = cat; // NON SI PUO' CLONARE IN QUESTO MODO, stiamo solo cambiando "etichetta" allo stesso oggetto di partenza
const parents = cat.ancestors; // può essere utile questo sistema per semplificare i riferimenti a qualche percorso

// cat2.name = "felix";
// console.log("CAT", cat);
// console.log("CAT2", cat2);

// 1) CLONAZIONE (superficiale) DI OGGETTO - Object.assign()
const cat3 = Object.assign({}, cat); // ho creato una copia superficiale dell'oggetto cat, quantomeno posso cambiargli il nome senza intaccare l'originale
cat3.name = "felix";

cat3.ancestors = Object.assign({}, cat.ancestors);
cat3.ancestors.mom = "lilly";
cat3.ancestors.dad = "tyler";

console.log("CAT", cat);
console.log("CAT3", cat3);

// 2) CLONAZIONE (superficiale) DI OGGETTO - Spread Operator
const cat4 = { ...cat, name: "Romeo", ancestors: { ...cat.ancestors, mom: "Duchess", dad: "Giovanni" } };

// cat4.name = "Romeo";

// cat4.ancestors = { ...cat.ancestors };
// cat4.ancestors.mom = "Duchess";
// cat4.ancestors.dad = "Giovanni";

console.log("CAT", cat);
console.log("CAT4", cat4);

// 3) CLONAZIONE (profonda) DI OGGETTO
const cat5 = JSON.parse(JSON.stringify(cat));
cat5.name = "Garfield";
cat5.ancestors.mom = "Carolina";
cat5.ancestors.dad = "Paolo";

console.log("CAT", cat);
console.log("CAT5", cat5);

// 4) CLONAZIONE (PROFONDA) e MODERNA - structuredClone()
const cat6 = structuredClone(cat);
cat6.name = "Stregatto";
cat6.ancestors.mom = "Laura";
cat6.ancestors.dad = "Gianni";

console.log("CAT", cat);
console.log("CAT6", cat6);
