// EcmaScript ES6 -->

//Spread Operator
let obj1 = {
    name: "Mario",
    lastname: "Rossi",
    city: "Roma"
}

let obj2 = obj1; // due puntatori nella stessa zona di memoria
let obj3 = {...obj} // creo un nuovo oggetto in una nuova zona di memoria e clono i valori di obj1
//prima si usava object.assign
let obj4 = Object.assign({}, obj1) //prima di ES6 

//lo stesso con gli array

let arr = ["uno", "due", "tre"]

let arr2 = arr1; // due puntatori nella stessa zona di memoria
let arr3 = [...arr1]; // creo un nuovo oggetto in una nuova zona di memoria e clono i valori di obj1//prima si usava object.assign
let arr4 = Object.assign({}, arr1); //prima di ES6 ù


//Rest parameter 
//posso utilizzare i parametri di DEFAULT quindi potrei: (x, y, z=25)

/* function func1(x, y, z=25) {
    console.log("I parametri passati alla funzione sono: ", x, y, z)
}
func1(10, 5, 9, 5); */

//per passare i passare i parametri più velocemente posso usare il rest parameter
function func1(...args) {
    console.log("I parametri passati alla funzione sono: ", args)
}
func1(10, 5, 9, 5);