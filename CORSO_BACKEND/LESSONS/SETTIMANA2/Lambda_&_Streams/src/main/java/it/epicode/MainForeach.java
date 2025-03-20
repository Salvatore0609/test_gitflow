package it.epicode;

import it.epicode.libri.Autore;
import it.epicode.libri.CasaEditrice;
import it.epicode.libri.Libro;

import java.util.List;

public class MainForeach {

    public static List<Autore> autori = List.of(
            new Autore("Mario", "Rossi"),
            new Autore("Luca", "Bianchi"),
            new Autore("Giuseppe", "Verdi")
    );

    public static List<CasaEditrice> caseEditrici = List.of(
            new CasaEditrice("Mondadori", "Milano","02-12345678"),
            new CasaEditrice("Einaudi", "Torino","011-123456"),
            new CasaEditrice("Feltrinelli", "Milano","02-87654321")
    );

    public static List<Libro> libri = List.of(
            new Libro("Moby Dick", autori.get(0), caseEditrici.get(1), 2013),
            new Libro("Il signore degli anelli", autori.get(0), caseEditrici.get(0), 2010),
            new Libro("La coscienza di Zeno", autori.get(2), caseEditrici.get(2), 2010),
            new Libro("La tempesta", autori.get(1), caseEditrici.get(0), 2012),
            new Libro("Il nome della rosa", autori.get(1), caseEditrici.get(1), 2012)
    );

    public static List<Libro> libri2 = List.of(
            new Libro("La banda del buco", autori.get(0), caseEditrici.get(0), 2004),
            new Libro("Una vita", autori.get(1), caseEditrici.get(1), 2010),
            new Libro("Una poltrona per due", autori.get(2), caseEditrici.get(2), 2004),
            new Libro("Java la bibbia", autori.get(0), caseEditrici.get(1), 2010)
    );

    public static void main(String[] args) {
        // stampa usando una lambda function
        System.out.println("------- funzione esplicita --------");
        autori.stream().forEach(autore -> System.out.println("Autore è " + autore));


        System.out.println("------- metod reference--------");
        // stampa usando un metod reference
        // esempio di reference metod in javascrip
        // const stampa = autore => console.log(autore);
        // autori.forEach(stampa);
        autori.stream().forEach(System.out::println);
        // equivalente a
        // System.out.println(autori.get(0));
        // System.out.println(autori.get(1));
        // System.out.println(autori.get(2));

        System.out.println("------- stampa libri --------");
        libri.stream().forEach(System.out::println);







    }



}
