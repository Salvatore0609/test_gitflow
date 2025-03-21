package it.epicode.libri;

public class Libro {
    private String titolo;
    private int annoPubblicazione;
    private Autore autore;
    private CasaEditrice casaEditrice;
    private double prezzo;
    private int numeroPagine;

    public Libro(String titolo, int annoPubblicazione, Autore autore, CasaEditrice casaEditrice, double prezzo, int numeroPagine) {
        this.titolo = titolo;
        this.annoPubblicazione = annoPubblicazione;
        this.autore = autore;
        this.casaEditrice = casaEditrice;
        this.prezzo = prezzo;
        this.numeroPagine = numeroPagine;
    }

    public Libro() {
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public int getAnnoPubblicazione() {
        return annoPubblicazione;
    }

    public void setAnnoPubblicazione(int annoPubblicazione) {
        this.annoPubblicazione = annoPubblicazione;
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

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public int getNumeroPagine() {
        return numeroPagine;
    }

    public void setNumeroPagine(int numeroPagine) {
        this.numeroPagine = numeroPagine;
    }

    @Override
    public boolean equals(Object obj) {
        // controllare il titolo, il prezzo, il numero di pagine e l'anno di pubblicazione
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Libro libro = (Libro) obj;

        if (Double.compare(libro.prezzo, prezzo) != 0) return false;

        if (numeroPagine != libro.numeroPagine) return false;

        if (annoPubblicazione != libro.annoPubblicazione) return false;

        if (titolo != null ? !titolo.equals(libro.titolo) : libro.titolo != null) return false;



        return true;

    }

    @Override
    public String toString() {
        return "Libro{" +
                "titolo='" + titolo + '\'' +
                ", annoPubblicazione=" + annoPubblicazione +
                ", autore=" + autore +
                ", casaEditrice=" + casaEditrice +
                ", prezzo=" + prezzo +
                ", numeroPagine=" + numeroPagine +
                '}';
    }
}
