// per installare TypeScript avrete bisogno di lanciare il comando
// npm i typescript -g
// -g ve lo installerà globalmente sul vostro intero sistema
// verificate poi con un
// tsc -v
// se vi risponde con una versione es. Version 5.4.5
// significa che il comando esiste e quindi typescript è installato
var hello = "hello Epicoders!";
console.log(hello);
// DATA TYPES PRIMITIVI
// string
// number
// boolean
// undefined
// null
// tipi particolari:
// any - da evitare dove possibile, perché spegneremmo qualsiasi controllo (tornando ad una condizione di JS liscio)
// never - un tipo che non avrà mai un tipo (es. una funzione che ritorna un errore, non ritornerà mai niente)
// maybe - è diverso dagli altri due, perché è come un segnaposto, per un tipo che verrà assegnato a posteriori capendolo
//         dal contesto in cui viene utilizzata la variabile
// tipi strutturali:
// Object
// Array
// Function
var myNum = 10;
// in questo caso il tipo gli viene INFERITO da TypeScript
// myNum = "10";// ERRORE, non si può riassegnare una variabile, per quanto dichiarata con let, che aveva automaticamente assegnato il tipo number
// l'inferernza del tipo (TYPE INFERENCE) - è la capacità di TS di definire autonomamente il tipo alle variabili quando i valori sono facilmente interpretabili
// (quando abbiamo a che fare con elementi semplici, non è necessario specificare manualmente il tipo, perché TS è in grado di assegnarli da solo)
// myNum = undefined // ERRORE
myNum = 1; // VALIDO, ho riassegnato un valore dello stesso tipo (perché era una let in origine..)
// quando ha senso specificare il tipo manualmente
// let counter; // il tipo non riesce ad essere inferito, e gli viene assegnato :any
// counter = "ciao";
// counter = 10;
// qualsiasi cosa è permessa a questo punto
// per evitare che si spengano tutti i controlli (come se fossimo in JS liscio)
// potremmo andare a dichiarare la variabile con un tipo manuale ed evitare che si assegni automaticamente :any
var counter;
// counter = "ciao"; // questo non è più permesso
counter = 10; // solo dati coerenti potranno essere salvati
counter = 11;
var isLoading;
isLoading = true;
isLoading = false;
var notDefined;
var teachersName = "stefano";
// IL TIPO OGGETTO
// il tipo applicato manualmente
var myObj = { name: "stefano", surname: "miceli", age: 35 };
var myObj2 = { name: "stefano", surname: "miceli", age: 35 };
var myObj3 = { name: "stefano", surname: "miceli", age: "30" };
myObj.name.charAt(0);
if (typeof myObj.age === "number") {
    myObj.age.toFixed(2);
}
else {
    myObj.age.charAt(0);
}
// FUNZIONI
var greet = function () {
    return "Hello!";
};
console.log(greet().substring(0));
var sum = function (n1, n2) {
    return n1 + n2;
};
console.log(sum(5, 1));
console.log(sum("5", "10"));
// questa versione risolve il problema che ci portavamo dietro da tempo con JS, ovvero non avere controllo su cosa viene passato come parametro
// di conseguenza eravamo sempre soggetti a potenziali errori derivanti da sviste, passaggi di dati errati ecc.
// adesso non sarà più possibile sbagliare: i dati in ingresso DOVRANNO SEMPRE essere del tipo giusto,
// e la funzione è istruita sul tipo di dato in uscita.
// Posso usare il valore in uscita dalla funzione con assoluta certezza che sarà una stringa
var sumWithTypes = function (n1, n2) {
    return (n1 + n2).toString();
};
var result = sumWithTypes(10, 1);
// parametro opzionale
var sayMyName = function (name) {
    return "My name is: " + (name || "Heisenberg");
};
console.log(sayMyName());
console.log(sayMyName("Stefano"));
// parametro default
var sayMyName2 = function (name) {
    if (name === void 0) { name = "Heisenberg"; }
    return "My name is: " + name;
};
var sayMyName3;
// quando andiamo a riassegnare la variabile sayMyName3, quello che posizioneremo come valore, DOVRA' essere una funzione con
// quelle caratteristiche specificate prima
sayMyName3 = sayMyName;
sayMyName3 = sayMyName2;
// sayMyName3 = sumWithTypes; // ERRORE, non è una funzione con le stesse caratteristiche
sayMyName3 = function (name) { return "ciao" + (name || "studente"); };
// ARRAY
var myNeverArr = [];
// siccome un array creato in questo modo, non ammetterà mai di avere elementi al suo interno
// sarà meglio specificare il tipo da subito
var myNumArr = [];
// const myNumArr2: Array<number> = [];
myNumArr.push(3);
myNumArr.push(30);
myNumArr.push(300);
// myNumArr.push("1"); // non sono ammesse le stringhe
console.log(myNumArr);
myNumArr.forEach(function (n) { return n.toFixed(2); });
// anche nel caso del contesto di una funzione di callback, il tipo del parametro viene riconosciuto in quanto elemento parte dell'array precedente
// quindi TS saprà che n è un number, e di conseguenza ci suggerirà i metodi disponibili
var myStrArr = [];
myStrArr.push("ciao");
myStrArr.push("amici");
myStrArr.push("miei");
console.log(myStrArr);
myStrArr.forEach(function (s) { return s.toLowerCase(); });
// const myStrOrNumArr: (string | number)[] = []
var myStrOrNumArr = [];
myStrOrNumArr.push("2");
myStrOrNumArr.push(1);
// myStrOrNumArr.push(undefined); // no
myStrOrNumArr.forEach(function (el) {
    if (typeof el === "string") {
        el.concat("!"); // qui sarà sicuramente una stringa, mi ha fornito i metodi coerenti
    }
    else {
        el.toFixed(1); // qui sarà sicuramente un numero, mi ha fornito i metodi coerenti
    }
});
var myStrOrUndArr = [];
myStrOrUndArr.push("1");
myStrOrUndArr.push(undefined);
// myStrOrUndArr.forEach(el => el?.trim())
myStrOrUndArr.forEach(function (el) {
    if (el) {
        el.trim();
    }
    else {
        alert("abbiamo ricevuto undefined");
    }
});
// TUPLA - è una sorta di array con posizione specifica per il tipo assegnato
var myTuple = [0, "ciao"];
// le tuple ci danno valori precisi in posizioni precise, saranno più comunemente usate tramite l'estrazione dell'elemento per posizione (non tramite cicli)
// in questo modo alla singola posizione potremmo assegnare una variabile che la estrae da quella posizione
// ricordati l'utilizzo di useState in react
// simile a:
var primoEl = myTuple[0], secondoEl = myTuple[1];
// come se avessi fatto:
// const primoEl = myTuple[0]
// const secondoEl = myTuple[1]
var myOtherTuple = ["hey", 0, true];
myOtherTuple[0].concat("#"); // qui riconosce la presenza di una stringa e mi ha suggerito i metodi adeguati
myOtherTuple[1].toFixed(1); // qui riconosce la presenza del numero
myOtherTuple[2].valueOf(); // qui riconosce la presenza del booleano
var address = {
    coords: { lat: 12.8129831, lon: 19.82923 },
    street: "via delle rose 2",
    cap: 94000,
    country: "Italy"
};
var address2 = {
    coords: { lat: 28.8982, lon: 89.818 },
    street: "via dei tulipani 5",
    zip: 56722,
    country: "USA"
};
var person = {
    name: "Antonio",
    surname: "Albanese",
    numberOfEyes: 2,
    height: "180cm",
    hairColor: "brown"
};
var student = {
    name: "Meridjan",
    surname: "Shoti",
    numberOfEyes: 2,
    numberOfLimbs: 4,
    height: 170,
    hairColor: "black & white",
    batchCode: "FS1024",
    hasWebcam: true,
    preferredTopic: "React"
};
var student2 = {
    name: "Manuel",
    surname: "Casanuova",
    numberOfEyes: 2,
    numberOfLimbs: 4,
    height: 175,
    hairColor: "brown",
    batchCode: "FS1024",
    hasWebcam: true,
    preferredTopic: "React"
};
var student3 = {
    name: "Antonio",
    surname: "Kleijn",
    numberOfEyes: 2,
    numberOfLimbs: 4,
    height: 180,
    hairColor: "brown",
    batchCode: "FS1024",
    hasWebcam: false
};
var arrOfStudents = [];
// arrOfStudents.push("Stefano") // NON AMMESSO
arrOfStudents.push(student);
arrOfStudents.push(student2);
arrOfStudents.push(student3);
arrOfStudents.map(function (stud) { return stud.numberOfEyes; });
var U1 = {
    name: "Unit1",
    assignedTeacher: "Umberto Emanuele",
    topic: "HTML"
};
var U2 = {
    name: "Unit2",
    assignedTeacher: "Stefano Miceli",
    topic: ["UX/UI", "Animations", "Flex", "Bootstrap", "SASS", "JS3"]
};
var U3 = {
    name: "Unit3",
    assignedTeacher: "Stefano Miceli",
    //   topic: ["React", "Router", "React Hooks", "Redux", "React Bootstrap", "TypeScript"]
    topic: [{ weeklyTopics: ["React", "React Bootstrap"] }, { weeklyTopics: ["Router", "React Hooks"] }, { weeklyTopics: ["Redux", "TypeScript"] }]
};
