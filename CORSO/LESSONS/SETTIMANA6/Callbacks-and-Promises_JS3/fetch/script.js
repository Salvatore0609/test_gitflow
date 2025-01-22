// fetch("https://api.disneyapi.dev/character", { method: "GET" });

// chiamare fetch corrisponde già ad aver effettuato una HTTP REQUEST! all'indirizzo specificato.

// non possiamo aspettarci il dato in maniera sincrona
// console.log(fetch("https://api.disneyapi.dev/character"));

// dovremo implementare il metodo then e catch
fetch("https://api.disneyapi.dev/character")
  .then(responseObj => {
    console.log(responseObj);
    // a questo punto otteniamo dalla fetch l'oggetto di risposta come primo risultato
    // possiamo valutarne l'esito andando a leggere la proprietà ok dell'oggetto
    // essendo connessa allo status per valori compresi tra 100 e 399 avremo ok === true
    // da 400 a 599 avremo ok === false
    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then(disneyObj => {
    // qui dentro avremo l'assoluta certezza di avere il dato ottenuto dal server, nell'esatto momento in cui ci viene reso disponibile

    // possiamo gestire a questo punto il dato come vogliamo, come abbiamo sempre fatto:

    console.log(disneyObj);

    console.log(disneyObj.data);

    // DOM Manipulation ecc...

    const row = document.getElementById("char-list");

    disneyObj.data.forEach(disneyChar => {
      //   console.log(disneyChar.name);

      const col = document.createElement("div");
      col.classList.add("col");

      col.innerHTML = ` <div class="card">
                            <img src=${disneyChar.imageUrl}
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${disneyChar.name}</h5>
                                <p class="card-text">${disneyChar.createdAt}</p>
                            </div>
                        </div>`;

      row.appendChild(col);
    });
  })
  .catch(err => console.log(err));
