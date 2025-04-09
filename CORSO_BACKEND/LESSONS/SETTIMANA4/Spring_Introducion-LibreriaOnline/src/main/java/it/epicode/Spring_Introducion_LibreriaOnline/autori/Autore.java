package it.epicode.Spring_Introducion_LibreriaOnline.autori;

import jakarta.persistence.*;
import jakarta.persistence.GenerationType;
import lombok.Data;

@Entity
@Data
@Table(name = "autori")
public class Autore {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false, length = 100)
    private String nome;
    @Column(nullable = false, length = 100)
    private String cognome;
}
