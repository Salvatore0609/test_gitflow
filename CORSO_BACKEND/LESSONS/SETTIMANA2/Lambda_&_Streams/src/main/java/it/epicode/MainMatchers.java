package it.epicode;

import it.epicode.libri.Autore;
import it.epicode.libri.CasaEditrice;
import it.epicode.libri.Libro;

import java.util.List;

public class MainMatchers {
    public static List<Libro> libri = MainForeach.libri;
    public static List<Autore> autori = MainForeach.autori;
    public static List<CasaEditrice> caseEditrici = MainForeach.caseEditrici;

    public static void main(String[] args) {
        // voglio verificare se esiste un libro bubblicato nel 2010
        System.out.println("------- esiste un libro pubblicato nel 2010 --------");
        boolean esisteUnLibroDel2010 = libri.stream()
                .anyMatch(libro -> libro.getAnnoPubblicazione() == 2010);
        System.out.println(esisteUnLibroDel2010);

        // verificare che esiste un titolo Il signore degli anelli
        System.out.println("------- esiste un libro con titolo Il signore degli anelli --------");
        boolean esisteUnLibroConTitolo = libri.stream()
                .anyMatch(libro -> libro.getTitolo().equals("Il signore degli anelli"));
        System.out.println(esisteUnLibroConTitolo);

        // verificare se esite un libro che contenga la parola il
        System.out.println("------- esiste un libro che contenga la parola 'Il' --------");
        boolean esisteUnLibroCheContengaLaParolaIl = libri.stream()
                .anyMatch(libro -> libro.getTitolo().contains("Il"));
        System.out.println(esisteUnLibroCheContengaLaParolaIl);



        // voglio verificare se tutti i libri sono stati pubblicati nel 2010
        System.out.println("---- tutti i libri sono stati pubblicati nel 2010");
        boolean tuttiILibriSonoDel2010 = libri.stream()
                .allMatch(libro -> libro.getAnnoPubblicazione() == 2010);
        System.out.println(tuttiILibriSonoDel2010);


    }
}
