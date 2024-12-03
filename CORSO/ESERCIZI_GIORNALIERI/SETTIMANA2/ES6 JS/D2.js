/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let num = 14;
let num2 = 64;
if (num2 > num) {
  console.log("il numero: " + num2 + " è più grande di " + num);
} else if (num2 < num) {
  console.log("il numero: " + num + " è più piccolo di " + num2);
} else {
  console.log("il numero: " + num + " è uguale a" + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numI = 5;
let numI2 =10;
if (numI2 !== numI) {
  console.log("not equal")
} else {
  console.log("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//se restituisce numeri interi e non decimali funziona, non c'è una differenza di resto.
if (10 % 5 === 0) { 
  console.log("divisibile per 5")
} else {
  console.log("non divisibile per 5")
}

if (12 % 5 === 0) { 
  console.log("divisibile per 5")
} else {
  console.log("non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = 8;
if (8 === value) {
  console.log("il valore è 8")
}
//oppure
let value1 = 3;
let value2 = 5;
if (value1 + value2 === 8) {
  console.log("il valore è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
let totalShoppingCart = 64; //ipotizziamo
const spedizione = 10;
let maxTotCarello = 50;
if (totalShoppingCart > maxTotCarello) {
  console.log("spedizione gratuita, l'ammontare totale è: " + totalShoppingCart)
} else {
  console.log("paghi la spedizione, l'ammontare è: " + (totalShoppingCart + spedizione))
}
//invece se
totalShoppingCart = 32;
if (totalShoppingCart > maxTotCarello) {
  console.log("spedizione gratuita, l'ammontare totale è: " + totalShoppingCart)
} else {
  console.log("paghi la spedizione, l'ammontare è: " + (totalShoppingCart + spedizione))
} 
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 64; //ipotizziamo
const spedizione = 10;
let maxTotCarello = 50;
let scontoBlackFriday = totalShoppingCart * 20 / 100;
if (totalShoppingCart - scontoBlackFriday > maxTotCarello) {
  console.log("spedizione gratuita, l'ammontare totale è: " + (totalShoppingCart - scontoBlackFriday))
} else {
  console.log("paghi la spedizione, l'ammontare è: " + (totalShoppingCart - scontoBlackFriday + spedizione))
}
//invece se
totalShoppingCart = 32;
if (totalShoppingCart - scontoBlackFriday > maxTotCarello) {
  console.log("spedizione gratuita, l'ammontare totale è: " + (totalShoppingCart - scontoBlackFriday))
} else {
  console.log("paghi la spedizione, l'ammontare è: " + (totalShoppingCart - scontoBlackFriday + spedizione))
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const var3 = [27, 11, 33];
console.log(var3);
var3.sort((a, b) => b - a); //arrow function
console.log(var3);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 2;
console.log(typeof valore); // in console apparirà number

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (valore % 2 === 0) {
  console.log("è pari");
} else {
  console.log("è dispari")
}
//oppure
valore = 5
if (valore % 2 === 0) {
  console.log("è pari");
} else {
  console.log("è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
    console.log("Minore di 10");
} else if (val < 5) {
    console.log("Maggiore di 5");
} else {
    console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];
console.log(arr)
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr.splice(9, 1, 100);
console.log(arr)
