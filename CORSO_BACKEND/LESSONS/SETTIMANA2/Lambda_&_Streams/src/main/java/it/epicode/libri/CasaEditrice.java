package it.epicode.libri;

public class CasaEditrice {
    private String nome;
    private String indirizzo;
    private String telefono;

    public CasaEditrice(String nome, String indirizzo, String telefono) {
        this.nome = nome;
        this.indirizzo = indirizzo;
        this.telefono = telefono;
    }

    public CasaEditrice() {
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "CasaEditrice{" +
                "nome='" + nome + '\'' +
                ", indirizzo='" + indirizzo + '\'' +
                ", telefono='" + telefono + '\'' +
                '}';
    }
}
