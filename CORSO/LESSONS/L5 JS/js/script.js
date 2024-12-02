/* alert("Ciao a tutti") */
console.log("sto scrivendo nella console")

let nomeMio;

// commento a singola riga;

let ok; // commento

/*
    commento a riga multipla
    dfsjddjdja
    ajdjsdjoajdao
*/



//le variabili sono zone di memoria dove salvo dei dati

let nomeVariabile; //dichiarazione di variabile
nomeVariabile = "Ciao"; //inizializzazione di variabile

let miaVarNumeriInteri = 25;
let miaVarNumeriDecimali = 25.56;
let miaVarBool = true;


// ctrl + ù commento a riga
// alt + shift + a commento a multipla riga


/* questo è considerato come testo per rientra tra due apici,
quindi è una stringa */ 
let miaVarNumeroStringa = "10"

//posso fare anche espressioni
let a = 10;
let b = a;
let c = a + b; 

//posso sostituire il valore nella stessa variabile
let nomeM = "Mario";
console.log(nomeM); // se io stampo qui lui legge Mario
nomeM = "Antonio";
console.log(nomeM); // se io stampo qui lui legge Antonio
nomeM = 25;
console.log(nomeM); // se io stampo qui lui legge 25

//ovviamente i valori possono essere concatenati
let nome = "Mario";
let anni = 30;
let luogo = "Roma";
console.log(nome + anni + luogo);
//posso aggiungere anche gli spazi utilizzando la stringa con lo spazio
console.log(nome + " " + anni + " " + luogo);



/* posso utilizzare le costanti che sono simili alle variabili
ma non posso cambiare il valore a differenza della Variabile. */
//Per convenzione le costanti vanno tutte maiuscole.
const SESSO = "M";

//posso sommare anche numeri e booleani
let numero = 13;
let booleano = true; // true = 1, false = 0
console.log(numero + booleano) //darà 14

//Null o undefined
let x; 
console.log(x) // sarà undefined

let y = "ciao";
y = null; //questo è intenzionale
console.log(y) //darà null
/* esempio di utilizzo, in un e-commerce ho un carrello,
concludi l'acquisto e il carrello si svuota quindi null */


/* 
OPERATORI ARITMETICI con assegnazione, assegna e operizza
= 
+=
-=
*=
/= 

*/

let num1 = 5;
let num2 = 2;
// num2 = num2 + 3;
//posso farlo anche così
num2 += 3;
console.log(num2);