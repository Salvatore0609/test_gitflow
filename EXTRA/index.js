var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("lezione 1");
var myString = "ciao";
var myNumber = 42;
//myNumber.toUpperCase(); //solo per stringa
var anotherString = "ciao2";
anotherString.toLocaleLowerCase();
var sum = function (n1, n2) {
    return n1 + n2;
};
sum(1, 2);
var array = ["ciao", "hello", "hola"];
var array1 = ["ciao", 42];
var array2 = ["ciao", "hello", "hola", 42];
var obj = {
    firstProperty: "ciao",
    secondProperty: 42,
    thirdProperty: true,
};
var obj2 = {
    age: 30,
    name: "John",
    canDrive: true,
};
console.log("array.map");
var arr = [1, 2, 3, 4, 5];
var map = arr.map(function (result) { return result / 2; });
console.log(map);
console.log("array.filter");
var arr2 = [1, 2, 3, 4, 5];
var filter = arr2.filter(function (number) { return number > 3; });
console.log(filter);
console.log("array.find");
var numbers = [1, 2, 3, 4, 5];
var finds = numbers.find(function (number) { return number > 1; });
console.log(finds);
console.log("destrutturazione array e oggetti");
var _a = ["Italia", "Francia", "Spagna"], primaNazione = _a[0], terzaNazione = _a[2];
var _b = {
    nome: "Mario",
    cognome: "Rossi",
    emailAddress: "mario.rossi@example.com",
}, nome = _b.nome, cognome = _b.cognome, email = _b.emailAddress;
console.log("spread operator");
var america = ["USA", "Canada", "Messico"];
var europa = ["Italia", "Francia", "Spagna"];
var mondo = __spreadArray(__spreadArray([], america, true), europa, true);
var utente = {
    nome: "Mario",
    cognome: "Rossi",
    emailAddress: "mario.rossi@example.com",
};
var utenteCompleto = __assign(__assign({}, utente), { eta: 30, professione: "Sviluppatore" });
console.log("interesezione di più tipi");
var completa = {
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
var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    //metodo per ricaricare il credito
    User.prototype.ricarica = function (importo) {
        this.credito += importo;
        console.log("Credito ricaricato: ".concat(importo, " euro. Credito attuale: ").concat(this.credito, " euro."));
    };
    //metodo per effetturare una chiamata
    User.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.2; // 0.20 euro al minuto
        if (this.credito >= costoChiamata) {
            // verifica se il credito è sufficiente
            this.credito -= costoChiamata; // sottrae il costo della chiamata dal credito
            this.numeroChiamate += minuti; // incrementa il numero di chiamate
            console.log("Chiamata effettuata per ".concat(minuti, " minuti. Credito residuo: ").concat(this.credito, " euro."));
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    //metodo per conoscere il credito residuo
    User.prototype.chiama404 = function () {
        return "Credito residuo: ".concat(this.credito.toFixed(2), " euro."); //toFixed(2) per mostrare due decimali
    };
    //metodo per conoscere il numero di chiamate effettuate
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // Metodo per azzerare le chiamate
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var user1 = new User("Mario", "Rossi");
user1.ricarica(10); // ricarica di 10 euro
user1.chiamata(15); // chiamata di 15 minuti (costo 3 euro)
console.log(user1.chiama404()); // Mostra credito residuo
console.log("Minuti totali di chiamate: ".concat(user1.getNumeroChiamate()));
user1.azzeraChiamate();
console.log("Minuti dopo azzeramento: ".concat(user1.getNumeroChiamate()));
