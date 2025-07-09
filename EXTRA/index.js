console.log("lezione 1");
let myString = "ciao";
let myNumber = 42;
//myNumber.toUpperCase(); //solo per stringa
let anotherString = "ciao2";
anotherString.toLocaleLowerCase();
const sum = (n1, n2) => {
    return n1 + n2;
};
sum(1, 2);
const array = ["ciao", "hello", "hola"];
const array1 = ["ciao", 42];
const array2 = ["ciao", "hello", "hola", 42];
const obj = {
    firstProperty: "ciao",
    secondProperty: 42,
    thirdProperty: true,
};
const obj2 = {
    age: 30,
    name: "John",
    canDrive: true,
};
console.log("array.map");
let arr = [1, 2, 3, 4, 5];
let map = arr.map((result) => result / 2);
console.log(map);
console.log("array.filter");
let arr2 = [1, 2, 3, 4, 5];
let filter = arr2.filter((number) => number > 3);
console.log(filter);
console.log("array.find");
let numbers = [1, 2, 3, 4, 5];
let finds = numbers.find((number) => number > 1);
console.log(finds);
console.log("destrutturazione array e oggetti");
const [primaNazione, , terzaNazione] = ["Italia", "Francia", "Spagna"];
const { nome, cognome, emailAddress: email, } = {
    nome: "Mario",
    cognome: "Rossi",
    emailAddress: "mario.rossi@example.com",
};
console.log("spread operator");
const america = ["USA", "Canada", "Messico"];
const europa = ["Italia", "Francia", "Spagna"];
const mondo = [...america, ...europa];
const utente = {
    nome: "Mario",
    cognome: "Rossi",
    emailAddress: "mario.rossi@example.com",
};
const utenteCompleto = Object.assign(Object.assign({}, utente), { eta: 30, professione: "Sviluppatore" });
console.log("interesezione di più tipi");
const completa = {
    nome: "Mario",
    cognome: "Rossi",
    data: new Date(),
    telefono: "123-456-7890",
    privilegio: ["admin", "editor"],
};
console.log("funzioni con lo stesso nome ma con parametri diversi");
function somma(a, b) {
    return a + b;
}
console.log("introduzione ai decoratori");
/*
function APIDecorator(constructor: typeof APIService) {
  return class extends constructor {
    url: string = "https://api.example.com";
  };
}

@APIDecorator
class APIService {
  url!: string; // url sarà inizializzata dal decoratore
  public async get(endpoint: string) {
  const response = await fetch(this.url + endpoint);
  return response.json();
}
*/
console.log("esercizio: PROGETTARE UNA INTERFACCIA PER LA GESTIONE DI UNA SIM");
class User {
    constructor(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    //metodo per ricaricare il credito
    ricarica(importo) {
        this.credito += importo;
        console.log(`Credito ricaricato: ${importo} euro. Credito attuale: ${this.credito} euro.`);
    }
    //metodo per effetturare una chiamata
    chiamata(minuti) {
        const costoChiamata = minuti * 0.2; // 0.20 euro al minuto
        if (this.credito >= costoChiamata) {
            // verifica se il credito è sufficiente
            this.credito -= costoChiamata; // sottrae il costo della chiamata dal credito
            this.numeroChiamate += minuti; // incrementa il numero di chiamate
            console.log(`Chiamata effettuata per ${minuti} minuti. Credito residuo: ${this.credito} euro.`);
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    //metodo per conoscere il credito residuo
    chiama404() {
        return `Credito residuo: ${this.credito.toFixed(2)} euro.`; //toFixed(2) per mostrare due decimali
    }
    //metodo per conoscere il numero di chiamate effettuate
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    // Metodo per azzerare le chiamate
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const user1 = new User("Mario", "Rossi");
user1.ricarica(10); // ricarica di 10 euro
user1.chiamata(15); // chiamata di 15 minuti (costo 3 euro)
console.log(user1.chiama404()); // Mostra credito residuo
console.log(`Minuti totali di chiamate: ${user1.getNumeroChiamate()}`);
user1.azzeraChiamate();
console.log(`Minuti dopo azzeramento: ${user1.getNumeroChiamate()}`);
