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

