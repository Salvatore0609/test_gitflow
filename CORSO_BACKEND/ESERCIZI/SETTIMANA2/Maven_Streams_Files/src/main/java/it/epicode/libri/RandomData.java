package it.epicode.libri;

import java.util.List;
import java.util.Set;

public class RandomData {
    public static List<Libro> libri = List.of(
            new Autore("Giuseppe", "Verdi"),
            new Autore("Mario", "Rossi"),
            new Autore("Luca", "Bianchi"),
    );

    public static List<CasaEditrice> caseEditrici = List.of(
            new CasaEditrice("Mondadori,", "Milano"),
            new CasaEditrice("Rizzoli,", "Torino"),
            new CasaEditrice("Penguin,", "New York"),
    );

    public static Set<Libro> libriSet = Set.of(
            new Libro("Il Signore degli Anelli", 1954, libri.get(0), caseEditrici.get(0), 19.99, 500),
            new Libro("1984", 1949, libri.get(1), caseEditrici.get(1), 14.99, 300),
            new Libro("Harry Potter", 1997, libri.get(2), caseEditrici.get(2), 9.99, 400),
            new Libro("Star Wars", 1977, libri.get(0), caseEditrici.get(0), 24.99, 600),
            new Libro("La conoscenza", 2019, libri.get(1), caseEditrici.get(1), 12.99, 250),
            new Libro("Il codice da Vinci", 2003, libri.get(2), caseEditrici.get(2), 16.99, 350),
    );

}
