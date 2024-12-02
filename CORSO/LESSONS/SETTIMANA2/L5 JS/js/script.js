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
let aa = 10;
let bb = aa;
let cc = aa + bb;

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




//ES:
let num1 = 5;
let num2 = 2;
// num2 = num2 + 3;
//posso farlo anche così
num2 += 3;
console.log(num2);

/* OPERATORI DI ASSEGNAMENTO
= 
*/

/* OPERATORI ARITMETICI
+ - / * %
*/

/* OPERATORI ARITMETICI con assegnamento, assegna e operizza
= += -= *= /= %=
*/

/* OPERATORI CONDIZIONALI
< > >= <= 
*/

let a = 10;
let b = 5;
let c = a > b; // sarà true pechè da un risultato booleano

/* OPERATORI DI COMPARAZIONE 
== != === !==
*/

let d = 5;
let e = 5; //se questo fosse una stringa lo leggerebbe comunque true perchè non verifica il tipo ma solo il valore con il ==
console.log(d == e) //stamperà true
console.log(d != e) //stamperà false
// con (strettamente uguale) === verifica sia il tipo che valore quindi restituirà false
let f = 5;
let g = "5";
console.log(f === g); //stampa false
console.log(f !== g); //stampa true 
//anche (strettamente diverso) !== verifica sia il tipo che il valore


/* OPERATORI LOGICI 
AND -> &&
OR -> ||
NOT -> !

true && true --> true
true && false --> false
false && true --> false
false && false --> false

true || true --> true
true || false --> true
false || true --> true
false || false --> false

!true --> false
!false --> true
*/

//typeof
let s = "salvatore";
console.log(typeof s)

//condizioni
let z = 10
let k = 5

if (z < k) {
    console.log("sono dentro la struttura IF")
}
z = ""
//if ()


/* OPERATORE TERNARIO serve solo per inizializzare una variabile 
MA in base ad una condizione (x < y) ? true : false; 
let varName = (condizione) ? valoreTrue : valoreFalse */

let age = 18;
let ingresso = (age >= 18) ? "Ingresso Permesso" : "Ingresso Vietato"
console.log(ingresso)

//ottengo lo stesso risultato in questo modo

let age2 = age;
let ingresso2;
//aggiungiamo anche un AND per esempio
//quindi SE (è maggiore uguale a 18 AND minore uguale a 30) ingresso permesso, ELSE ingresso vietato.
if (age >= 18 && age <= 30) {
    ingresso2 = "Ingresso Permesso"
} else {
    ingresso2 = "Ingresso Vietato"
}
console.log(ingresso2)

//struttura di controllo if/else

/* 
    if(condizione) {
        //blocco di istruzione
    } else if {
        //blocco di istruzione
    } else if {
        //blocco di istruzione
    } else if {
        //blocco di istruzione
    } else if {
        //blocco di istruzione
    } else {
        //blocco di istruzione
    } 
*/

/* ESEMPIO:
    if(age < 18) {
        console.log("hai meno di 18 anni")
    } else if (age > 18 {
        console.log("hai più di 18 anni")
    } else if (age === 18) {
        console.log ("hai 18 anni")
    } else {
        console.log ("Valore non corretto")
    } 
*/



//OPERATORI UNARI
let j = 5;
j = j + 1;
j += 1;
//ma posso fare direttamente
j++; //aggiunge +1 a j