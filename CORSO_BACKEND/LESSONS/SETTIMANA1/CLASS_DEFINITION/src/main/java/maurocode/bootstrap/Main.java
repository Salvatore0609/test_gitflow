package maurocode.bootstrap;

import maurocode.server.Database;
import maurocode.visualizzazioni.Home;
import maurocode.visualizzazioni.ListaAutomobili;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Database.inizializzaDatabase();

        boolean continua = true;
        int scelta = 0;
        while (continua) {
            if(scelta==0) Home.mostraHomePage();
            scelta = scanner.nextInt();
            switch (scelta) {
                case 1:
                    ListaAutomobili.mostraListaAutomobili();
                    //   <home/>
                    Home.mostraHomePage();


                    break;
                case 2:
                    // visualizza dettaglio automobile
                    break;
                case 3:
                    // inserisci nuova automobile
                    break;
                case 4:
                    // modifica automobile
                    break;
                default:
                    System.out.println("Scelta non valida");
                    break;
            }


        }



    }
}
