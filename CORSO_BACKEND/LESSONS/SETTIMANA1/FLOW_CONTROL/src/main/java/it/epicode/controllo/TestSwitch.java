package it.epicode.controllo;

import it.epicode.pizze.Pizza;
import it.epicode.pizze.PizzaHelper;

public class TestSwitch {
    public static void main(String[] args) {
        Pizza[] pizze = PizzaHelper.menuDiPizze();
        System.out.println("Test switch case");
        for (int i = 0; i < pizze.length; i++) {
            Pizza pizzaCorrente = pizze[i];

            switch (pizzaCorrente.getTipo()) {
                case "bianca":
                    System.out.println("La pizza " +  pizzaCorrente.getNome() + " è bianca");
                    break;
                case "rossa":
                    System.out.println("La pizza " +  pizzaCorrente.getNome() + " è rossa");
                    break;
                case "battuta":
                    System.out.println("La pizza " +  pizzaCorrente.getNome() + " è battuta");
                    break;
                default:
                    System.out.println("La pizza " +  pizzaCorrente.getNome() + " pizza non catalogato");
            }

        }

    }
}
