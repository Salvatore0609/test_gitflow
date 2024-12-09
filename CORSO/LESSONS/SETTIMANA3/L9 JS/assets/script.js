// EcmaScript ES6 -->

//Spread Operator
let obj1 = {
    name: "Mario",
    lastname: "Rossi",
    city: "Roma"
}

let obj2 = obj1; // due puntatori nella stessa zona di memoria
let obj3 = {...obj1} // creo un nuovo oggetto in una nuova zona di memoria e clono i valori di obj1
//prima si usava object.assign
let obj4 = Object.assign({}, obj1) //prima di ES6 

//lo stesso con gli array

let arr1 = ["uno", "due", "tre"]

let arr2 = arr1; // due puntatori nella stessa zona di memoria
let arr3 = [...arr1]; // creo un nuovo oggetto in una nuova zona di memoria e clono i valori di obj1//prima si usava object.assign
let arr4 = Object.assign({}, arr1); //prima di ES6 ù


//Rest parameter 
//posso utilizzare i parametri di DEFAULT quindi potrei: (x, y, z=25)

function func1(x, y, z=25) {
    console.log("I parametri passati alla funzione sono: ", x, y, z)
}
func1(10, 5); 

//prima del ES6 i parametri variabili di una funzione venivano catturati da un oggetto predefinito chiamato arguments
function func2() {
    console.log("I parametri passati alla funzione sono: ", arguments)
    for (const element of arguments) {
        console.log(element)
    }
}
func3(...arr1, "cinque");

//per passare i passare i parametri più velocemente posso usare il rest parameter
function func3(...args) {
    console.log("I parametri passati alla funzione sono: ", args)
}
func2(...arr1);


// Destructuring Operator
obj1 = {
    name: "Mario",
    lastname: "Rossi",
    city: "Roma"
}

//prima si faceva
//Estraggo dei valori contenuti in un oggetto e inizializzo delle varibili
let n = obj1.name; //dot notation
let l = obj1.lastname;
let c = obj1.city;
console.log(n,l,c);

//Destructuring
let { name, lastname, city } = obj1; // posso metterli anche in disordine e li leggerà lui nel modo corretto
console.log(name, lastname, city)
//oppure
//Destructuring con nomi di variabili differenti rispetto alla proprietà di un oggetto
let { name:m, city:r, lastname:ro } = obj1; 
console.log(m, ro, r)

//stessa cosa con gli array
arr1 = ["uno", "due", "tre"]

//prima del ES6 Estraggo dei valori contenuti in un array e inizializzo delle variabili
let u = arr1[0];
let s = arr1[1];
let i = arr1[2];

//con ES6 -> ECMAScript 2015(ricordare)
//Destructuring Array
let [f, g, q] = arr1;


//Template Literal
//Prima dell'ES6
//se vado a capo ovviamente si rompe tutto, ma uso il (+) per concatenare
let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit." + name +
"Quod molestias tempore ipsum commodi architecto." + lastname +
"Natus soluta amet ullam molestias, aut possimus aliquam inventore! Illum, harum ab! Omnis unde atque distinctio!" + city;

//Dopo ES6 utilizzo il Template Literals
//con questo metodo posso andare a capo quanto voglio e se voglio inserire dei valori utilizzo ${valore}
//questo rende il codice più pulito e veloce
let str2 = /* alt + 96 --> `` */ `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${name}
Quod molestias tempore ipsum commodi architecto. ${lastname}
Natus soluta amet ullam molestias, aut possimus aliquam inventore! Illum, harum ab! Omnis unde atque distinctio! ${city} `

//Metodi delle stringhe nuovi dopo ES6
/* string.startsWith()
string.endsWith()
string.includes() */

//metodi Array
let fiore = ["rosa", "geranio,"]
let fiore1 = ["tulipano", "margherita"]
let fiore3 = [fiore + fiore1];
console.log(fiore3);
//soluzione migliore
fiore = ["rosa", "geranio,"]
fiore1 = ["tulipano", "margherita"]
fiore3 = fiore.concat(fiore1);
console.log(fiore3);
//oppure
let fiore4 =[...fiore, "gelsomino", ...fiore1]
console.log(fiore4)



//forEach | map | filter | find | reduce

//forEach
//gli altri modi già visti sono

for (let index = 0; index < fiore4.length; index++) {  }
for (const key in fiore4) {  }
for (const element of fiore4) {  }

//Dopo ES6 
let arrNum = [25, 6, 7, 9, 11, 6]
arrNum.forEach(element => console.log(element))

//potrei fare anche così
//E' una funzione a tutti gli effetti
//è sempre una iterazione (anche se non ha senso utilizzare una funzione)
let funcArrow = element => console.log(element);
    funcArrow(99);
arrNum.forEach(funcArrow)//per ogni elemento richiama questa funzione

//quindi l'esecuzione più semplice è 
arrNum.forEach(element => console.log(element))//per convenzione se iteriamo degli ELEMENTS nell'arrow function lo chiamiamo al singolare ELEMENT ma ovviamente possiamo chiamarlo come vogliamo.

//map
//map modifica l'array, l'each lo utilizzo solo per leggere
let arrMod = arrNum.map(element => element * 2)
console.log(arrMod)
console.log(arrNum) // l'array iniziale rimane invariato ovviamente

//se volevo sostituire direttamente l'array
/* 
arrNum = arrNum.map(element => element * 2)
console.log(arrNum) 
*/

//filter
let arrFilter = arrNum.filter(element => element > 10)
//con questo posso filtrare, anche con questo itero ma per filtrarlo utilizzo una nuova condizione
console.log(arrFilter)
//funziona un pò come un if

//Reduce
//anche lui itera come gli altri, solo che qua si usa la callback
//let result = arrNum.reduce((accumulatore, element) => acc + element, 0)
//equivale a:
/* 
function sum(...args) {
    let r = 0;
    for (const element of args) {
        r += element
    }
    return r;
} 
dove tutto ciò cicla l'array e somma al totale precedente
*/
//Quindi
let result = arrNum.reduce((acc, element) => acc + element, 0)
console.log(result);

//every
//determina se tutti gli elementi di un array passano una certa condizione (true o false)
let numMagg10 = arrNum.every(element => element > 10 )
console.log(numMagg10);
//se tutti i numeri sono maggiori di 10 allora è true

//some 
//è uguale ad every ma cambia che è true se almeno uno passa tale condizione
let numMagg5 = arrNum.some(element => element > 5 )
console.log(numMagg5);
//some ed every sono simili ad AND &&, OR ||

//indexOf
//cerca l'elemento tramite indice e lo restituisce

//find
//il find mi cerca un elemento in base ad una condizione e lo restituisce
let numSix = arrNum.find(element => element === 6);
console.log(numSix);

//findIndex
//mi dice a che indice è tale elemente all'interno di un array
let indexNumSix = arrNum.findIndex(element => element === 6);
console.log(indexNumSix);
