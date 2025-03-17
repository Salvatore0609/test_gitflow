package it.epicode.Esercizio3.classi;

import it.epicode.Esercizio3.exceptions.BancaException;

  public class ContoOnLine extends ContoCorrente {
    private double maxPrelievo;

    public ContoOnLine(String titolare, double saldo, double maxP) {
        super(titolare, saldo);
        this.maxPrelievo = maxP;
    }

    @Override
    public void preleva(double x) throws BancaException {
        if (x > maxPrelievo) {
            throw new BancaException("Il prelievo non è disponibile: superato il massimo prelievo consentito.");
        }
        super.preleva(x);
    }

    public void stampaSaldo() {
        System.out.println("Titolare: " + getTitolare() + " - Saldo: " + restituisciSaldo() + " - Num movimenti: " + getnMovimenti() + " - Massimo prelievo possibile: " + maxPrelievo);
    }
}
