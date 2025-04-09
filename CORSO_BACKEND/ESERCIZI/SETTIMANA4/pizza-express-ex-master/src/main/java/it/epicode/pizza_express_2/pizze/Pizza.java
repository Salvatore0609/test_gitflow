package it.epicode.pizza_express_2.pizze;

import it.epicode.pizza_express_2.menu.ElementoMenu;
import it.epicode.pizza_express_2.menu.RigaMenu;
import it.epicode.pizza_express_2.toppings.Topping;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pizza extends ElementoMenu {
    private List<Topping> toppings = new ArrayList<>();

    public Pizza(String nome, String descrizione, double prezzo, int calorie, List<Topping> toppings) {
        super(nome, descrizione, prezzo, calorie);
        this.toppings = toppings;
    }

    public String toppingsToString() {
        String toppingsString = toppings.stream().map(Topping::getNome).reduce("", (a, b) -> a + ", " + b);
        return toppingsString;
    }

    @Override
    public double getPrezzo() {
        double totalPrice = super.getPrezzo();
        for (Topping topping : toppings) {
            totalPrice += topping.getPrezzo();
        }
        return totalPrice;
    }

    public int getTotalCalories() {
        int totalCalories = getCalorie();
        for (Topping topping : toppings) {
            totalCalories += topping.getCalorie();
        }
        return totalCalories;
    }



}
