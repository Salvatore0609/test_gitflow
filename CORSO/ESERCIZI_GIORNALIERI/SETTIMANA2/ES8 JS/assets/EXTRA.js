//Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") """e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no."""
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//funzione per creare un array di numeri casuali
function giveMeRandom(n) {
    const randomArray = [];
    for (let i = 0; i < n; i++) {
        randomArray.push(Math.floor(Math.random() * 11)); //numeri tra 0 e 10, volendo facendo ) +1) sarebbe da 1 a 10 
    }
    return randomArray;
}
// Funzione per controllare e sommare i numeri maggiori di 5
function checkArray(arr) {
    let sommaMaggioriDi5 = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > 5) {
            console.log(num + " è maggiore di 5");
            sommaMaggioriDi5 += num;
        } else {
            console.log(num + " non è maggiore di 5");
        }
    }

    return sommaMaggioriDi5
}
const randomNumbers = giveMeRandom(10); // Genera un array di 10 numeri casuali
console.log("Array generato:", randomNumbers);
const result = checkArray(randomNumbers); //qui unisco la prima funzione con la seconda
console.log("Somma dei numeri maggiori di 5:", result);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
    {
    price: 2,
    name: "Sapone1",                  //essendo un array tutto l'oggetto i = 0
    id: "xxx",
    quantity: 3,
    }, 
    {
    price: 3,
    name: "Sapone2",                  //i = 1
    id: "xxx",
    quantity: 4,
    }, 
    {
    price: 5,
    name: "Sapone3",                 //i = 2
    id: "xxx",
    quantity: 2,
    },
]
function shoppingCartTotal(cart){
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += (cart[i].price * cart[i].quantity)
    }
    return total;
}
let cartTotal = shoppingCartTotal(shoppingCart)
console.log(cartTotal)

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function addToShoppingCart(cart, newItem) {       // i parametri a cui dare un valore
    cart.push(newItem);                           // la logica
    return cart.length;
}

const newItem = {
    price: 3,
    name: "Sapone4",                                //il nuovo oggetto
    id: "xxx",
    quantity: 2,
};

const newTotal = addToShoppingCart(shoppingCart, newItem);
console.log("Il Nuovo totale degli elementi nel carrello è: ", newTotal);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(shoppingCart) {
    let maxItem = shoppingCart[0]; // Inizializza maxItem con il primo elemento
  
    for (let i = 1; i < shoppingCart.length; i++) {
      if (shoppingCart[i].price > maxItem.price) {
        maxItem = shoppingCart[i]; // Aggiorna maxItem se trovi un oggetto più costoso
      }
    }
  
    return maxItem; // Restituisci l'oggetto più costoso
    
  }
  const maxItemCart = maxShoppingCart(shoppingCart);
  console.log(maxItemCart); 

  
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
