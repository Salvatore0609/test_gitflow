//METODI PREDEFINITI
//string

let str = "Ciao a tutti";
console.log(str.length); //numero dei caratteri di str
console.log(str.indexOf("tutti")) //darà la posizione indice di t
console.log(str.indexOf("a")) //stamperà la prima occorrenza 
console.log(str.lastIndexOf("a")) //stamperà l'ultima occorrenza che incontra
// accettano anche un secondo paratamentro che indica da quale indice partire.
//esempio str.indexOf("tutti", 10)

//ci sarebbe anche .search() abbinabile alle espressioni regolari (regular expression)

//.slice() accetta fino a due parametri, inizio e fine.. se do solo un parametro taglia dall'indice i in poi
console.log(str.slice(2, 9)); //taglia una stringa dall'indice 2 a 9
console.log(str.slice(2)); //taglia una stringa dall'indice 2 a 9

//.substring() è simile a slice ma non accetta l'idicazione di posizione negativa.


