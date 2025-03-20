package it.epicode;

import it.epicode.libri.Autore;
import it.epicode.libri.CasaEditrice;
import it.epicode.libri.Libro;

import java.util.Comparator;
import java.util.List;

public class MainSort {
    public static List<Libro> libri = MainForeach.libri;
    public static List<Autore> autori = MainForeach.autori;
    public static List<CasaEditrice> caseEditrici = MainForeach.caseEditrici;

    public static void main(String[] args) {
        // stampo lista non ordinata
        System.out.println("------- libri non ordinati --------");
        libri.forEach(libro -> System.out.println(libro.getTitolo()));

        // ordino la lista dei libri per titolo
        System.out.println("------- libri ordinati per titolo --------");
        libri.stream()
                .sorted((libro1, libro2) -> libro1.getTitolo().compareTo(libro2.getTitolo()))
                .forEach(libro -> System.out.println(libro.getTitolo()));


        // ordino i libri usando la classe Comparator
        System.out.println("------- libri ordinati per autore con comparator --------");
        libri.stream()
                .sorted(Comparator.comparing(Libro::getTitolo))
                .forEach(libro -> System.out.println(libro.getTitolo()));

        // filtriamo i libri del 2010 e 2012 recuperiamo solo il titolo e mettiamo il risultato in ordine alfabetico
        System.out.println("------- libri del 2010 e 2012 ordinati per titolo --------");
        libri.stream()
                .filter(libro -> libro.getAnnoPubblicazione() == 2010 || libro.getAnnoPubblicazione() == 2012)
                .map(Libro::getTitolo)
                .sorted()
                .forEach(System.out::println);
    }

}
