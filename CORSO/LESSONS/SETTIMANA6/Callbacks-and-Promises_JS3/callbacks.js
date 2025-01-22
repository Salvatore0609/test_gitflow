const getNameAndGreet = function (name) {
  return "Ciao " + name;
};

const getNameAndGreet2 = function (name) {
  return "Bella raga, mi chiamo " + name;
};

const applySymbol = function (name, customFunc) {
  console.log(customFunc(name) + "!"); // getNameAndGreet(name), getNameAndGreet2(name), ((name) => "Bella zio, " + name)(name)
};

applySymbol("Stefano", getNameAndGreet);
applySymbol("Evan", getNameAndGreet2);
applySymbol("Evan", name => "Bella zio, " + name);

// div.addEventListener("click", getNameAndGreet)

const createAlert = customFunc => {
  // creazione dell'alert nel DOM
  // const customAlert = document.createElement("div")
  // .... continuo a creare il mio elemento alert
  // utilizzo dell'alert
  //   customAlert.innerText = customFunc(); // stringa ritornata usata dentro il nostro alert
};

createAlert(() => "Risorsa non trovata");
createAlert(() => "Utente loggato con successo");

const arrOfAnimals = ["cat", "dog", "bunny", "bird", "horse"];

let animalsConcatenated = "";

// arrOfAnimals.forEach(animal => (animalsConcatenated += animal));
// console.log(animalsConcatenated);

const forEach = function (callback) {
  for (let i = 0; i < arrOfAnimals.length; i++) {
    const element = arrOfAnimals[i];

    callback(element);
  }
};

const myCustomFunc = animal => (animalsConcatenated += animal);

forEach(myCustomFunc);
forEach(animal => console.log(animal));
// forEach(animal => alert(animal));

const row = document.querySelector(".row");
forEach(animal => {
  const li = document.createElement("li");
  li.innerText = animal;

  //   row.appendChild(li);
});

// const answer = () => console.log("📞 Pronto chi è?");
const grannysAnswer = () => console.log("📞 Pronto caro, sei tu?? Hai mangiato??");
const angryAnswer = () => console.log("📞 Ma chi diavolo è a quest'ora?!?");

const phoneCall = callback => {
  const randTime = Math.floor(Math.random() * 3000);

  // setTimeout è un primo esempio di codice "asincrono"
  setTimeout(() => {
    callback();
  }, randTime);

  //   codice sincrono all'interno della funzione phoneCall
  console.log("☎️il telefono sta squillando");
};

phoneCall(() => console.log("📞 Pronto chi è?"));
phoneCall(grannysAnswer);
phoneCall(angryAnswer);
