// Variabili
// var - let - const

// DataTypes
// String - Number - Boolean - Object - Array - Undefined - Null

// OGGETTI

let name = "Mario";
let lastname = "Rossi";
let age = 25;
//invece ora
let student = {
    name: "Mario",
    lastname: "Rossi",
    age: 25 
}
//siccome diventano proprietà dell'oggetto student come si stampa?
console.log(student.name);
//oppure
console.log(student["name"]);
//per vederle tutte uso la virgola
console.log(student.name, student.lastname, student.age);
//oppure
console.log(student["name"], student["lastname"], student["age"]);
//ma potrei stampare anche l'oggetto in se
console.log(student);
//typeof
console.log(typeof student);

//posso cambiare il valore alle proprietà dell'oggetto
student.name = "Giuseppe";
console.log(student);
//possiamo anche aggiungere nuove proprietà
student.fiscalCode = "ABC12DEF23A58P";
console.log(student);
//possiamo anche eliminare dei valori
delete student.age;
console.log(student);

// posso ramificare(annidare) dentro lo stesso oggetto
let persona = {
    alto: 180,
    address: {
        via: "Via Vittorino Era",
        città: "Sassari"
    }
}
//posso vederlo sia così
console.log(persona.address.città)
//che così
console.log(persona);

//posso copiarmi tutte le caratteristiche di un oggetto in un secondo oggetto
//let student2 = student; //ERRORE!

//il problema è che gli ugualizza e li legge come la stessa cosa
//quindi se cambiassi un valore al secondo lo cambia anche al primo
//QUESTO E' UN ERRORE!

//Se utilizzo const rendo non modificabile la variabile dell'oggetto
//Sono comunque modificabili le proprietà dentro l'oggetto
//Ovviamente il problema visto prima rimane... come lo risolviamo?
//Possiamo utilizzare due alternative per fare una "copia sicura"
//creo un nuovo oggetto, gli copio tutte le proprietà di student e lo salvo in student2

/* const student2 = Object.assign({}, student); */

//OPPURE METODO NUOVO 
const student2 = {...student}; //... spread operator //in questo modo facciamo una "copia sicura"
student2.name = "Antonio";
console.log(student);
console.log(student2);



//ARRAY
//L'array a differenza dell'oggetto(che definisce le caratteristiche dello stesso)
//E' un contenitore(sempre un oggetto) che contiente una lista di oggetti(ELEMENTI)
//si consiglia di usare sempre il const
//L'array si apre con le parentesi quadre.
//L'Array può contenere qualsiasi cosa, altri array, oggetti, stringhe, numeri ecc.

/* const myArr = ["ciao", 25, true, student, student2, 44];
console.log(myArr);
console.log(typeof myArr); */

//in javascript l'array non è tipizzato ma ha senso tipizzarlo per organizzazione
const myArr = [student, student2];
console.log(myArr);
//Per accedere agli elementi dell'array si guarda l'indice
//l'indice parte da 0 quindi ---> student è all'indice 0, student2 è all'indice 1
console.log(myArr[0]); //infatti in console accede solo a student
console.log(myArr[1]); //infatti in console accede solo a student2
//ovvamente se provo ad un indice dove non c'è niente sarà undefined, ad esempio myArr[2]


//nel mio array posso utilizzare i metodi(funzionalità)
const arr = [25, 78, 12, 61, 34];
console.log(arr);
//.sort() ordina il mio array
arr.sort();
console.log(arr);
//.lenght restituisce la lunghezza(quanti elementi ci sono in numero) di un array
arr.length; //è un proprietà di lettura
console.log(arr);
//Noi possiamo inserire un nuovo elemento potremmo fare come visto prima
//arr[5] = 33; // è scomodo perchè dovremmo contarci la posizione dell'indice
//allora possiamo utilizzare .push()
arr.push(33);
console.log(arr);
//.unshift() mi permette di aggiungere un elemento ad inizio array (indice 0)
arr.unshift(22);
console.log(arr);
//.pop() elimina un elemento alla fine dell'array
arr.pop();
console.log(arr);
//.shift() elimina un elemento ad inizio dell'array
arr.shift();
console.log(arr);
//.splice() parto dall'indice 2 e cancello 1(un) elemento arr.splice(start i, deleteCount)
//se io a .splice() do 3 valori lui con il terzo sostituisce
//se al secondo gli do 0 non toglie nessun elemento ma sostituisce e basta
arr.splice(2, 1); // potrei cancellare anche più elementi
console.log(arr);

arr.splice(1, 1, 99); //sostituisce alla posizione che voglio io
console.log(arr);

arr.splice(1, 0, 99); //con questo aggiungo alla posizione che voglio io
console.log(arr);

//RICORDARE! IL .lenght legge sempre l'ultima modifica




//LOGICA CONDIZIONALE (true o false è alla base di ogni struttura condizionale)
//costrutto: if, else(continuo di if)
//opzione intermedia else if ---> 
/* 
if(condizione) {
    istruzione da eseguire se prima condizione è vera
} else if (seconda condizione) {
    istruzione da eseguire se seconda condizione è vera
} else if (terza condizione) {
    istruzione da eseguire se terza condizione è vera
} else {
    istruzione da eseguire nel caso le condizioni precenti siano false
} 
*/

//Le condizioni possono essere più complesse tramite gli OPERATORI LOGICI.
// && AND  // || OR //! NOT

let num = 20;
let myname = "Giorgio";
if (num > 18 || myname.lenght > 5 && arr.lenght === 3) {
    console.log("sono dentro un IF")
} else if (num > 10) {
    console.log("sono dentro un ELSE IF")
} else {
    console.log("sono dentro un ELSE")
}

if (num > 10) {
    console.log("sono dentro l'IF")
} 


//0 -> false | !0 -> true //si converte in booleano.. in questo caso num = 20 è diverso da 0
//"" -> false | !"" -> true
//undefined o null -> false
//[] -> false | ![] -> true
//{} -> false | !{} -> true
//ogni elemento con un valore è vero, ogni elemento che non ha un valore è falso
if (num) {
    console.log("sono dentro il num IF")
} 

