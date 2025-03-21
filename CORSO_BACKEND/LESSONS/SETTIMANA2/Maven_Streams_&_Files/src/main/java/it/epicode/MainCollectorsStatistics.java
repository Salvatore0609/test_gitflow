package it.epicode;

import it.epicode.libri.Libro;
import it.epicode.libri.RandomData;

import java.util.DoubleSummaryStatistics;
import java.util.List;
import java.util.stream.Collectors;

public class MainCollectorsStatistics {
    public static List<Libro> libri = RandomData.libri;

    public static void main(String[] args) {

        // Utilizzo della classe Collectors per sommare i valori di un attributo
        // a seconda del tipo di attributo esistono i metodi summingInt, summingDouble, summingLong
        // somma dei prezzi dei libri
        double sommaPrezzi = libri.stream()
                .collect(Collectors.summingDouble(Libro::getPrezzo));

        System.out.println("-----------------");
        System.out.println("Somma dei prezzi dei libri");
        System.out.println("-----------------");

        System.out.println(sommaPrezzi);

        // somma del numero di pagine del libro
        int sommaPagine = libri.stream()
                .collect(Collectors.summingInt(Libro::getNumeroPagine));

        System.out.println("-----------------");
        System.out.println("Somma delle pagine dei libri");
        System.out.println("-----------------");

        System.out.println(sommaPagine);

        // Utilizzo della classe Collectors per calcolare la media di un attributo
        // a seconda del tipo di attributo esistono i metodi averagingInt, averagingDouble, averagingLong

        Double mediaDeiPrezzi = libri.stream()
                .collect(Collectors.averagingDouble(Libro::getPrezzo));

        System.out.println("-----------------");
        System.out.println("Media dei prezzi dei libri");
        System.out.println("-----------------");

        System.out.println(mediaDeiPrezzi);

        // Utilizzo della classe Collectors per ottenere una stringa separata da virgole dei titoli dei libri
        String titoli = libri.stream()
                .map(Libro::getTitolo)
                .collect(Collectors.joining(", "));

        System.out.println("-----------------");
        System.out.println("Titoli dei libri separati da virgole");
        System.out.println("-----------------");

        System.out.println(titoli);

        // ottenere una mappa di int, long, double tramite funzioni mapToInt, mapToDouble, mapToLong
        // questi metodi funzionano come il map, ma  restituiscono sicuramente uno stream numerico
        // per questo motivo questi metodi hanno poi altre funzionalità numeriche  statistiche come
        // somma, media, min, max e conteggio = numero di elementi dello stream


        // otteniamo la somma dei prezzi dei libri
        double sommaPrezzi2 = libri.stream()
                .mapToDouble(Libro::getPrezzo)
                .sum();

        System.out.println("-----------------");
        System.out.println("Somma dei prezzi dei libri");
        System.out.println("-----------------");

        System.out.println(sommaPrezzi2);

        // otteniamo tutti i dati statistici dopo un mapDouble
        // DoubleSummaryStatistics è un oggetto complesso che contiene tutte le statistiche
        // necessarie. In un'unica istruzione avete tutte le statistiche necessarie
        DoubleSummaryStatistics stats = libri.stream()
                .mapToDouble(Libro::getPrezzo)
                .summaryStatistics();

        System.out.println("-----------------");
        System.out.println("Dati statistici sui prezzi dei libri");
        System.out.println("-----------------");

        System.out.println("Media: " + stats.getAverage());
        System.out.println("Somma: " + stats.getSum());
        System.out.println("Minimo: " + stats.getMin());
        System.out.println("Massimo: " + stats.getMax());
        System.out.println("Numero di elementi: " + stats.getCount());


    }
}
