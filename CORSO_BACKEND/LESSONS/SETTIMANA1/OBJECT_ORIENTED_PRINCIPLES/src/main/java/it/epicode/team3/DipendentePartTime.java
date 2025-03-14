package it.epicode.team3;

import it.epicode.team1.Stampabile;
import it.epicode.team2.Dipendente;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class DipendentePartTime extends Dipendente implements Stampabile {
    private int numeroOre = 4;
    private double pagaOraria = 10;
    private double trattenute = 3;

    @Override
    public double stipendio() {
        return numeroOre * pagaOraria-trattenute;
    }


    @Override
    public void stampa() {
        System.out.println(
                "numeroOre=" + numeroOre +
                ", pagaOraria=" + pagaOraria +
                ", trattenute=" + trattenute +
                ", nome='" + getNome() + '\'' +
                ", cognome='" + getCognome() + '\'' +
                ", matricola='" + getMatricola() + '\'' );
    }

    @Override
    public void stampaCosto() {
        System.out.println(stipendio() + 20 *stipendio()/100);
    }


}
