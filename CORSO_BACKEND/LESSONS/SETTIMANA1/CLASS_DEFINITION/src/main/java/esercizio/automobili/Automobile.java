package esercizio.automobili;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Automobile {
    private String marca;
    private String modello;
    private int anno;
    private double prezzo;
    private Allestimento[] allestimento = new Allestimento[5];
}
