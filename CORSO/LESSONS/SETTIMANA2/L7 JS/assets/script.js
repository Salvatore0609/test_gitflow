//STRUTTURE DI CONTROLLO
//if/else
//if(condizione){... blocco di istruzioni} else if(condizione){...blocco di istruzioni} else {...blocco di istruzioni}

//Switch/Case
//switch (var || espressione){case a: ...istruzioni; break; case b: ...istruzioni; break; case c: ...istruzioni; break; default: ...istruzione; break;}
//ES:
let x = 5;

if(x === 5) {
    console.log("...")
} else if (x === 10) {
    console.log("...")
} else if (x === 15) {
    console.log("...")
} else {
    console.log("...")
}
//invece con swithc/case
switch (x) {
    case 5:
        console.log("...")
        break;
    case 10:
        console.log("...")
        break;
    case 15:
        console.log("...")
        break;
    default:
        console.log("...")
        break;
}   
//altro esempio:
let mese = 5
switch (mese) {
    case 12:
    case 1:
    case 2:
        console.log("Inverno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    default:                   //valore opzionale, quando nulla prima corrisponde stampa il default
        console.log("...");
        break;
}   



//strutture iterative
//mentre le strutture di controllo esegue un blocco di codice SE è una strutta è vera
//le strutture iterative eseguono un blocco di codide FINCHE' una struttura è vera
//è un ciclo, è una iterazione che rinizia da capo.
//while - do while - for (for in - for of - forEach)

//while
//while(condizione) {...istruzioni; incremento}
let numero = 0
while(numero < 10) {
    console.log(numero);
    numero++;
} 

let numero1 = 0
while(numero1 <= 10) {
    console.log(numero1);
    numero1++;
}  

let numero2 = 5
while(numero2 > 0) {
    console.log(numero2);
    numero2--; //decremento da 5 a 0
}  

//posso fare anche così anche se leggermente più complesso
let numero3 = 0
while(true) { //true è uguale a 1 | qui rischio che il ciclo non si interrompa
    console.log(numero3);
    numero3++; //aumenta di 1
    if(numero3 === 5) {  //se il numero incrementato arriva === 5 
        break; //con questo posso interrompere il ciclo
    } 
}  

//do-while
//do {...istruzioni; incremento} while(condizione)
//questa verifa la condizione solo dopo le istruzioni
//la differenza con il while è che prima lo controlla e poi entra
//qui invece prima entra poi lo controlla
//se la condizione è falsa almeno una volta il codice lo esegue sempre

//entra ed esegue almeno una volta
let numero4 = 10
do {
    console.log(numero4); //entra 
    numero4++            //incrementa
} while(numero4 < 10) //controlla se è vero --> va avanti | se è falso --> ricontrolla

//non entra e non esegue nulla
let numero5 = 10
while (numero5 < 10) { //non entra neanche una volta e non arriva al contro perchè 10 non è < 10 ma =
    console.log(numero2)
    numero5++
} 

// for
// for(inizializzazione; condizione; incremento) {...istruzioni}
//simile ad un ciclo while ma più contratto e organizzato
//qui si utilizza una nuova variabile detta contatore
//qui sono sempre vincolato ad un incremento a differenza del while che posso impostarlo per stoppare l'incremento.
//il ciclo for si presta bene per l'iterazione di un array
//ES:
const numeri = [4, 9, 16, 25, 29];
let somma = 0

//parte dall'indice 0
somma += numeri[0];
somma += numeri[1];
somma += numeri[2];
somma += numeri[3];
somma += numeri[4];

//invece con il for
const numeri1 = [4, 9, 16, 25, 29];
let somma1 = 0
//parte sempre dall'indice[i](può essere qualsiasi lettera) 0 
//itera i per tutti i numeri minori dei precenti 
//e poi incremento
//se voglio sommare solo i primi 3 numeri ad esempio --> i < 3
for(let i = 0; i < numeri1.length; i++) {
    somma1 += numeri1[i];
    console.log(somma1); //qui la lista iterata e sommata
}
console.log(somma1); //qui da direttamente il risultato finale

//altro esempio //ricordare che lavora sempre in maniera procedurale, quindi con un ordine
let arr = ["uno", "due", "tre"];

arr.push("quattro")
arr.shift()
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//il ciclo for normale è generico, posso utilizzarlo con tutto


//for in
//for(const key in object) {...istruzioni}
//il ciclo for in è specifo per l'array
//la chiave di un array è l'indice
for (const key in arr) {
   console.log(key, arr[key]); //anche solo console.log(arr[key]) va bene
}                              //al posto di key posso mettere anche i
//posso aggiungere ovviamente arr[key] += "!!" --> ["uno!!", "due!!", "tre!!"]
//nel ci sia un oggetto la chiave è esempio: name --> obj sarà l'elemento esempio: "Salvatore"


//for of
//for (const element of object){...istruzioni}
//il for of restituisce direttamente il valore(l'elemento) escludento l'indice
//sempre specifico per l'array, il for of è tra i più utilizzati
for (const element of arr) {
    console.log(element)
}

//forEach //è più un metodo combinato con un arrow function
//forma contratta di quello visto prima
//stesse funzionalità, scrivolo solo meno
/* array.forEach((element, key) => console.log(key, element)); */