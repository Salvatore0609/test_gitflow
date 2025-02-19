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
const name: string = "Salvatore";
const eta: number = 26;
const studiandoTS: boolean = true;

//3 const greet = (name) => { return "Ciao " + name }
const greet = (name: string): string => {
  return "Ciao " + name;
};

//4
const sum = (a: number, b: number): number => {
  return a + b;
};

//5
const calcolaPrezzoConIVA = (prezzo: number): number => {
  return prezzo * 1.22;
};

//6
const concatenaEConta = (s1: string, s2: string): number => {
  return (s1 + s2).length;
};

//7
let valore: string | number;
valore = "ciao"; // valido
valore = 42; // valido

//8
let variabile: number | null | undefined;

//9
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

//10
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

//11
const dati: [string, string, string, number, number] = ["uno", "due", "tre", 4, 5];

//12
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}

//13
interface Utente {
  email: string;
  telefono?: string;
}

//14
const studenti: { nome: string; voto: number }[] = [
  { nome: "Luca", voto: 28 },
  { nome: "Anna", voto: 30 },
];

//15
interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
}

//16
interface Auto extends Veicolo {
  numeroPorte: number;
}

//17
const miaAuto: Auto = {
  marca: "Fiat",
  modello: "Panda",
  anno: 2022,
  numeroPorte: 5,
};

//18
//I Generics permettono di scrivere codice riutilizzabile e tipizzato in modo flessibile.
function identity<T>(arg: T): T {
  return arg;
}

//19
//Sì, si possono avere più tipi generici.
interface Coppia<T, U> {
  primo: T;
  secondo: U;
}

//20
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
