// Funzione per avviare o riprendere il contatore
function startCounter() {
    let startTime;

    // Verifica se c'è già un tempo iniziale memorizzato nel sessionStorage
    if (sessionStorage.getItem("startTime")) {
        startTime = parseInt(sessionStorage.getItem("startTime")); // Recupera il tempo iniziale
    } else {
        startTime = Date.now(); // Imposta il tempo iniziale al momento corrente
        sessionStorage.setItem("startTime", startTime); // Salva il tempo iniziale nel sessionStorage
    }

    // Funzione per aggiornare il contatore ogni secondo
    function updateCounter() {
        const currentTime = Date.now(); // Tempo corrente
        const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Tempo trascorso in secondi

        // Aggiorna il valore del contatore nella pagina
        document.getElementById("counter").textContent = elapsedTime;
    }

    // Aggiorna il contatore ogni secondo
    setInterval(updateCounter, 1000);

    // Aggiorna il contatore immediatamente al caricamento della pagina
    updateCounter();
}

// Avvia il contatore quando la pagina viene caricata
window.onload = startCounter;