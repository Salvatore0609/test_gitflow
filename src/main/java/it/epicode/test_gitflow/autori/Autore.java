package it.epicode.test_gitflow.autori;

import lombok.Data;

@Data
public class Autore {
    private String nome;
    private String cognome;
    private String email;
    private String telefono;
    private String indirizzo;
    private String cittaDiResidenza; // il frontend ha usato cittaResidenza invece di citta
    private String provincia;
    private String cap;
    private String nazione;
}
