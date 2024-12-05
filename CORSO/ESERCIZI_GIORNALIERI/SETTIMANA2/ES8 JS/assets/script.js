/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function area() {}
const area = function() {}
const area = () => {} 
*/
function area(b, a) {
    return b * a;
}
let resultArea = area(4, 2);
console.log("L'area del rettangolo è: " + resultArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
    if(n1 === n2){
        return (n1+n2) * 3;
    } else {
        return n1+n2;
    }
}
let somma = crazySum(4, 4);
console.log(somma);
let somma1 = crazySum(4, 2);
console.log(somma1);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    // Calcola la differenza assoluta tra il numero fornito e 19
    let diff = Math.abs(num - 19);
    if (num > 19) {
        return diff * 3;
    } else {
        return diff;
    }
}
let diffAbs = crazyDiff(25);
console.log(diffAbs); // Dovrebbe stampare 18 (poiché (25 - 19) * 3 = 18)
let diffAbs1 = crazyDiff(8);
console.log(diffAbs1); // Dovrebbe stampare 18 (poiché (8 - 19) = -11 ---> assoluto = 11)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary (n) {
    if (n > 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
let nInt = boundary(40);
console.log(nInt);
let nInt1 = boundary(120);
console.log(nInt1);
let nInt2 = boundary(400);
console.log(nInt2);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify (string) {
    if (string.startsWith("EPICODE")) {  //metodo .startsWith esclusivo delle stringhe
        return string.slice(7); //taglia la parola EPICODE che sono i primi 7 caratteri
    } else {
        return "EPICODE " + string; 
    }
}
let str = epify("è una scuola per imparare la programmazione");
console.log(str);
let str1 = epify("EPICODE è una scuola per imparare la programmazione");
console.log(str1);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 (num) {
    if (num > 0 && (num % 3 === 0 || num % 7 === 0)) {
        return num + " è un multiplo di 3 e 7"
    } else {
        return num + " non è un multiplo di 3 e 7"
    }
}
let result = check3and7(3);
console.log(result);
let result2 = check3and7(5);
console.log(result2);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string) {
    let splitS = string.split(""); // Converti la stringa in un array di caratteri
    let reverseS = splitS.reverse(); // Inverte l'array
    let joinS = reverseS.join(""); // Unisci l'array di nuovo in una stringa
    return joinS; // Restituisci la stringa invertita
}
let reverseStr = reverseString("Ciao");
console.log(reverseStr); // Output: "oaiC"

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str4) {
    let words = str4.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); //.slice(1) mi tagli il resto della parola per far cadere i comandi precedenti solo sulla prima lettera
    }                                                                    
    return words.join(" ");
}
let upperFirstStr4 = upperFirst("ciao mi chiamo salvatore desole")
console.log(upperFirstStr4)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
    return stringa.slice(1, -1);
}
let newStringa = cutString("ciao mi chiamo salvatore desole");
console.log(newStringa);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e 
 ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let arr = []; // Inizializzo un array vuoto
    for (let i = 0; i < n; i++) {
        // Genero un numero casuale tra 0 e 10 e lo aggiunge all'array
        arr.push(Math.floor(Math.random() * 11)); //da 0 (incluso) a 11(escluso)
    }
    return arr; 
}

let nRandom = giveMeRandom(5); //un array di 5 numeri casuali tra 0 e 10
console.log(nRandom);