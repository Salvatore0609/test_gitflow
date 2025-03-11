package it.epicode;

import it.epicode.ordini.Ordine;

import java.util.Scanner;

public class TestScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Inserimento dati dell'ordine");

        System.out.println("Inserisci il numero di pizze margherite da ordinare e premi invio");
        int quantita = scanner.nextInt();

        System.out.println("Inserisci il numero del tavolo e premi invio");
        int tavolo = scanner.nextInt();

        System.out.println("Inserisci il costo della pizza e premi invio");
        int costo = scanner.nextInt();

        System.out.printf("Costo totale per %d pizze margherite al tavolo %d è %f" , quantita, tavolo, Ordine.costoTotale(quantita, costo));

    }
}
