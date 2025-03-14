package esercizio.automobili;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Allestimento {
    private String nome;
    private String descrizione;
    private double prezzo;
}
