package it.epicode.fs1024_patterns.correzione.adapter;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class AdapterEsercizioRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {

        System.out.println("-------- Adapter Esercizio");
        Info info = new Info("Mario", "Rossi", LocalDate.of(1990, 1, 1));

        InfoAdapter infoAdapter = new InfoAdapter(info);

        StampaUtente.print(infoAdapter);

    }
}
