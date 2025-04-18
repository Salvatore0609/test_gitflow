package it.epicode.biblioteca_web.caseeditrici;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "case_editrici")

public class CasaEditrice {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column( nullable = false, length = 100)
    private String nome;

    @Column( nullable = false, length = 100)
    private String indirizzo;

    @Column( nullable = false, length = 100)
    private String telefono;

}
