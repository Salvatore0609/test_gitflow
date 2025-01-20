// gli oggetti in JS sono semplici da realizzare --> {} (notazione letterale)
// a patto che sia un singolo oggetto o finché siano pochi...
// il problema nasce quando abbiamo necessità di crearne molti in serie,
// magari tutti anonimi e indipendenti tra loro, ma con le stesse coppie chiave/valore da rispettare

const methodFunc = function () {
  // mentre una variabile qualsiasi sarebbe statica nel suo valore nel tempo, ci possiamo avvalere di una keyword dinamica che
  // conterrà sempre il giusto riferimento dell'oggetto di appartenenza se la funzione è stata creata con keyword function

  // la variabile person potrebbe cambiare nel tempo, potrebbe non essere disponibile sempre ecc..
  // potremmo volerci riferire ad un'altra variabile di un oggetto simile che sia nato dalla clonazione di questo (quindi avrebbe un nome diverso)
  // con il THIS risolviamo questi problemi, perché acquisirà come valore il riferimento all'oggetto di appartenenza in automatico.
  console.log("THIS", this);
  // con il this troviamo il riferimento dinamico all'oggetto di apparteneza nel quale il metodo è stato inserito

  console.log("ciao mi chiamo " + this.name + " " + this.surname);
  // questo this grazie alla arrow function riceve il suo valore dal contesto lessicale in cui è scritto (da un livello più esterno)
};

const person = {
  name: "Gianni",
  surname: "Morandi",
  sayMyName: methodFunc
};

person.sayMyName();

const person2 = {
  name: "Gianni",
  surname: "Boncompagni",
  sayMyName: methodFunc
};

person2.sayMyName();

// esempio di utilizzo concreto di THIS esterni e interni
const person3 = {
  name: "Giovanni",
  surname: "Storti",
  skills: ["comedian", "influencer", "screen play writer"],
  sayMyName: function () {
    console.log("THIS", this);

    // una funzione interna creata come arrow function riprende lo stesso valore del primo this,
    // agevolandoci quindi nel riferirci a proprietà/valori dell'oggetto di partenza anche da funzioni più annidate nella prima

    // const getName = () => {
    //   console.log("INNER THIS", this);
    // };
    // getName();

    // in questo caso siamo obbligati ad usare una funzione, per via del forEach, e se quindi volessimo usare i valori dell'oggetto dal contesto interno del
    // forEach possiamo farlo grazie al fatto che l'arrow function ha mantenuto lo stesso valore del this che avevamo esternamente.
    this.skills.forEach(skill => {
      console.log("my name is " + this.name + " " + this.surname + " i'm a " + skill);
    });

    // setTimeout(() => {
    //   // grazie alla arrow function siamo riusciti a mantenere il valore del this associato al nostro oggetto, con una funzione normale si sarebbe perso.
    //   console.log("timeout THIS", this);
    // }, 1000);
  }
};

person3.sayMyName();

// passiamo ora all'esigenza di creare oggetti in serie:

// 1) Funzione costruttrice (CONSTRUCTOR FUNCTION)
// queste funzioni sono fabbriche di oggetti.
// vanno definite in PascalCase per dichiararne la loro natura e utilizzo particolare
// è importante rispettare questa convenzione

// ogni oggetto derivante da questo costruttore avrà le medesime caratteristiche, manterrà quindi coerenza tra un'istanza e l'altra.
const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
};

// utilizzare (INSTANCE - istanziare) un costruttore lo si fa tramite la parola chiave: new

const giovanniGiorgio = new Person();
giovanniGiorgio.name = "Giovanni";
giovanniGiorgio.surname = "Giorgio";
giovanniGiorgio.address = "Via delle fiere 23";
giovanniGiorgio.email = "info@giovannigiorgio.it";
console.log(giovanniGiorgio);

// tramite l'utilizzo di parametri potremo andare a fornire direttamente i valori necessari alla creazione dell'istanza in maniera completa
const DynamicPerson = function (_name, _surname, _address, _email) {
  this.name = _name;
  this.surname = _surname;
  this.address = _address;
  this.email = _email;
  // esempio di metodo già associato all'istanza, che si adatterà a qualsiasi oggetto grazie al valore dinamico contenuto nel this
  this.sayMyName = function () {
    console.log("my name is " + this.name + " " + this.surname + " but everybody calls me " + this.surname);
  };
};

const giovanniGiorgio2 = new DynamicPerson("Giovanni", "Giorgio", "Via delle fiere 23", "info@giovannigiorgio.it");
console.log(giovanniGiorgio2);

giovanniGiorgio2.sayMyName();

const superMario = new DynamicPerson("Mario", "Super", "Yoshi island", "super@mario.com");
superMario.sayMyName();
