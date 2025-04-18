package it.epicode.biblioteca_web.autori;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "autori")

public class Autore {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column( nullable = false, length = 100)
    private String nome;
    @Column( nullable = false, length = 100)
    private String cognome;

    @Column( nullable = false, length = 100)
    private String nazionalita;


}
