package it.epicode;

import it.epicode.pizze.Pizza;

public class TestaPizza {
    // non creare in progetti veri il main dentro una classe
    public static void main(String[] args) {
        // costruttore del oggetto pizza
        Pizza pizzaMargherita = new Pizza();

        pizzaMargherita.setCalorie(44);
        pizzaMargherita.setCosto(10);
        pizzaMargherita.setNome("Margherita");
        pizzaMargherita.setIngredienti("Mozzarella, Pomodoro, Capperi");

        System.out.println("nome pizza: "+pizzaMargherita.getNome() + " ingredienti: " + pizzaMargherita.getIngredienti());




    }

}
