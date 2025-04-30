package it.epicode.fs1024_patterns.chain;

public class VerificatoreLeggiComunali extends Controllore {
    // verifica se esiste la possibilità di pagare una fattura di un certo importo
    // perchè il sindaco può decidere a sua discrezione se fatture per esempio di 2 milioni possano essere pagate
    // subito oppure rateizzate


    @Override
    public void controlla(double importo) {
        if(importo>400000) {
            System.out.println("Il comune non può pagare una fattura di " + importo + " in un'unica soluzione bisogna rateizzare");
        } else {
            super.controlla(importo);
        }

    }

    public VerificatoreLeggiComunali(String nomeControllore, Controllore successivo) {
        super(nomeControllore, successivo);


    }




}
