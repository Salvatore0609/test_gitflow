// Fetch dei libri dall'API
fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(books => {
        const bookList = document.getElementById('book-list');
        const cart = document.getElementById('cart');

        // Funzione per aggiornare il carrello nel localStorage
        const updateCartInStorage = () => {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        };

        // Recupera il carrello dal localStorage, se esiste
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Mostra i libri nel carrello all'avvio
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            cartItem.innerHTML = `
                ${item.title} - €${item.price}
                <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.asin}')">Rimuovi</button>
            `;
            cart.appendChild(cartItem);
        });

        // Funzione per rimuovere un libro dal carrello
        window.removeFromCart = (asin) => {
            cartItems = cartItems.filter(item => item.asin !== asin);
            updateCartInStorage();
            renderCart();
        };

        // Funzione per aggiornare la visualizzazione del carrello
        const renderCart = () => {
            cart.innerHTML = '';
            cartItems.forEach(item => {
                const cartItem = document.createElement('li');
                cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                cartItem.innerHTML = `
                    ${item.title} - €${item.price}
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.asin}')">Rimuovi</button>
                `;
                cart.appendChild(cartItem);
            });
        };

        // Funzione per aggiungere un libro al carrello
        const addToCart = (book) => {
            if (!cartItems.some(item => item.asin === book.asin)) {
                cartItems.push(book);
                updateCartInStorage();
                renderCart();
            }
        };

        // Creazione delle card per ogni libro
        books.forEach(book => {
            const col = document.createElement('div');
            col.className = 'col-md-3 mb-4';
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">€${book.price}</p>
                        <button class="btn btn-danger btn-sm" onclick="this.closest('.col-md-3').remove()">Scarta</button>
                        <button class="btn btn-success btn-sm" onclick="addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')})">Compra ora</button>
                    </div>
                </div>
            `;
            bookList.appendChild(col);
        });
    })
    .catch(error => console.error('Errore nel caricamento dei libri:', error));