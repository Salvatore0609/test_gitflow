package it.epicode.test_gitflow.libri;

import it.epicode.test_gitflow.autori.Autore;
import it.epicode.test_gitflow.caseeditrici.CasaEditrice;
import it.epicode.test_gitflow.categorie.Categoria;
import lombok.Data;

@Data
public class Libro {
    private String titolo;
    private Autore autore;
    private String isbn;
    private String genere;
    private int annoPubblicazione;
    private CasaEditrice casaEditrice;
    private int numeroPagine;
    private Categoria categoria;
}
