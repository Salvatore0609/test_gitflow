package it.epicode.dischi.canzoni;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import it.epicode.dischi.cantanti.Cantante;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "canzoni")

public class Canzone {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column( nullable = false, length = 100)
    private String titolo;

    @JsonIgnoreProperties({"canzoni"})
    @ManyToOne
    private Cantante cantante;

    @Column( nullable = false, length = 100)
    private String genere;

}
