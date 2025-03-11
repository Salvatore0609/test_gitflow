package it.epicode;

import it.epicode.ordini.Ordine;
import it.epicode.pizze.Pizza;

public class TestOrdine {
    public static void main(String[] args) {
        Pizza pizzaMargherita = new Pizza();
        pizzaMargherita.setIngredienti("Mozzarella, Pomodoro, Capperi");
        pizzaMargherita.setCalorie(44);
        pizzaMargherita.setCosto(10);
        pizzaMargherita.setNome("Margherita");

        Ordine ordine = new Ordine();
        ordine.setPizza(pizzaMargherita);
        ordine.setQuantita(4);

        // esempio usao di printf
        System.out.printf("Pizza %s quantità %d totale %f" ,  pizzaMargherita.getNome(), ordine.getQuantita(), ordine.costoTotale());


        Ordine.costoTotale( 4, pizzaMargherita.getCosto());




    }
}
