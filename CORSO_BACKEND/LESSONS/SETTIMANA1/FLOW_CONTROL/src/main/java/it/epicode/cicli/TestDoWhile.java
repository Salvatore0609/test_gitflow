package it.epicode.cicli;

import it.epicode.pizze.Pizza;
import it.epicode.pizze.PizzaHelper;

public class TestDoWhile {
    public static void main(String[] args) {
        Pizza[] pizze = PizzaHelper.pizzeBattute();

        int pizzeStampate=0;

        System.out.println("Menu pizze con do while");

        PizzaHelper.stampaPizzaDoWhile(pizze);


    }
}
