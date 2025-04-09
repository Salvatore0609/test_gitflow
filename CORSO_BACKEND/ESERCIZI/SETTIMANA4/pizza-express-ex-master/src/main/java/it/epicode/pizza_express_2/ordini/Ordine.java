package it.epicode.pizza_express_2.ordini;

import it.epicode.pizza_express_2.menu.RigaMenu;
import it.epicode.pizza_express_2.tavolo.Tavolo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ordine {
    private int numeroOrdine;
    private StatoOrdine stato;
    private int coperti;
    private LocalTime oraOrdine;
    private List<RigaMenu> elementi=new ArrayList<>();
    private Tavolo tavolo;

    public double calcolaPrezzoTotale(double prezzoUnitarioCoperto){
        double prezzoTotale = 0;
        for (RigaMenu riga : elementi) {
            prezzoTotale += riga.getPrezzo();
        }


        prezzoTotale+=prezzoUnitarioCoperto*coperti;
        return prezzoTotale;
    }

    public void stampaOrdine(double prezzoUnitarioCoperto) {
        System.out.println("Numero ordine: " + numeroOrdine);
        System.out.println("Stato ordine: " + stato);
        System.out.println("Coperti: " + coperti);
        System.out.println("Ora ordine: " + oraOrdine);
        System.out.println("Tavolo: " + tavolo.getNumeroTavolo());
        System.out.println("-- Elementi ordinati --");
        for (RigaMenu riga : elementi) {
            System.out.println(riga.descrizioneRiga());
        }
        System.out.println("-----------");
        System.out.println("Prezzo totale: " + calcolaPrezzoTotale( prezzoUnitarioCoperto));
    }

}
