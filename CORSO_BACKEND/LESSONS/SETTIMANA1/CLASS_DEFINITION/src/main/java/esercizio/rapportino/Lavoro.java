package esercizio.rapportino;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lavoro {
    private String descrizione;
    private double costo;
    private int ore;
}
