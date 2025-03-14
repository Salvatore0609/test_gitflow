package it.epicode.team3;

import it.epicode.team1.Stampabile;
import it.epicode.team2.Dipendente;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DipendetePiva  extends Dipendente implements Stampabile {
    private int numeroOreDaFare;
    private double pagaOraria;


    @Override
    public double stipendio() {
        return numeroOreDaFare * pagaOraria;
    }

    @Override
    public void stampa() {
        System.out.println(
                "numeroOreDaFare=" + numeroOreDaFare +
                ", pagaOraria=" + pagaOraria +
                ", nome='" + getNome() + '\'' +
                ", cognome='" + getCognome() + '\'' +
                ", matricola='" + getMatricola() + '\'' );
    }

    @Override
    public void stampaCosto() {
        System.out.println(stipendio() );
    }


}
