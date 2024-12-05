//FUNZIONI

//Funzioni predefinite
/* 
window.alert("ok")
console.log("first")
document.write("ciao a tutti")
let num = prompt("inserisci un numero")
console.log(num) 
*/
/* 
let num1 = prompt("inserisci un numero")
let num2 = prompt("inserisci un numero")
document.write(+num1 + +num2)
*/
//questo sopra dovrei riscriverlo n volte e non è comodo,



//per evitare ciò uso la FUNZIONE

//Funzioni Custom
//function func(opzionale-->parametri){...istruzioni opzionale-->return}
function sum() {
    let num1 = prompt("inserisci un numero")
    let num2 = prompt("inserisci un numero")
    /* console.log(+num1 + +num2) */
    return(+num1 + +num2)
}
//la funzione si richiama sempre
/* sum() */
//posso continuare
/* sum() */
//posso fare anche così
/* let s = sum()
console.log(s) */
//posso sommare anche con variabili esterne  alla funzione 
//let x = 10 ----> return(+num1 + +num2 + x)

//altro esempio
function fullName() {
    let name = prompt("inserisci il tuo nome")
    let surname = prompt("inserisci il tuo cognome")
    /* console.log(+num1 + +num2) */
    /* return name + " " + surname */
    //posso anche
    return(name.length > 0 && surname.length > 0) ? name + " " + surname : "...";
}
/* let name = fullName();
console.log("Ciao " + name) */

//I parametri attribuiscono alla funzione la possibilità di manipola dei valori
//e utilizzarli per l'esecuzione di ustruzioni
//Ad esempio:
/*
function somma(num1, num2) {
    istruzioni da eseguire;
    return num1 + num2;
} 
*/
function somma(x,y) {
    //quindi metto un controllo per evitare bug
    if(typeof x === "number" && typeof y === "number") {
        let res = x + y
        return res;
    } else {
        return 0
    }
    
}
//potevo scrivere anche direttamente return x + y;
let res1 = somma(5,9);
console.log(res1);
let res2 = somma(43,57);
console.log(res2);
let res3 = somma("ciao", "abc");
console.log(res3 + " QUESTO NON E' UN NUMERO!");
//se ci fosse una moltiplicazione darebbe NaN --> Not a Number
//un altro errore sarebbe se
let res4 = somma(2) //se passo solo un parametro rispetto alla funzione invece di due
console.log(res4 + " HAI INSERITO SOLO UN VALORE!"); // se non ci fosse un controllo darà UNDEFINED

//E se io gli passassi più parametri dei parametri della funzione? 
//lui prende i primi due e il terzo lo ignora
//posso utilizzare l'array predefinito arguments per vedere il numero di parametri che sto passando
//es:
function func(x, y=0) {
    console.log("Num parametri:", arguments.length)
    return x+y;
}

let r = func(10, 8, 3, 5);
console.log(r)

//arguments è un array predefinito di js
/* function sumVarArgs() { */ 
//potrei utilizzare (...args) ---> spread operator estrae i valori da un oggetto e li mette dentro una variabile in questo caso args
function sumVarArgs(...args) {
    console.log("Num parametri dentro args:", args)
    console.log("Num parametri dentro arguments:", arguments)
    let result = 0;
    for (const element of args) {
        result += element
    }
    return result
}

let risultatoFunc = sumVarArgs(8, 9, 9, 10, 8, 2)
console.log("La somma è " + risultatoFunc)
//potrei aggiungere numeri a (8, 9, 9)

//RICORDARE 
//...name ha più o meno la stessa funzionalità che aveva con un array o un object
//esempio, avevamo detto che:
//con un ARRAY
//let arr = [1, 2, 3];
//let arr2 = Object.assign([], arr)  
//OPPURE
//let arr2 = [...arr];
//con un OBJECT
//let abj = {1, 2, 3};
//let obj2 = Object.assign({}, obj)  
//OPPURE
//let obj2 = {...obj};

//LA DIFFERENZA CON LA FUNZIONE è CHE LA NUOVA VARIABILE DOVE COPIAMO GLI ELEMENTI DELLA VECCHIA LA METTIAMO DENTRO LE PARENTESI
//(...args) ----> copiando da arguments



//HOSTING
func();
function func() {
    console.log("Sono la funzione func")
}

//console.log(text) // Errore

let text; // dichiarazione di una variabile
text = 'ciao'; // inizializzazione di una variabile


for(var i=0; i<5; i++){
    console.log(i)
}
console.log(i)


{
    var j = 'Sono var e sono dentro un blocco'
    let y = 'Sono let e sono dentro un blocco'
    console.log(j)
    console.log(y)
}

console.log(j)
// console.log(y) // Errore

let u;
if(x > 5) { //x variabile a caso
    u = 'Sono var e sono dentro un blocco IF'
}

console.log(u)




// Function Javascript
// function func(?params) { ...istruzioni ?return }
// let func = function(?params) { ...istruzioni ?return }

a()
// b() errore

// per il concetto di hoisting delle funzioni posso richiamare la funzione anche prima di averla dichiarata
function a() { 
    console.log("Sono una dichairazione di funzione")    
}
a()

// Una funzione espressione può essere invocata solo dopo averla dichiarata
let b = function() {
    console.log("Sono una funzione espressione") 
}
b()

let e = () => console.log("Sono una funzione freccia") 
let c = (num1, num2) => num1 + num2
let d = (num1, num2) => {
    return num1 + num2
}
console.log(c(5,10))
console.log(d(5,10))

let globalVar = "Sono una variabile globale";
function funcScope() {
    let localVar = "Sono una variabile locale ad una funzione";
    console.log(globalVar)
    console.log(localVar)
}
funcScope()

console.log(globalVar)
// console.log(localVar) // Errore


// Math
// Classe Math
// random - ceil - floor - round - min - max

let randNum = Math.random() * 100 //da 0 (incluso) a 100(escluso)
let ceilNum = Math.ceil(randNum)
let floorNum = Math.floor(randNum)
let roundNum = Math.round(randNum)
console.log(randNum, ceilNum, floorNum, roundNum)

Math.min([4,9,2,7,8])
Math.max([4,9,2,7,8])

// Date

let now = new Date();
let g = new Date(2024, 10, 25)
console.log(now)
console.log(g)
g.setMonth(5)
console.log(g.getFullYear())
console.log(g)
    