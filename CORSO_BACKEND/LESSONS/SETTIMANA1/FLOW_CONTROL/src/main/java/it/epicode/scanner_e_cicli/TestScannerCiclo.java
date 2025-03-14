package it.epicode.scanner_e_cicli;

import it.epicode.pizze.Pizza;
import it.epicode.pizze.PizzaHelper;

import java.util.Scanner;

public class TestScannerCiclo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Pizza[] pizze = PizzaHelper.menuDiPizze();

        boolean showRequest = true;
        int numeroDiPizzeMinu1 = pizze.length-1;

        do {
            System.out.println("Scegli una pizza: inserisci un numero da 0 a " + numeroDiPizzeMinu1 + " per terminare scrivi -1");
            int pizzaNum = scanner.nextInt();

            if(pizzaNum==-1) {
                showRequest = false;

                // fa in modo che il programma non esegua le istruzioni successive ma valuti solo la condizione di uscita
                continue;
            }
            if(pizzaNum>numeroDiPizzeMinu1) {
                System.out.println("Pizza non disponibile");
                continue;
            }

            Pizza pizzaScelta = pizze[pizzaNum];
            System.out.println("Hai scelto la pizza " + pizzaScelta.getNome());

        } while (showRequest);

    }

}
