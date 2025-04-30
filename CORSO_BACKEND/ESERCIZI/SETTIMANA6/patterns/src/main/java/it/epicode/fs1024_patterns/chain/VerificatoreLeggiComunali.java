package it.epicode.fs1024_patterns.chain;

// Controllore che verifica se un importo può essere pagato in un'unica soluzione o deve essere rateizzato
public class VerificatoreLeggiComunali extends Controllore {
    // verifica se esiste la possibilità di pagare una fattura di un certo importo
    // perchè il sindaco può decidere a sua discrezione se fatture per esempio di 2 milioni possano essere pagate
    // subito oppure rateizzate

    // Costruttore per inizializzare il controllore con il nome e il successivo controllore
    public VerificatoreLeggiComunali(String nomeControllore, Controllore successivo) {
        super(nomeControllore, successivo);
    }

    // Controlla l'importo e decide se deve essere rateizzato o meno
    @Override
    public void controlla(double importo) {
        if(importo>400000) {
            System.out.println("Il comune non può pagare una fattura di " + importo + " in un'unica soluzione bisogna rateizzare");
        } else {
            super.controlla(importo);
        }

    }
}
