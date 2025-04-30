package it.epicode.fs1024_patterns.chain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Controllore {
    private String nomeControllore;
    private Controllore successivo;

    public void controlla(double importo) {
        if (successivo != null) {
            successivo.controlla(importo);
        } else {
            System.out.println(" la fattura può essere pagata");
        }
    }

}
