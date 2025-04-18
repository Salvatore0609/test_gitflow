package it.epicode.dischi.cantanti;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import it.epicode.dischi.canzoni.Canzone;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cantanti")

public class Cantante  {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cognome", nullable = false)
    private String cognome;

    @JsonIgnoreProperties({"cantante"})
    @OneToMany(mappedBy = "cantante")
    private List<Canzone> canzoni;

}
