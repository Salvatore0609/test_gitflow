package it.epicode.list;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        // gestire una lista di numeri interi

        // corrispondenza variabili primitive - oggetti wrapper
        // int = Integer
        // boolean = Boolean
        // char = Character
        // double = Double
        // float = Float
        // long = Long
        // short = Short
        // byte = Byte

        // dichiarazione arrayLit
        List<Integer> listaInteri = new ArrayList<>();

        // crea una lista partendo da numeri passati nel costruttore
        List<Integer> listaInteri2 = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

        // aggiungiamo0 elementi all'arraylist
        listaInteri.add(2);
        listaInteri.add(3);
        listaInteri.add(4);
        listaInteri.add(5);
        boolean inserito = listaInteri.add(2);

        System.out.println("------------------- ho inerito il 2 ");
        System.out.println("Elemento inserito: " + inserito);


        // stampiamo la lista
        System.out.println("------------------- stampa lista dopo inserimento 2 ");
        System.out.println("Stampa lista: " + listaInteri);

        // il size() restituisce il numero di elementi della lista
        System.out.println("------------------- stampa con ciclo for e get ");
        for (int i = 0; i < listaInteri.size(); i++) {
            // il metodo get() restituisce l'elemento in posizione i
            // array[i] -> listaInteri.get(i)
            System.out.println("Elemento in posizione " + i + ": " + listaInteri.get(i));
        }

        // aggiungere un dato in una poizione che non sia l'ultima
        listaInteri.add(2, 10);
        System.out.println("Stampa lista dopo inserimento 10 in posizione 2: " + listaInteri);

        // rimozione di un elemento dalla lista
        listaInteri.remove(2);
        System.out.println("Stampa lista dopo rimozione elemento in posizione 2: " + listaInteri);

        // controllo se un elemento è contenuto nella lista
        boolean contiene = listaInteri.contains(10);
        System.out.println("La lista contiene 10: " + contiene);


        contiene = listaInteri.contains(2);
        System.out.println("La lista contiene 2: " + contiene);

        // sosttituzione di un elemento
        // indice, elemento
        listaInteri.set(1, 20);
        System.out.println("Stampa lista dopo sostituzione elemento in posizione 1 con 20: " + listaInteri);

        // inverte l'ordine degli elementi
       List reversed =  listaInteri.reversed();
       System.out.println("Stampa lista dopo inversione: " + reversed);


        // rimozione di tutti gli elementi
        listaInteri.clear();
        System.out.println("Stampa lista dopo rimozione di tutti gli elementi: " + listaInteri);
        // controllo se la lista è vuota
        listaInteri.isEmpty();
        System.out.println("Controllo se la lista è vuota: " + listaInteri.isEmpty());



    }

}
