package it.epicode.correzioni.esercizio2;

import java.util.Scanner;

public class TestSwitch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Inserisci un numero da 0 a 3");
        int numero = scanner.nextInt();

        switch(numero) {
            case 0:
                System.out.println("Hai inserito zero");
                break;
            case 1:
                System.out.println("Hai inserito uno");
                break;
            case 2:
                System.out.println("Hai inserito due");
                break;
            case 3:
                System.out.println("Hai inserito tre");
                break;
            default:
                System.out.println("Hai inserito un numero non valido");
        }


    }
}
