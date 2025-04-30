package it.epicode.fs1024_patterns.chain;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(2)
public class ChainRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Chain Pattern Example");

        VerificatoreLeggiComunali controlloreLeggi = new VerificatoreLeggiComunali("Controllore leggi comunali", null);
        ControlloreDisponibilita controllore = new ControlloreDisponibilita("Controllore disponibilità", controlloreLeggi);

        controllore.controlla(300000);

    }
}
