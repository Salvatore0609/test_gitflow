package it.epicode;

import it.epicode.libri.Libro;
import it.epicode.libri.RandomData;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public class MainCollectors {
    public static List<Libro> libri = RandomData.libri;
    public static Set<Libro> libriSet = RandomData.libriSet;

    public static void main(String[] args) {
        // Utilizzo della classe Collectors per trasformae uno stream in una lista
        List<Libro> libriFiltrati = libri.stream()
                .limit(2)
                .collect(Collectors.toList());

        System.out.println("-----------------");
        System.out.println("Lista di libri filtrati");
        System.out.println("-----------------");
        libriFiltrati.forEach(System.out::println);

        // Utilizzo della classe Collectors per trasfore uno stream in una set
        // a differenza del toList, nel caso in cui lo stream abbia dei dupplicati
        // verrà inserito nel set solo uno dei valori
        // il confronto, a meno che non si tratti di primitive, avviene tramite equals
        // libri è un List
        Set<Libro> libriSet = libri.stream()
                .limit(4)
                .collect(Collectors.toSet());


        System.out.println("-----------------");
        System.out.println("Set di libri filtrati");
        System.out.println("-----------------");
        libriSet.forEach(System.out::println);


        // trasformiamo lo stream in un mappa che ha come chiave il titolo
        // e come valore il libro

        Map<String, Libro> mappaLibri = libri.stream()
                .collect(Collectors.toMap(Libro::getTitolo, l -> l));

        System.out.println("-----------------");
        System.out.println("Mappa di libri");
        System.out.println("-----------------");
        mappaLibri.forEach((k,v) -> System.out.println(k + " -> " + v));


        Map<String,Double> mappaPrezzi = libri.stream()
                .collect(Collectors.toMap(Libro::getTitolo, Libro::getPrezzo));

        System.out.println("-----------------");
        System.out.println("Mappa di prezzi");
        System.out.println("-----------------");
        mappaPrezzi.forEach((k,v) -> System.out.println(k + " -> " + v));

        // Utilizzo della classe Collectors con il goupingby
        // il risultato sarà una mappa avente per chiave (in questo esempio) il nome dell'autore
        // e come valore la lista dei libri di quell'autore
        Map<String, List<Libro>> libriPerAutore = libri.stream()
                //  la funzione lambda restituisce l attributo su cui fare il raggruppamentpo
                .collect(Collectors.groupingBy(l -> l.getAutore().getNome()));

        System.out.println("-----------------");
        System.out.println("Libri per autore");
        System.out.println("-----------------");
        libriPerAutore.forEach((k,v) -> {
            // titolo
            System.out.println("--- Autore: " + k + " ---");

            // lista di libri
            System.out.println("-------- Libri ---------");
            v.forEach(l-> System.out.println(l.getTitolo()));
            System.out.println("------------------------");
        });

        // raggruppamento in base al prezzo
        Map<Double, List<Libro>> libriPerPrezzo = libri.stream()
                .collect(Collectors.groupingBy(l -> l.getPrezzo()));

        System.out.println("-----------------");
        System.out.println("Libri per prezzo");
        System.out.println("-----------------");
        libriPerPrezzo.forEach((k,v) -> {
            // prezzo
            System.out.println("--- Prezzo: " + k + " ---");

            // lista di libri
            System.out.println("-------- Libri ---------");
            v.forEach(l-> System.out.println(l.getTitolo()));
            System.out.println("------------------------");
        });

        // raggruppamento in base ad una fascia di prezzo
        Map<String, List<Libro>> libriPerFasciaPrezzo = libri.stream()
                .collect(Collectors.groupingBy(l -> {
                    if(l.getPrezzo()<20) return "da 1 a 19 euro";
                    else return "da 20 euro in su";
                }));

        System.out.println("-----------------");
        System.out.println("Libri per fascia di prezzo");
        System.out.println("-----------------");
        libriPerFasciaPrezzo.forEach((k,v) -> {
            // prezzo
            System.out.println("--- Fascia: " + k + " ---");

            // lista di libri
            System.out.println("-------- Libri ---------");
            v.forEach(l-> System.out.println(l.getTitolo()));
            System.out.println("------------------------");
        });

        // dividere in due parti uno stream in base ad un criterio
        // il risultato sarà una mappa con due liste, una con i libri che soddisfano il predicato

        Map<Boolean, List<Libro>> libriPartizionatiInBaseAlPrezzo20 = libri.stream()
                .collect(Collectors.partitioningBy(l -> l.getPrezzo() < 20));

        System.out.println("-----------------");
        System.out.println("Libri partizionati in base al prezzo");
        System.out.println("-----------------");

        libriPartizionatiInBaseAlPrezzo20.forEach((k,v) -> {
            // prezzo
            System.out.println("--- fascia < 20 " + k);

            // lista di libri
            System.out.println("-------- Libri ---------");
            v.forEach(l-> System.out.println(l.getTitolo()));
            System.out.println("------------------------");
        });

    }





}
