console.log(window) //oggetto predefinito di js //è la finestra del browser
//con questo possiamo vedere tutto quello che c'è nel browser dell'utente
//avremo tante informazioni, compreso sistema operativo.
//QUINDI con l'oggetto window potrò accedere a tutte le funzionalità del browser.


//BOM -> Browser object model
/* 
window.alert("ciao") 

let s = window.confirm("Ti piace JS?")
console.log(s) 
*/

//posso scriverli anche così
/* 
alert("");
confirm(""); 
*/
//window può rimanere silente nei metodi perchè c'è a prescindere

//per ogni azione dell'utente io posso vedere che eventi scatena perchè il browser li rileva e io posso manipolarli.


//DOM -> Document object mode -> manipolazione del document
window.document; //la pagina html
console.log(document); 
console.dir(document);
//in JAVASCRIPT i tag del documenti si chiamano NODI

//per selezionare un nodo della pagina con un id
let t = document.getElementById("titolo"); //#titolo --> id
console.log(t);
console.dir(t);

//proprietà di un oggetto stile
t.style
t.innerText = "Testo modificato tramite JS";
t.style.textAlign = "center" //qui si usa la forma camel case --> tex-align = center --->>> textAlign = center
//ricordare che js sovrascrive il css
t.style.color = "red";


//per selezionare un nodo della pagina con una classe
let s = document.getElementsByClassName("sottotitolo")
console.dir(s)
//è considerabile come un array per accedere all'elemento
console.dir(s[0]) //accedo all'indice 0

s[0].innerText = "Testo modificato tramite JS"
s[0].style.color = "#000000"
s[0].style.textAlign = "center"

//per selezionare un nodo della pagina tramite un tag
let p = document.getElementsByTagName("p");
console.log(p)

p[0].innerText = "Testo modificato tramite JS"
p[0].style.color = "blue"
p[0].style.textAlign = "center"

p[1].innerText = "Testo modificato tramite JS"
p[1].style.color = "green"
p[1].style.textAlign = "center" 

//Da ES6 sono stati introdotti nuovi selettori avanzati
// querySelector e il querySelectorAll
let parag = document.querySelector("div > p") //nel caso di id #blabla oppure per la classe .blabla
parag.style.fontWeight = "bold"

let allParag = document.querySelectorAll("div p")
allParag.style.fontStyle = "italic" 
console.log(allParag)

//Creare nuovi nodi html tramite JS
//createElement

let main = document.querySelector("main") //selezione un nodo esistente nella pagina html
let box = document.createElement("section") //creo un nuovo contenitore section tramite javascript
let ps = document.createElement("p") //creo un nuovo paragrafo p tramite javascript
ps.innerText = "ciao sono il paragrafo creato tramite javascript"; // scrivo dentro il nuovo paragrafo
ps.className = "brown"

let a = document.createElement("a")
a.innerText = "google"
a.href = "http://www.google.com"
a.target = "_blank"

box.appendChild(ps) //appendo il nuovo paragrafo dentro il nuovo contenitore section
box.appendChild(a)  //appendo il nuovo link dentro il nuovo contenitore section
main.appendChild(box) //appendo la section con il paragrafo al nodo main esistente
//appende sempre sotto l'elemento scelto
//questo serve per formare una pagina html DINAMICA

//DOM Traversing
let nodH2 = document.querySelector("section h2.sottotitolo")
let section = nodH2.parentNode
section.style.border = "1px solid black"
section.removeChild(nodH2)
let div4 = section.children[4];
div4.style.backgroundColor = "yellow"
console.dir(section)


//Intro Events
function btnClick () {
    alert("click")
}
