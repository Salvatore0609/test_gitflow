/*
1) Quali sono i tipi primitivi principali in TypeScript?
string, number, boolean, null, undefined, bigint, symbol


2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name }

4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => { return a + b }

5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

7) Cos'è un Type Union e come si scrive?

8) Crea una variabile che possa contenere un numero, null o undefined.

9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]

11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

12) Qual è la differenza tra type e interface?

13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

17) Crea un oggetto che implementi l'interfaccia Auto.

18) Cosa sono i Generics in TypeScript?

19) È possibile avere più tipi generici in un'interfaccia?

20) Crea un'interfaccia generica per una risposta API.

*/
//2
var nome = "Salvatore";
var eta = 26;
var studiandoTS = true;
//3 const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
//4
var sum = function (a, b) {
    return a + b;
};
//5
var calcolaPrezzoConIVA = function (prezzo) {
    return prezzo * 1.22;
};
//6
var concatenaEConta = function (s1, s2) {
    return (s1 + s2).length;
};
//7
var valore;
valore = "ciao"; // valido
valore = 42; // valido
//8
var variabile;
//10
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
//11
var dati = ["uno", "due", "tre", 4, 5];
//14
var studenti = [
    { nome: "Luca", voto: 28 },
    { nome: "Anna", voto: 30 },
];
//17
var miaAuto = {
    marca: "Fiat",
    modello: "Panda",
    anno: 2022,
    numeroPorte: 5,
};
//18
//I Generics permettono di scrivere codice riutilizzabile e tipizzato in modo flessibile.
function identità(arg) {
    return arg;
}
