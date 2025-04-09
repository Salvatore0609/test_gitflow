package it.epicode.Spring_Introducion_LibreriaOnline.libri;

import it.epicode.Spring_Introducion_LibreriaOnline.autori.Autore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "libri")
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false, length = 100)
    private String titolo;

    @ManyToOne
    private Autore autore;

    @Column(length = 100)
    private String genere;
    private int annoPubblicazione;

}
