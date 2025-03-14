package it.epicode.team2;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public abstract class Dipendente {
    private String nome;
    private String cognome;
    private String matricola;

    public abstract double stipendio();
}
