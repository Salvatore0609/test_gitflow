package it.epicode.corso_universitario_web.iscrizioni;

import it.epicode.corso_universitario_web.corsi.Corso;
import it.epicode.corso_universitario_web.studenti.Studente;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "iscrizioni")
public class Iscrizione {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    private Studente studente;

    @ManyToOne
    private Corso corso;
}
