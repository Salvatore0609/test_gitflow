package it.epicode.biblioteca_web.libri;

import it.epicode.biblioteca_web.autori.Autore;
import it.epicode.biblioteca_web.caseeditrici.CasaEditrice;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.core.annotation.Order;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "libri")


public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column( nullable = false, length = 100)
    private String titolo;

    @ManyToOne
    private Autore autore;

    @ManyToOne
    private CasaEditrice casaEditrice;


}
