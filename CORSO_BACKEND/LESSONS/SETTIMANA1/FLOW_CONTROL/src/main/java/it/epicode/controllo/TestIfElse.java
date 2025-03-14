package it.epicode.controllo;

import it.epicode.pizze.Pizza;
import it.epicode.pizze.PizzaHelper;

public class TestIfElse {
    public static void main(String[] args) {
        Pizza[] pizze = PizzaHelper.menuDiPizze();


        for (int i = 0; i < pizze.length; i++) {
            Pizza pizzaCorrente = pizze[i];

            // equals si utilizza per fare i confronti tra stringhe
            // non si può usare == perchè altrimenti viente controllata l'eguaglianza tra locazioni di memoria
            // che sarà sempre false

            if(pizzaCorrente.getTipo().equals("bianca")) {
                System.out.println("La pizza " +  pizzaCorrente.getNome() + " è bianca");
            } else if (pizzaCorrente.getTipo().equals("rossa"))  {
                System.out.println("La pizza " +  pizzaCorrente.getNome() + " è rossa");
            } else if(pizzaCorrente.getTipo().equals("battuta")) {
                System.out.println("La pizza " +  pizzaCorrente.getNome() + " è battuta");
            } else {
                System.out.println("La pizza " +  pizzaCorrente.getNome() + " non è classificata");
            }
        }
    }
}
