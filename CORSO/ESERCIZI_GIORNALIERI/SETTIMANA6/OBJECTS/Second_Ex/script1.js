class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

// Metodo per verificare se due animali condividono lo stesso padrone
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

// Array per memorizzare gli animali
const pets = [];

// Funzione per aggiungere un animale
function addPet(event) {
// Evito il ricaricamento della pagina
  event.preventDefault();
// Recupera i valori dal form
  const petName = document.querySelector("#petName").value;
  const ownerName = document.querySelector("#ownerName").value;
  const species = document.querySelector("#species").value;
  const breed = document.querySelector("#breed").value;
// Creo un nuovo oggetto Pet
  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet); // Aggiungi l'animale all'array
  
// Aggiorno la lista degli animali
  displayPets();

// Resetto il form
  document.querySelector("#petForm").reset();
}

// Funzione per verificare se un animale condivide il proprietario con altri
function checkSharedOwner(pet) {
  let sharedOwner = false;
  pets.forEach((otherPet) => {
    if (otherPet !== pet && pet.hasSameOwner(otherPet)) {
      sharedOwner = true;
    }
  });
  return sharedOwner;
}

// Funzione per visualizzare gli animali
function displayPets() {
    const petList = document.querySelector("#petList");
// Svuoto la lista
    petList.innerHTML = "";

// Aggiungo ogni animale alla lista
    pets.forEach(function (pet, index) {
        const li = document.createElement("li");
        li.innerHTML =
        "<strong>Animale " +
        (index + 1) +
        ":</strong><br>" +
        "Nome: " +
        pet.petName +
        "<br>" +
        "Proprietario: " +
        pet.ownerName +
        "<br>" +
        "Specie: " +
        pet.species +
        "<br>" +
        "Razza: " +
        pet.breed +
        "<br>" +
        "<span class='shared-owner'/>Condivide il proprietario con altri animali: " +
        checkSharedOwner(pet);
        petList.appendChild(li);
    });
}

// Aggiungo l'event listener al form
document.querySelector("#petForm").addEventListener("submit", addPet);
