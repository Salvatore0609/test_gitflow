package it.epicode.fs1024_patterns.composite.pizze;

import it.epicode.fs1024_patterns.composite.pizze.menu.VoceDiMenu;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public abstract class Alimento implements VoceDiMenu {
    private String nome;
    private double prezzo;
    private int calorie;

    @Override
    public String getDescrizione() {
        return getNome();
    }
}
