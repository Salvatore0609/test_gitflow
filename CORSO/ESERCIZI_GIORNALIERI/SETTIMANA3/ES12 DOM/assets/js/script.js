function createCells(num) {
    let tabellone = document.querySelector("#tabellone");

    for (let i = 1; i <= num; i++) {
        let cellNode = document.createElement("div");
        cellNode.classList = "numero";

        let numero = document.createElement("h3");
        numero.innerText = i;

        cellNode.appendChild(numero);
        tabellone.appendChild(cellNode);
    }
}

/* ---------------------------------------------------------------- */

function estrazioneRandom(num, arrNumRandom) {
    let numeri = document.querySelectorAll("#tabellone .numero");
    let numRandom = Math.floor(Math.random() * num) + 1; // Genera un numero casuale
    console.log(numRandom);

    // Controlla se tutti i numeri sono stati estratti
    if (arrNumRandom.length === num) {
        alert("Estrazione completata");
        return; // Esci dalla funzione se tutti i numeri sono stati estratti
    }

    // Se il numero è già stato estratto, ripeti l'estrazione
    if (!arrNumRandom.includes(numRandom)) {
        arrNumRandom.push(numRandom);
        let cells = document.querySelectorAll("#tabellone .numero"); 
        cells[numRandom - 1].classList.add("estratto");
    } else {
        estrazioneRandom(num, arrNumRandom);
    }
}

/* ---------------------------------------------------------------- */

const numeriTombola = 76;
const arrNumRandom = [];
console.log(arrNumRandom)

createCells(numeriTombola);

/* ---------------------------------------------------------------- */

function clickButton() {
    let button = document.querySelector("form div button");
    button.addEventListener("click", (e) => {
        e.preventDefault();

        estrazioneRandom(numeriTombola, arrNumRandom);
        
    });
}
clickButton();

/* ---------------------------- */

function createCells2 (num) {
    let tabellone = document.querySelector("#tabellina")

    for(let i=1; i<=num; i++){

        let cellNode = document.createElement("div")
        cellNode.classList = "numero"


        let numero = document.createElement("h3")
        numero.innerText = Math.floor(Math.random() * 76) + 1;


        cellNode.appendChild(numero)
        tabellina.appendChild(cellNode)
    }
}
createCells2 (24) 

