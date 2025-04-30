package it.epicode.fs1024_patterns.composite.pizze.menu;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Menu {
    private List<VoceDiMenu> vociDiMenu = new ArrayList<>();
    private String nome;

    public void printMenu() {
        System.out.println("Menu: " + nome);
        for (VoceDiMenu voce : vociDiMenu) {
            System.out.println(voce.getDescrizione() + " - Prezzo: " + voce.getPrezzo() + " - Calorie: " + voce.getCalorie());
        }
    }

}
