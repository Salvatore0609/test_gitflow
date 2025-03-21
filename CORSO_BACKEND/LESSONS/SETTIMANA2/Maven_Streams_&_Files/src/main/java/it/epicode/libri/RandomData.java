package it.epicode.libri;

import java.util.List;
import java.util.Set;

public class RandomData {
    public static List<Autore> autori = List.of(
            new Autore("Mario", "Rossi"),
            new Autore("Luca", "Bianchi"),
            new Autore("Paolo", "Verdi")
    );

    public static List<CasaEditrice> caseEditrici = List.of(
            new CasaEditrice("Mondadori", "Via Roma 1"),
            new CasaEditrice("Einaudi", "Via Garibaldi 2"),
            new CasaEditrice("Feltrinelli", "Via Dante 3")
    );

    public static List<Libro> libri = List.of(
            //new Libro("Il signore degli anelli", 1954, autori.get(0), caseEditrici.get(0), 19.99, 1000),
            new Libro("Il signore degli anelli", 1954, autori.get(0), caseEditrici.get(0), 20.0, 1000),
            new Libro("Il nome della rosa", 1980, autori.get(1), caseEditrici.get(1), 10.0, 500),
            new Libro("La coscienza di Zeno", 1923, autori.get(2), caseEditrici.get(2), 20.0, 300),
            new Libro("La casa nella prateria", 1935, autori.get(0), caseEditrici.get(0), 10.0, 200)
    );

    public static Set<Libro> libriSet = Set.of(
            //new Libro("Il signore degli anelli", 1954, autori.get(0), caseEditrici.get(0), 19.99, 1000),
            new Libro("Il signore degli anelli", 1954, autori.get(0), caseEditrici.get(0), 19.99, 1000),
            new Libro("Il nome della rosa", 1980, autori.get(1), caseEditrici.get(1), 15.99, 500),
            new Libro("La coscienza di Zeno", 1923, autori.get(2), caseEditrici.get(2), 12.99, 300),
            new Libro("La casa nella prateria", 1935, autori.get(0), caseEditrici.get(0), 9.99, 200)
    );

}
