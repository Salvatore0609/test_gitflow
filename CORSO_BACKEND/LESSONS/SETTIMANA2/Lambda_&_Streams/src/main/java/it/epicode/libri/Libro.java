package it.epicode.libri;

import java.util.ArrayList;
import java.util.List;

public class Libro {
    private String titolo;
    private Autore autore;
    private CasaEditrice casaEditrice;
    private int annoPubblicazione;
    private List<Categoria> categorie = new ArrayList<>();

    public List<Categoria> getCategorie() {
        return categorie;
    }

    public void setCategorie(List<Categoria> categorie) {
        this.categorie = categorie;
    }

    public Libro(String titolo, Autore autore, CasaEditrice casaEditrice, int annoPubblicazione, List<Categoria> categorie) {
        this.titolo = titolo;
        this.autore = autore;
        this.casaEditrice = casaEditrice;
        this.annoPubblicazione = annoPubblicazione;
        this.categorie = categorie;
    }

    public Libro(String titolo, Autore autore, CasaEditrice casaEditrice, int annoPubblicazione) {
        this.titolo = titolo;
        this.autore = autore;
        this.casaEditrice = casaEditrice;
        this.annoPubblicazione = annoPubblicazione;
    }

    public Libro() {
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public Autore getAutore() {
        return autore;
    }

    public void setAutore(Autore autore) {
        this.autore = autore;
    }

    public CasaEditrice getCasaEditrice() {
        return casaEditrice;
    }

    public void setCasaEditrice(CasaEditrice casaEditrice) {
        this.casaEditrice = casaEditrice;
    }

    public int getAnnoPubblicazione() {
        return annoPubblicazione;
    }

    public void setAnnoPubblicazione(int annoPubblicazione) {
        this.annoPubblicazione = annoPubblicazione;
    }

    @Override
    public String toString() {
        return "Libro{" +
                "titolo='" + titolo + '\'' +
                ", autore=" + autore +
                ", casaEditrice=" + casaEditrice +
                ", annoPubblicazione=" + annoPubblicazione +
                ", categorie=" + categorie +
                '}';
    }
}
