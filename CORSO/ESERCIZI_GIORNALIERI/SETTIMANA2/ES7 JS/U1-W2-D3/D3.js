const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/
const charactersNames = [];


/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  charactersNames.push(starWarsCharacters[i].name);
}
console.log(charactersNames)

//soluzione professore
/* 
for (let i = 0; i < starWarsCharacters.length; i++) {
  let obj = starWarsCharacters[i];
  charactersNames.push(obj.name)
}

for (const key in starWarsCharacters) {
  let obj = starWarsCharacters[key];
  charactersNames.push(obj.name)
}

for (const element of starWarsCharacters) {
  let obj = element
  charactersNames.push(obj.name)
} 
console.log(characterNames)
*/


/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
const femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}
console.log(femaleCharacters)

//soluzione professore
/* 
for (const key in starWarsCharacters) {
  let obj = starWarsCharacters[key];
  
  //gender: "female"
  if(obj.gender === "female") {
    femaleCharacters.push(obj)
  }
}
console.log(femaleCharacters)
*/


/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
const eyeColor = {
  blue:         [],
  yellow:       [],
  brown:        [],
  red:          [],
  "blue-gray":  [], // qui nella chiave posso mettere uno stringa per dirgli che tutto è una chiave
}
console.log(eyeColor);


/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
//apro un for per iterare e con lo switch inserisco gli elementi con la proprietà richiesta nel array coloreOcchi richiesto.
for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case "blue": eyeColor.blue.push(starWarsCharacters[i]);
    break;
    case "yellow":
    eyeColor.yellow.push(starWarsCharacters[i]);
    break;
    case "brown":
    eyeColor.brown.push(starWarsCharacters[i]);
    break;
    case "red":
    eyeColor.red.push(starWarsCharacters[i]);
    break;
    case "blue-gray":
    eyeColor["blue-gray"].push(starWarsCharacters[i]);
    break;
    default:
    break;
  }
}
console.log(eyeColor);

//soluzione professore
/* 
for (const element of starWarsCharacters) {
  let obj = element
  switch (obj.eye_color) {
    case "blue": eyeColor.blue.push(obj); break;
    case "yellow": eyeColor.yellow.push(obj); break; 
    case "brown": eyeColor.brown.push(obj); break;
    case "red": eyeColor.red.push(obj); break; 
    case "blue-gray": eyeColor["blue-gray"].push(obj); break; 
    default:
      break;
  }
}
console.log(eyeColor)
*/
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
let crewMass = 0;
let i = 0 //partenza della massa totale
//apro un while per iterare
while (i < starWarsCharacters.length) {
  crewMass += starWarsCharacters[i].mass;
  i++;
}
console.log(crewMass);

//soluzione professore
/* 
while (i < starWarsCharacters.length) {
  let obj = starWarsCharacters[i];
  //massa
  crewMass += obj.mass;
  i++;
} 
console.log(crewMass);

*/


/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
if (crewMass < 500) {
  console.log("Ship is under loaded");
} else if (crewMass > 500 && crewMass < 700) {
  console.log("Ship is half loaded"); 
} else if (crewMass > 700 && crewMass < 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass < 1000) {
  console.log("Critical Load: Over 900");
} else { //massa superio a mille
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}
//vecchia massa del indice(gruppo) 5 dell'array starWarsCharacters
starWarsCharacters[5].mass;
console.log(starWarsCharacters[5].mass);
//nuova massa del indice(gruppo) 5 dell'array starWarsCharacters
starWarsCharacters[5].mass = 80;
console.log(starWarsCharacters[5].mass);
//vecchia massa del indice(gruppo) 3 dell'array starWarsCharacters
starWarsCharacters[3].mass;
console.log(starWarsCharacters[3].mass);
//nuova massa del indice(gruppo) 3 dell'array starWarsCharacters
starWarsCharacters[3].mass = 80;
console.log(starWarsCharacters[3].mass); 
//
crewMass = 0;
i = 0 //partenza della massa totale
//apro un while per iterare
while (i < starWarsCharacters.length) {
  crewMass += starWarsCharacters[i].mass;
  i++;
}  
//
if (crewMass < 500) {
  console.log("Ship is under loaded");
} else if (crewMass > 500 && crewMass < 700) {
  console.log("Ship is half loaded"); 
} else if (crewMass > 700 && crewMass < 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass < 1000) {
  console.log("Critical Load: Over 900");
} else { //massa superiore a mille
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}
//infatti in console ora il messaggio è cambiato

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }
}
console.log(starWarsCharacters);

//soluzione professore
/*  
for (let i = 0; i < starWarsCharacters.length; i++) {
  let obj = starWarsCharacters[1];

  if (obj.gender === "n/a") {
    obj.gender = "robot";
  }
}
console.log(starWarsCharacters);
*/

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/
console.log("BEFORE", charactersNames.length);

for (let i = 0; i < charactersNames.length; i++) {
  const obj = charactersNames[i]

  for (let j = 0; j < femaleCharacters.length; j++) {
    const obj1 = femaleCharacters[j]

    if (obj1.name === obj) {
      console.log("FEMALE", obj)
      charactersNames.splice(i, 1) //i perchè deve controllare tutti gli indici | 1 perchè deve cancellare solo un elemento
    }
  }
}
//ricordare che .splice() serve per togliere un elemento
console.log("AFTER", charactersNames.length);

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
//Il metodo statico Math.floor() 
//arrotonda sempre per difetto e restituisce il numero intero più grande inferiore o uguale a un determinato numero.
//Il metodo statico Math.random() 
/* restituisce un numero pseudo-casuale a virgola mobile maggiore o uguale a 0 e inferiore a 1, 
con una distribuzione approssimativamente uniforme su tale intervallo, 
che puoi quindi ridimensionare fino all'intervallo desiderato. 
L'implementazione seleziona il seme iniziale per l'algoritmo di generazione di numeri casuali; 
non può essere scelto o reimpostato dall'utente. */
const randomIndex = Math.floor(Math.random() * starWarsCharacters.length) 
const selectedCharacter = starWarsCharacters[randomIndex]

console.log('The found character name is:', selectedCharacter.name)

if (selectedCharacter.gender === 'female') {
  console.log('She is', selectedCharacter.height, 'cm tall')
} else {
  console.log('He is', selectedCharacter.height, 'cm tall')
}

if (selectedCharacter.hair_color !== 'n/a' && selectedCharacter.hair_color !== 'none') {
  console.log('and has', selectedCharacter.hair_color, 'hair,')
} else {
  console.log('and bald,')
}

console.log('with', selectedCharacter.skin_color, 'skin.')
