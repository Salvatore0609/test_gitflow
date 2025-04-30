package it.epicode.fs1024_patterns.chain;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

// Classe principale per eseguire il programma e dimostrare il funzionamento della catena di controllori
@Component
@Order(2)
public class ChainRunner implements CommandLineRunner {
    // Punto di ingresso per l'esecuzione del programma
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Chain Pattern Example");

        // Creazione della catena di controllori
        VerificatoreLeggiComunali controlloreLeggi = new VerificatoreLeggiComunali("Controllore leggi comunali", null);
        ControlloreDisponibilita controllore = new ControlloreDisponibilita("Controllore disponibilità", controlloreLeggi);

        // Inizio del processo di controllo
        controllore.controlla(300000);

    }
}
