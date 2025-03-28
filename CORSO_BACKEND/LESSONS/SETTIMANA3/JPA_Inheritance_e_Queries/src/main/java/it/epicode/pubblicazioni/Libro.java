package it.epicode.pubblicazioni;

import it.epicode.autori.Autore;
import it.epicode.caseeditrici.CasaEditrice;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;


// deve esserci l'annotazione Entity
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
// deve esserci l'annotazione SuperBuilder sia nel figlio che nel papà
@SuperBuilder
public class Libro extends Pubblicazione {
    // non deve esserci la chiave primaria
    private int numeroPagine;

    public Libro(Long id, String titolo, Autore autore, CasaEditrice casaEditrice, int numeroPagine) {
        super(id, titolo, autore, casaEditrice);
        this.numeroPagine = numeroPagine;
    }

    @Override
    public String toString() {
        return "Libro{" +
                "id=" + getId() +
                ", titolo='" + getTitolo() + '\'' +
                ", numeroPagine=" + numeroPagine +
                '}';
    }
}
