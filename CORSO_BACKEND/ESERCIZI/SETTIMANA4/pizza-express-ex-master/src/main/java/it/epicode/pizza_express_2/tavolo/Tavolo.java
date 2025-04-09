package it.epicode.pizza_express_2.tavolo;

import lombok.Data;

@Data
public class Tavolo {
    private int numeroTavolo;
    private int numeroCopertiMax;
    private StatoTavolo stato=StatoTavolo.LIBERO;

    public Tavolo(int numeroTavolo, int numeroCopertiMax) {
        this.numeroTavolo = numeroTavolo;
        this.numeroCopertiMax = numeroCopertiMax;
    }
}
