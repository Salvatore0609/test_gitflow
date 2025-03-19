package it.epicode.set;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // set di elementi interi
        // usiamo il et per evitare duplicati

        Set<Integer> setInteri = new HashSet<>();


        Set<Integer> setInteri2 = new HashSet<>( Set.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)  );
        // equivalente
        // setInteri2.add(2);
        // setInteri2.add(3);
        // setInteri2.add(4);
        // ...

        boolean ins2 = setInteri.add(2);
        System.out.println("Elemento 2 inserito: " + ins2);

        ins2 = setInteri.add(2);
        System.out.println("Elemento 2 inserito: " + ins2);


        boolean ins3 = setInteri.add(3);
        System.out.println("Elemento 3 inserito: " + ins3);

        setInteri.add(7);
        setInteri.add(13);
        System.out.println("Elementi del set: " + setInteri);


        System.out.println("Stampo gli elementi in un ciclo for-each");
        // ciclo for-each
        // (numeroCorrente) => console.log(numeroCorente)
        for (Integer numeroCorrente : setInteri) {
            System.out.println(numeroCorrente);
        }

        // cancello dalla lista il numero 7
        setInteri.remove(7);
        System.out.println("Elementi del set dopo la rimozione del 7: " + setInteri);

        boolean contiene13 = setInteri.contains(13);
        System.out.println("Il set contiene il 13: " + contiene13);
        // numero di elementi dentro il set
        int numeroElementi = setInteri.size();
        System.out.println("Numero di elementi nel set: " + numeroElementi);

        // cancello tutta la lista
        setInteri.clear();
        System.out.println("Elementi del set dopo la clear: " + setInteri);

    }
}
