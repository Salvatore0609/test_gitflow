package it.epicode.pizza_express_2.menu;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public abstract class ElementoMenu implements RigaMenu {
    private String nome;
    private String descrizione;
    private double prezzo;
    private int calorie;

    @Override
    public String descrizioneRiga() {
        return getDescrizione() + " - " + getPrezzo() + "€" + " - " + getCalorie() + " kcal";
    }

}
