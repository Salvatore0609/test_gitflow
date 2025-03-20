package it.epicode;

import it.epicode.libri.Autore;
import it.epicode.libri.CasaEditrice;
import it.epicode.libri.Libro;

import java.util.List;

public class MainFlatMap {
    public static List<Libro> libriEconomici = MainForeach.libri;
    public static List<Libro> libriCostosi = MainForeach.libri2;
    public static List<Autore> autori = MainForeach.autori;
    public static List<CasaEditrice> caseEditrici = MainForeach.caseEditrici;

    public static void main(String[] args) {

        // creo flatmap di libri e libri1
        List<List<Libro>> libriList = List.of(libriCostosi, libriEconomici);

        System.out.println("------- flatmap di libri e libri1 --------");
        // stampo il flatmap
        // prendo lo stream di due liste di oggetti uguali  e le unisce in un unico stream
        // mette assieme liste diverse creandone una unica  econsentondo di usare ad esempio il filtro
        // esempio lista di ferrari e di lamborghine voglio trovare quelle prodotte nello stesso anno

        libriList.stream()
                // per ciascuna lista richiamo il metodo stream
                // per esempio
                // libriCostosi.stream()
                // libriEconomici.stream()
                .flatMap(List::stream)
                .forEach(System.out::println);

        List<Libro> elencoCompleto = libriList.stream()
                .flatMap(List::stream)
                .toList();

        // stampo l'elenco completo
        System.out.println("------- elenco completo --------");
        elencoCompleto.forEach(System.out::println);

        // l'elenco dei libri pubblicati nel 2010
        System.out.println("------- elenco libri pubblicati nel 2010 --------");
        elencoCompleto.stream()
                .filter(libro -> libro.getAnnoPubblicazione() == 2010)
                .forEach(System.out::println);

    }
}
