package it.epicode.fs1024_patterns.correzione.chain;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ChainEsercizioRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        Generale generale = new Generale();
        generale.setNome("Luigi");
        generale.setCognome("Verdi");

        Colonnello colonnello = new Colonnello();
        colonnello.setNome("Giovanni");
        colonnello.setCognome("Neri");
        colonnello.setResponsabile(generale);

        Maggiore maggiore = new Maggiore();
        maggiore.setNome("Francesco");
        maggiore.setCognome("Bianchi");
        maggiore.setResponsabile(colonnello);

        Capitano capitano = new Capitano();
        capitano.setNome("Antonio");
        capitano.setCognome("Gialli");
        capitano.setResponsabile(maggiore);

        Tenente tenente = new Tenente();
        tenente.setNome("Mario");
        tenente.setCognome("Rossi");
        tenente.setResponsabile(capitano);


        System.out.println("Controllo stipendio");
        tenente.controllaStipendio(1000.0);



    }
}
