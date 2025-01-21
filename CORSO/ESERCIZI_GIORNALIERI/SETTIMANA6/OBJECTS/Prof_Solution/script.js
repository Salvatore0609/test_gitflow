// 1) prelevo gli elementi come nodi dal DOM
const form = document.getElementById("formShop"); // abbiamo il nodo del form (oggetto js)
const resetBtn = document.querySelector(".form-reset");
const petsList = document.getElementById("pets-list");

// 2) creo il modello per la creazione di un oggetto (classe)

class Pet {
  constructor(name, owner, species, breed) {
    this.petName = name;
    this.ownerName = owner;
    this.species = species;
    this.breed = breed;
  }

  static compareTwoAnimals(animal1, animal2) {
    if (animal1.ownerName === animal2.ownerName) {
      return true;
    } else {
      return false;
    }
  }

  checkSameOwner(animalToCompare) {
    if (this.ownerName === animalToCompare.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

// 3) applicazione di evento su nodo del DOM
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   console.log(event);
// });

// 5) creo un array che mi servirà come memoria di più lungo termine
const pets = [];

// 3) applicazione (metodo2) di evento su nodo del DOM
form.onsubmit = function (event) {
  event.preventDefault();

  console.log(event);

  const { name, ownerName, species, breed } = event.target.elements;
  // 4) istanziazione di classe ==> creazione di oggetto, con i dati raccolti dal form
  const animal = new Pet(name.value, ownerName.value, species.value, breed.value);
  console.log(animal);

  // inserisco l'animale appena generato nell'array per farlo continuare a vivere...
  pets.push(animal);

  // la funzione dovrà essere chiamata necessariamente DOPO il push, altrimenti ci perderemmo il primo elemento, e saremmo sempre indietro di 1
  generateNewLi();

  // form.reset(); // resetto il form per far spazio ad altri dati

  //   resetto singolarmente i campi che voglio svuotare, lasciando intatto ownerName in questo caso
  name.value = "";
  species.value = "";
  breed.value = "";
};

// 6) applico al bottone reset la logica che vorrei si eseguisse al click
resetBtn.onclick = function () {
  const hasConfirmed = confirm("sei sicuro di voler resettare il form?");

  if (hasConfirmed) {
    form.reset(); // questo metodo pulisce il form dai dai inseriti
    console.log("FORM RESET");
  } else {
    console.log("FORM NOT RESET");
  }
};

// 7) creo funzione che gestisca la creazione di un elemento

const generateNewLi = function () {
  petsList.innerHTML = ""; // svuotiamo la lista PRIMA di cominciare a ciclare l'array pets generando i vari newLI

  pets.forEach(pet => {
    const newLi = document.createElement("li");
    newLi.innerText = `nome: ${pet.petName}, proprietario: ${pet.ownerName}, è un ${pet.species} ${pet.breed}`;

    // arrivati a questo punto staremo generando nuovi elementi in una lista inizialmente vuota
    petsList.appendChild(newLi);
  });
};
