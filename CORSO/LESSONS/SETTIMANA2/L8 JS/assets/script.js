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
console.log(str.slice(2)); //taglia una stringa dall'indice 2 in poi

//.substring() è simile a slice ma non accetta l'idicazione di posizione negativa.


//.replace("parola da sostituire", "parola sostitutiva")
console.log(str.replace("a", "X")) //sostituisce solo la prima occorrenza
console.log(str.replaceAll("a", "X")) //sostituisce tutte le occorrenze

//.toLowerCase() --> tutto minuscolo
//.toUpperCase() --> tutto maiuscolo
// questi hanno l'utilità di uniformare i dati per il database.

//.concat() metodo alternativo al + per concatenare due stringhe, poco utilizzato

//.trim() serve per eliminare gli spazi vuoti all'inizio e alla fine di uno testo
let str1 = " Mi chiamo Salvatore, ciao a tutti "
console.log(str1)
console.log(str1.trim()) //evita di mettere gli spazi ad esempio per errore quando inserisci una password
//aiuta con una pulizia dei dati

//.charAt() mi permette di cercare un carattere dato un indice
console.log(str1.charAt(5))

//.split()
let arrStr = str.split(" ")
console.log(arrStr)