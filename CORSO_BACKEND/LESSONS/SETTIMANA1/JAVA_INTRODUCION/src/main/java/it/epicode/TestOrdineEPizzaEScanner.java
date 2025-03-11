package it.epicode;

import it.epicode.ordini.Ordine;
import it.epicode.pizze.Pizza;

import java.sql.SQLOutput;
import java.util.Scanner;

public class TestOrdineEPizzaEScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Pizza pizzaMargherita = new Pizza();
        pizzaMargherita.setIngredienti("Mozzarella, Pomodoro, Capperi");
        pizzaMargherita.setCalorie(44);

        pizzaMargherita.setCosto(10);
        pizzaMargherita.setNome("Margherita");

        System.out.println("Inserisci la quantità e premi invio");
        int quantita = scanner.nextInt();
        System.out.println("Inserisci il numero del tavolo e premi invio");
        int tavolo = scanner.nextInt();

        Ordine ordine = new Ordine();
        ordine.setPizza(pizzaMargherita);
        ordine.setQuantita(quantita);
        ordine.setNumeroTavolo(tavolo);

        System.out.printf("Pizza %s quantità %d totale %f" ,  pizzaMargherita.getNome(), ordine.getQuantita(), ordine.costoTotale());




    }
}
