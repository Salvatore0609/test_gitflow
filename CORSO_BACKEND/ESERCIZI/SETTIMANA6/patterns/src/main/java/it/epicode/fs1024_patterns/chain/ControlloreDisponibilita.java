package it.epicode.fs1024_patterns.chain;

import lombok.AllArgsConstructor;
import lombok.Data;

// Controllore che verifica se il comune ha abbastanza fondi per pagare un lavoro
public class ControlloreDisponibilita extends Controllore{

    // Costruttore per inizializzare il controllore con il nome e il successivo controllore
    public ControlloreDisponibilita(String nomeControllore, Controllore successivo) {
        super(nomeControllore, successivo);
    }

    // Controlla l'importo e decide se delegare o meno al successivo controllore
    @Override
    public void controlla(double importo) {
        if(importo < 1000000) {
            super.controlla(importo);
        } else {
            System.out.println("Il comune non ha abbastanza soldi per pagare un lavoro di " + importo);
        }

    }
}
