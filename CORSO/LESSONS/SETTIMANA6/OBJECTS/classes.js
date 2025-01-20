// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

// let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

class Person {
  constructor(_name, _surname, _age, _email) {
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this.email = _email;
  }

  // i metodi si creano nel contesto principale della classe, ma fuori dal costruttore,
  // senza parole chiave ma con la sintassi che ricorda quella di una funzione
  showName() {
    return "Ciao a tutti, il mio nome è " + this.name + " " + this.surname;
  }
}

const valentinoRossi = new Person("Valentino", "Rossi", 45, "valentino@valentinorossi.it");
console.log(valentinoRossi);

console.log(valentinoRossi.showName());

// EREDITARIETA' nelle classi
class Developer extends Person {
  constructor(_name, _surname, _age, _email, _specialty, _languages = []) {
    // devo far arrivare le proprietà name, surname, age, email, skills alla classe Person
    // Person è definita la SUPERCLASSE di Developer
    super(_name, _surname, _age, _email); // chiama il costruttore di Person

    // qui sotto invece gestiamo le nuove proprietà
    this.specialty = _specialty;
    this.languages = _languages;
  }

  static extractFullName(instance) {
    // questo metodo sarà agganciato solo alla classe Developer, non potrò quindi aspettarmi di trovarlo sulle istanze
    // non avendo una relazione diretta con l'istanza (come ad esempio il metodo sottostante) dovrò passargli io il riferimento di un'eventuale istanza da valutare
    // perché partivamo dalla classe principale e non c'era ancora nessun riferimento intrinseco a qualsivoglia istanza
    return instance.name + " " + instance.surname;
  }

  showFullDescription() {
    // posso trattare il metodo come una qualunque altra funzione, quindi poter fare diverse operazioni prima di ritornare un valore
    // this.languages.forEach(lang => console.log(lang));

    // super mi permette di chiamare metodi della superclasse (o istanza principale in questo caso)
    // andando a comporre un messaggio più specifico sulla base di quello precedente
    return super.showName() + " e sono forte in " + this.specialty;
  }
}

const teacher = new Developer("Stefano", "Miceli", 35, "stefano@miceli.it", "React", ["HTML", "CSS", "JS", "React"]);
console.log(teacher);

// l'utilizzo di un metodo normale, lo ricerchiamo sull'ISTANZA
console.log(teacher.showFullDescription());

// il metodo statico invece va ricercato SEMPRE sulla CLASSE, non lo troveremmo MAI sull'istanza
console.log(Developer.extractFullName(teacher));
