package it.epicode.pizza_express_2.toppings;

import it.epicode.pizza_express_2.menu.ElementoMenu;
import lombok.NoArgsConstructor;


@NoArgsConstructor
public class Topping extends ElementoMenu {
    public Topping(String nome, String descrizione, double prezzo, int calorie) {
        super(nome, descrizione, prezzo, calorie);
    }
}
