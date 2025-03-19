package it.epicode.map;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // creazione di una mappautilizzando Map.of
        Map<String, Auto>  mappaAuto = Map.of(
            "AB123CD", new Auto("AB123CD", "Fiat", "Panda", 2010),
            "EF456GH", new Auto("EF456GH", "Ford", "Focus", 2015),
            "IJ789KL", new Auto("IJ789KL", "Renault", "Clio", 2018)
        );

        Map<String, Auto> rimessaAutomobilistica = new HashMap<>();
        // inserico un elemento all'interno della mappa tramite put
        // putt accetta due parametri la chiave e l'oggetto da inserire
        rimessaAutomobilistica.put("AB123CD", new Auto("AB123CD", "Fiat", "Panda", 2010));
        rimessaAutomobilistica.put("EF456GH", new Auto("EF456GH", "Ford", "Focus", 2015));
        rimessaAutomobilistica.put("IJ789KL", new Auto("IJ789KL", "Renault", "Clio", 2018));


        System.out.println("-------------------");
        System.out.println("Stampa rimessa automobilistico");
        // stampa della mappa
        System.out.println(rimessaAutomobilistica);
        // rimuovere un elemento dalla mappa
        rimessaAutomobilistica.remove("EF456GH");
        // stampa della mappa
        System.out.println("Dopo la rimozione di EF456GH");
        System.out.println(rimessaAutomobilistica);

        // recupero di un elemento dalla mappa
        // uso il metodo get a cui passo la chiave dell'elemento che voglio recuperare
        Auto auto = rimessaAutomobilistica.get("IJ789KL");

        System.out.println("Trovo l'elemento con targa IJ789KL: " + auto);

        // il for nelle mappe va fatto ciclando l'insieme delle chiavi che viene restituito dal metodo keySet

        System.out.println("-------------------");
        System.out.println("Stampa con ciclo for");
        for (String targa : rimessaAutomobilistica.keySet()) {
            // per ottenere l'oggetto auto devo usare il metodo get passando
            // la chiave che ho dichiarato nel ciclo  String targa
            System.out.println("Targa: " + targa);
            System.out.println("Auto: " + rimessaAutomobilistica.get(targa));
            System.out.println("-------------");
        }

        Set<String> chiavi = rimessaAutomobilistica.keySet();
        System.out.println("-------------------");
        System.out.println("Stampa set di chiavi");
        System.out.println(chiavi);

        ///  contralla se una chiave è presente nella mappa
        boolean eisteAB123CD =  rimessaAutomobilistica.containsKey("AB123CD");
        System.out.println("Esiste la chiave AB123CD: " + eisteAB123CD);

        boolean esisteAuto = rimessaAutomobilistica.containsValue(auto);
        System.out.println("Esiste l'auto cercata per valore: " + esisteAuto);

        // rimuovere tutti gli elementi dalla mappa
        rimessaAutomobilistica.clear();
        System.out.println("Dopo la clear");
        System.out.println(rimessaAutomobilistica);



    }
}
