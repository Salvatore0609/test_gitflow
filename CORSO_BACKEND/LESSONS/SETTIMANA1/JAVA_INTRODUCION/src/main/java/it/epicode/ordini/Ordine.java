package it.epicode.ordini;

import it.epicode.pizze.Pizza;

public class Ordine {
    // pizza quantita costo totale
    private Pizza pizza;
    private int quantita;
    private int numeroTavolo;

    // metodo statico
    public static float costoTotale(int quantita, float costo) {
        return quantita * costo;
    }

    public int getNumeroTavolo() {
        return numeroTavolo;
    }

    public void setNumeroTavolo(int numeroTavolo) {
        this.numeroTavolo = numeroTavolo;
    }

    public float costoTotale() {
        return pizza.getCosto() * quantita;
    }

    public Pizza getPizza() {
        return pizza;
    }

    public void setPizza(Pizza pizza) {
        this.pizza = pizza;
    }

    public int getQuantita() {
        return quantita;
    }

    public void setQuantita(int quantita) {
        this.quantita = quantita;
    }
}
