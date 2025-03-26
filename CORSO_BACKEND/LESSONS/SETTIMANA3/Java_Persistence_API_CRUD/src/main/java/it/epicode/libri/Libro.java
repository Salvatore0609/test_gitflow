package it.epicode.libri;

import jakarta.persistence.*;

@Entity
@Table(name = "libri")
public class Libro {

    @Id //specifichiamo che l'id è la chiave primaria
    @GeneratedValue(strategy = GenerationType.SEQUENCE) //genera un seriale automatico
    private Long id;
    //
    //una stringa viene salvata sempre come character varing di default
    //lunghezza caratteri, null rende obbligatorio o no il campo, unique specifica che non esiste un titolo uguale
    @Column(length = 100, nullable = false, unique = true )
    private String titolo;
    //
    @Column(length = 50)
    private String autore;
    //
    //qui accettiamo tutti i default
    private int annoPubblicazione;
    //a questo punto la nostra classe è pronta per essere salvata


    public Libro(String titolo, String autore, int annoPubblicazione) {
        this.titolo = titolo;
        this.autore = autore;
        this.annoPubblicazione = annoPubblicazione;
    }

    //costruttore vuoto obbligatorio
    public Libro(){
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAutore() {
        return autore;
    }

    public void setAutore(String autore) {
        this.autore = autore;
    }

    public Integer getAnnoPubblicazione() {
        return annoPubblicazione;
    }

    public void setAnnoPubblicazione(Integer annoPubblicazione) {
        this.annoPubblicazione = annoPubblicazione;
    }
}

