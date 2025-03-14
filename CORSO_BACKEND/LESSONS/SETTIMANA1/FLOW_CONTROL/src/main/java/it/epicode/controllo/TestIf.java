package it.epicode.controllo;

import it.epicode.pizze.Pizza;
import it.epicode.pizze.PizzaHelper;

public class TestIf {
    public static void main(String[] args) {
        Pizza[] pizze = PizzaHelper.menuDiPizze();

        for (int i = 0; i < pizze.length; i++) {
            Pizza pizzaCorrente = pizze[i];
            if(pizzaCorrente.getCalorie()>200) {
                System.out.println(pizzaCorrente.getNome() + " è una pizza altamente calorica");
            } else {
                System.out.println(pizzaCorrente.getNome() + " pizza dietetica");
            }
        }

    }

}
