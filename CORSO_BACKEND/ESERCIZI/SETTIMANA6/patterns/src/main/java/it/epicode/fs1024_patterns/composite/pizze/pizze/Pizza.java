package it.epicode.fs1024_patterns.composite.pizze.pizze;

import it.epicode.fs1024_patterns.composite.pizze.Alimento;
import it.epicode.fs1024_patterns.composite.pizze.topping.Topping;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pizza  extends Alimento {
    private List<Topping> toppings;

    @Override
    public double getPrezzo() {
        double prezziTopping = toppings.stream()
                .mapToDouble(Topping::getPrezzo)
                .sum();

        return super.getPrezzo() + prezziTopping;
    }

    @Override
    public int getCalorie() {
        int calorieTopping = toppings.stream()
                .mapToInt(Topping::getCalorie)
                .sum();
        return super.getCalorie() + calorieTopping;
    }
}
