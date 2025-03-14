package esercizio.rapportino;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Rapportino {
    private String data;
    private int numero;
    private Cliente cliente;
    private Tecnico tecnico;

    Lavoro[] lavori = new Lavoro[10];

}
