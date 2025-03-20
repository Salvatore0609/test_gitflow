package it.epicode;

import it.epicode.libri.Autore;
import it.epicode.libri.CasaEditrice;
import it.epicode.libri.Libro;

import java.util.List;

public class MainFilter {
    public static List<Libro> libri = MainForeach.libri;
    public static List<Autore> autori = MainForeach.autori;
    public static List<CasaEditrice> caseEditrici = MainForeach.caseEditrici;

    public static void main(String[] args) {
        // lista dei libri con autore Rossi
        System.out.println("------- libri con autore Rossi --------");
        libri.stream()
                .filter(libro -> libro.getAutore().getCognome().equals("Rossi"))
                .forEach(System.out::println);

        // lista dei libri della casa editrice Mondadori
        System.out.println("------- libri della casa editrice Mondadori --------");
        libri.stream()
                .filter(libro -> libro.getCasaEditrice().getNome().equals("Mondadori"))
                .forEach(libro -> System.out.println(libro.getTitolo()));

        // limito la lista dei libri ai primi 2
        System.out.println("------- libri primi 2 --------");
        libri.stream()
                .limit(2)
                .forEach(libro -> System.out.println(libro.getTitolo()));
    }

}
