package esercizio.rapportino;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {
    private String nome;
    private String cognome;
    private String indirizzo;
    private String telefono;
}
