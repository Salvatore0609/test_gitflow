package it.epicode.autori;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "autori")
@NamedQuery(name = "autore.find.cognome", query = "SELECT a FROM Autore a WHERE a.cognome = :cognome")
@NamedQuery(name = "autore.find.cognome.nome", query = "SELECT a FROM Autore a WHERE a.cognome = :cognome AND a.nome= :nome")
@NamedQuery(name = "autore.find.all", query = "SELECT a FROM Autore a")
public class Autore {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(length = 50, nullable = false)
    private String nome;
    @Column(length = 50, nullable = false)
    private String cognome;
}
