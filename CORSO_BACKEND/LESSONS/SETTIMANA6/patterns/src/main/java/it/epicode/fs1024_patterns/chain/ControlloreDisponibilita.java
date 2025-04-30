package it.epicode.fs1024_patterns.chain;

import lombok.AllArgsConstructor;
import lombok.Data;

public class ControlloreDisponibilita extends Controllore{

    // controlla che il comune abbia abbastanza soldi per pagare un lavoro commissionato

    public ControlloreDisponibilita(String nomeControllore, Controllore successivo) {
        super(nomeControllore, successivo);
    }

    @Override
    public void controlla(double importo) {
        if(importo < 1000000) {
            super.controlla(importo);
        } else {
            System.out.println("Il comune non ha abbastanza soldi per pagare un lavoro di " + importo);
        }

    }
}
