package it.epicode.esercizio3;

public class ContoOnline extends  ContoCorrente {
    private double maxPrelievo;

    public ContoOnline(String titolare, double saldo, double maxPrelievo) {
        super(titolare, saldo);
        this.maxPrelievo = maxPrelievo;
    }

    public void stampaSaldo() {
        System.out.println(
                "Titolare: " +  getTitolare() +
                " Saldo: " + getSaldo() +
                " Max Prelievo: " + maxPrelievo +
                " Movimenti: " + getnMovimenti() +
                " Massimo movimenti: " + getMaxMovimenti()
        );

    }

    public void preleva(double x) throws BancaException {
        if(x<= maxPrelievo){
            super.preleva(x);
        } else {
            throw new BancaException("Il prelievo non è disponibile");
        }
    }
}
