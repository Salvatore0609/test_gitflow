package it.epicode.fs1024_patterns.composite.pizze.bevande;

import it.epicode.fs1024_patterns.composite.pizze.Alimento;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bevanda  extends Alimento {
    private BevandaQuantita quantita = BevandaQuantita.CL33;

    @Override
    public String getDescrizione() {
        return super.getDescrizione() + " " + quantita;
    }
}
