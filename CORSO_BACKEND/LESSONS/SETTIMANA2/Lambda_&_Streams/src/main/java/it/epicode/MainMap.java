package it.epicode;

import it.epicode.libri.Autore;
import it.epicode.libri.CasaEditrice;
import it.epicode.libri.Libro;

import java.util.List;

public class MainMap {
    public static List<Libro> libri = MainForeach.libri;
    public static List<Autore> autori = MainForeach.autori;
    public static List<CasaEditrice> caseEditrici = MainForeach.caseEditrici;

    public static void main(String[] args) {
        // lista dei nomi degli autori
        System.out.println("------- nomi degli autori inseriti nei libri--------");
        libri.stream()
                .map(libro-> libro.getAutore().getCognome())
                // distinct fa in modo che i cognomi degli autori non vengano ripetuti
                .distinct()
                .forEach(System.out::println);

        // recupero lo stream dei libri e mappo il titolo in un stream di stringhe
        // poi lo colleziono in un array list
        List<String> nomiLibri = libri.stream()
                .map(libro -> libro.getTitolo())
                // to list converte uno stream in una lista
                .toList();

        // stampa dei nomi dei libri
        System.out.println("------- nomi dei libri --------");
        nomiLibri.forEach(System.out::println);

        // recupero stream dei libri e mappo il titolo usando un metod reference
        // poi lo colleziono in un array list
        List<String> nomiLibri2 = libri.stream()
                .map(Libro::getTitolo)
                .toList();

        // stampa dei nomi dei libri
        System.out.println("------- nomi dei libri usando un metod reference --------");
        nomiLibri2.forEach(System.out::println);

        // aumento di 100 gli anni di pubblicazione dei libri

        System.out.println("------- aumento di 100 anni di pubblicazione dei libri --------");
         libri.stream()
                .map(libro -> {
                    libro.setAnnoPubblicazione(libro.getAnnoPubblicazione() + 100 );
                    return libro;
                })
                 .forEach(System.out::println);

    }
}
