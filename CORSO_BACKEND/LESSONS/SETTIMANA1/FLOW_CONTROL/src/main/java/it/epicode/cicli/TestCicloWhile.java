package it.epicode.cicli;

import it.epicode.pizze.Pizza;
import it.epicode.pizze.PizzaHelper;

public class TestCicloWhile {

    public static void main(String[] args) {
        Pizza[] pizze = PizzaHelper.pizzeBattute();

        Pizza[] pizze1 = {};

        System.out.println("Menu pizze con while");
        PizzaHelper.stampaPizzeWhile(pizze1);

    }
}
