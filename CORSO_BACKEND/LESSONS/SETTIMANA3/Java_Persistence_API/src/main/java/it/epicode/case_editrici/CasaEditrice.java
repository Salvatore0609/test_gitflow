package it.epicode.case_editrici;

import jakarta.persistence.*;

@Entity
@Table(name = "case_editrici")
public class CasaEditrice {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String nome;

    @Column(length = 150)
    private String indirizzo;

    @Column(length = 50)
    private String citta;

    //costruttore tutto
    public CasaEditrice(Long id, String nome, String indirizzo, String citta) {
        this.id = id;
        this.nome = nome;
        this.indirizzo = indirizzo;
        this.citta = citta;
    }

    //costruttore vuoto
    public CasaEditrice() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }
}
