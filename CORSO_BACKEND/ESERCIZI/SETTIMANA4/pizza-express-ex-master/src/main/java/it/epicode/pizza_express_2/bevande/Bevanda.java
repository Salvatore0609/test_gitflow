package it.epicode.pizza_express_2.bevande;

import it.epicode.pizza_express_2.menu.ElementoMenu;
import it.epicode.pizza_express_2.menu.RigaMenu;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


public class Bevanda extends ElementoMenu {
    public Bevanda(String nome, String descrizione, double prezzo, int calorie) {
        super(nome, descrizione, prezzo, calorie);
    }
}
