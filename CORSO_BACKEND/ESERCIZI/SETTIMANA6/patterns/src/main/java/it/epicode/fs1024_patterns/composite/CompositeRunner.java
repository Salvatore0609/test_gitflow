package it.epicode.fs1024_patterns.composite;

import it.epicode.fs1024_patterns.composite.pizze.bevande.Bevanda;
import it.epicode.fs1024_patterns.composite.pizze.menu.Menu;
import it.epicode.fs1024_patterns.composite.pizze.pizze.Pizza;
import it.epicode.fs1024_patterns.composite.pizze.topping.Topping;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Order(3)
public class CompositeRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Composite Pattern Example");

        // topping
        Topping topping1 = new Topping();
        topping1.setNome("Funghi");
        topping1.setPrezzo(1.50);
        topping1.setCalorie(100);

        Topping topping2 = new Topping();
        topping2.setNome("Prosciutto");
        topping2.setPrezzo(1.50);
        topping2.setCalorie(100);

        Topping topping3 = new Topping();
        topping3.setNome("Olive");
        topping3.setPrezzo(1.50);
        topping3.setCalorie(100);

        // pizze
        Pizza pizzaMargherita = new Pizza();
        pizzaMargherita.setNome("Margherita");
        pizzaMargherita.setPrezzo(8.50);
        pizzaMargherita.setCalorie(800);
        pizzaMargherita.setToppings(List.of(topping1, topping2));

        Pizza pizzaDiavola = new Pizza();
        pizzaDiavola.setNome("Diavola");
        pizzaDiavola.setPrezzo(9.50);
        pizzaDiavola.setCalorie(900);
        pizzaDiavola.setToppings(List.of(topping1, topping2, topping3));

        Bevanda bevanda = new Bevanda();
        bevanda.setNome("Coca Cola");
        bevanda.setPrezzo(1.50);
        bevanda.setCalorie(100);

        Bevanda bevanda2 = new Bevanda();
        bevanda2.setNome("Sprite");
        bevanda2.setPrezzo(1.50);
        bevanda2.setCalorie(100);

        Bevanda bevanda3 = new Bevanda();
        bevanda3.setNome("Fanta");
        bevanda3.setPrezzo(1.50);
        bevanda3.setCalorie(100);

        Menu menu = new Menu();

        menu.setNome("Menu Serale");
        menu.setVociDiMenu(List.of(pizzaMargherita, pizzaDiavola, bevanda, bevanda2, bevanda3, topping1, topping2, topping3));

        menu.printMenu();

    }
}
