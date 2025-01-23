const cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  })
  .then(booksArr => {
    console.log(booksArr);

    const row = document.getElementById("book-grid");

    booksArr.forEach(book => {
      const col = document.createElement("div");
      col.classList.add("col");

      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.alt = book.title;
      img.src = book.img;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.innerText = book.title;

      const p = document.createElement("p");
      p.classList.add("card-text");
      p.innerText = book.price + "€";

      const button = document.createElement("button");
      button.classList.add("btn", "btn-primary", "me-2");
      button.innerText = "Scarta";

      button.onclick = function (event) {
        console.log(event.target);

        // col.remove();
        event.target.closest(".col").remove();
      };

      const addToCartBtn = document.createElement("button");
      addToCartBtn.classList.add("btn", "btn-success");
      addToCartBtn.innerText = "Aggiungi al carrello";

      addToCartBtn.onclick = function (event) {
        // event.target;
        console.log(book);

        // gestisco il dato (oggetto libro) nell'array
        cart.push(book);
        // uso l'array per creare o modificare la voce esistente "cart" nel localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // a questo punto gestiamo la visualizzazione dell'elemento nella UI per dare un feedback visivo all'utente
        addBookToCart(book);
      };

      //   col.innerHTML = `
      //                <div class="col">
      //                 <div class="card">
      //                     <img src=${book.img} class="card-img-top" alt=${book.title}>
      //                     <div class="card-body">
      //                         <h5 class="card-title">${book.title}</h5>
      //                         <p class="card-text">${book.price}</p>
      //                         <button class="btn btn-primary" onclick="">Scarta</button>
      //                     </div>
      //                 </div>
      //                </div>
      //     `;

      //   const cardBody = col.querySelector(".card-body");

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(button);
      cardBody.appendChild(addToCartBtn);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });
  });

function addBookToCart(book) {
  const ul = document.querySelector("#cart-container ul");
  const li = document.createElement("li");
  li.classList.add("list-group-item", "px-0", "d-flex", "align-items-center");

  const bookImg = document.createElement("img");
  bookImg.classList.add("me-3");
  bookImg.src = book.img;
  bookImg.alt = book.title;
  bookImg.style.width = "50px";

  const span = document.createElement("span");
  span.classList.add("me-auto");
  span.innerText = book.title + " — " + book.price + "€";

  const delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-danger");
  delBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

  delBtn.onclick = function (event) {
    console.log(book.asin);

    // 1) elemento rimosso visivamente dal carrello del DOM
    event.target.closest("li").remove();

    // sto cercando di trovare la posizione di uno stesso elemento come quello cliccato nell'array cart(che abbia lo stesso codice asin)
    const indexFound = cart.findIndex(bookInCart => bookInCart.asin === book.asin);
    cart.splice(indexFound, 1);
    // 2) elemento rimosso come dato dall'array

    // a questo punto l'array cart ha perso un elemento. E' il caso di aggiornare il carrello nello storage per farlo corrispondere al nostro
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(indexFound);
  };

  li.appendChild(bookImg);
  li.appendChild(span);
  li.appendChild(delBtn);

  ul.appendChild(li);
}

// al caricamento della pagina guarda all'array cart, se ci sono elementi, riutilizza la funzione addBookToCart per ricostruire il carrello di tutti gli elementi, se presenti

window.addEventListener("DOMContentLoaded", function () {
  cart.forEach(book => addBookToCart(book));
});
