package it.epicode.team4;

import it.epicode.team1.Stampabile;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class Ufficio implements Stampabile {
    private String nome;
    private String indirizzo;
    private String citta;

    @Override
    public void stampa() {
        System.out.println(
                "nome='" + nome + '\'' +
                ", indirizzo='" + indirizzo + '\'' +
                ", citta='" + citta + '\'');
    }

    @Override
    public void stampaCosto() {
        System.out.println(400);
    }
}
