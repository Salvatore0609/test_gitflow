package it.epicode.corso_universitario_web.corsi;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "corsi")
public class Corso {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;
    private String descrizione;
    private LocalDate dataInizio = LocalDate.now();
    private LocalDate dataFine;
}
