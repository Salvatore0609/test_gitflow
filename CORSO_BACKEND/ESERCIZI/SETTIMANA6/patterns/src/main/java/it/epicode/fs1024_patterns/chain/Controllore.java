package it.epicode.fs1024_patterns.chain;

import lombok.AllArgsConstructor;
import lombok.Data;

// Classe base per i controllori specifici che gestiscono le richieste
@Data
@AllArgsConstructor
public class Controllore {
    private String nomeControllore;
    private Controllore successivo;

    // Metodo per controllare se una fattura può essere pagata, delegando al successivo controllore
    public void controlla(double importo) {
        if (successivo != null) {
            successivo.controlla(importo);
        } else {
            System.out.println(" la fattura può essere pagata");
        }
    }

}
