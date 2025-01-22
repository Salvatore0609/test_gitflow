const myPromise = () =>
  new Promise((resolve, reject) => {
    const randTime = Math.floor(Math.random() * 5000);

    setTimeout(() => {
      if (randTime < 2500) {
        resolve("YAY!");
      } else {
        reject("OH NOES...");
      }
    }, randTime);
  });

// mai leggere una promise in maniera sincrona
// console.log(myPromise());

// dovremo collegarci, tramite i due metodi preconfigurati (then, catch) alle due eventualità: outcome positivo (status resolved), e outcome negativo (status rejected)

myPromise()
  .then(successMessage => console.log(successMessage))
  .catch(rejectMessage => alert(rejectMessage));
