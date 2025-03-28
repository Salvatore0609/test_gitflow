package it.epicode.pubblicazioni;

import it.epicode.autori.Autore;
import it.epicode.caseeditrici.CasaEditrice;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pubblicazioni")

// decido il tipo di ereditarietà
// esso influenza il numero di tabelle create
// SINGLE_TABLE: una sola tabella con tutti i campi di tutte le classi
// TABLE_PER_CLASS: una tabella per ogni classe
// JOINED: una tabella per ogni classe con i campi comuni in una tabella padre
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@SuperBuilder
public abstract class Pubblicazione {
    // solo nella classe padre va messa @Id
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(length = 50, nullable = false)
    private String titolo;

    @ManyToOne
    private Autore autore;

    @ManyToOne
    private CasaEditrice casaEditrice;

}
