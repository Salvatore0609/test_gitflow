package it.epicode.cicli;

import it.epicode.pizze.Pizza;
import it.epicode.pizze.PizzaHelper;

public class TestCicloFor {
    public static void main(String[] args) {

        System.out.println("Menu pizze con for");
        Pizza[] pizze = PizzaHelper.menuDiPizze();
        PizzaHelper.stampaPizze(pizze);

    }
}
