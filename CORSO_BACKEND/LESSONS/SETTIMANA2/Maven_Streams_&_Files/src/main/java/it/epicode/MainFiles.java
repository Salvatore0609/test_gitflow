package it.epicode;

import it.epicode.libri.Autore;
import it.epicode.libri.RandomData;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class MainFiles {
    public static List<Autore> autori = RandomData.autori;
    public static void main(String[] args) {

        // creazione di un file di testo
        File file = new File("archivio/test.txt");
        String contenutoFile = "Log di sistema salvato con file utils";

        try {
            FileUtils.writeStringToFile( file, contenutoFile, "UTF-8");
        } catch (IOException e) {
            System.out.println("errore: " + e.getMessage());
        }

        // lettura di un file di testo, usiamo sempre la stessa dichiarazione di file

        try {
            String fileLetto = FileUtils.readFileToString(file, "UTF-8");
            System.out.println("--- file letto ---");
            System.out.println(fileLetto);
        } catch (IOException e) {
            System.out.println("errore: " + e.getMessage());
        }

        // creazione di una cartella
        File cartellaSrc = new File("archivio/src");
        cartellaSrc.mkdir();

        // cancellazione cartella
        try {
            FileUtils.deleteDirectory( cartellaSrc);
        } catch (IOException e) {
            System.out.println("errore: " + e.getMessage());
        }

        // creare un file di testo che contiene tutti gli autori della libreria per poi andarli a rileggere.
        // il formato di salvataggio sarà tutti gli attributi separati da ; ogni libro separato da #
        // esempio del risultato
        //   mario;rossi#luca;bianchi#paolo;verdi

        String stringaAutori =  autori.stream()
                .map( a -> a.getNome() + ";" + a.getCognome())
                .collect(Collectors.joining("#"));

        File fileAutori = new File("archivio/autori.txt");

        try {
            FileUtils.writeStringToFile( fileAutori, stringaAutori, "UTF-8");
        } catch (IOException e) {
            System.out.println("errore: " + e.getMessage());
        }

        // leggo da file l'elenco degli autori nel formato
        //   mario;rossi#luca;bianchi#paolo;verdi

        try {
            String autoriLetti = FileUtils.readFileToString(fileAutori, "UTF-8");
            List<Autore> autoriLettiDaFile = new ArrayList<>();
            // divido   mario;rossi#luca;bianchi#paolo;verdi
            // in tante stringhe
            // mario;rossi
            // luca;bianchi
            // paolo;verdi
            String[] autoriStringa = autoriLetti.split("#");

            // ciclo l'array contenente tutti gli autori in formato stringa
            for (int i = 0; i < autoriStringa.length; i++) {
                // la variabile autore contiene nel primo indice il nome e nel secondo il cognome
                // i valori recuperati nell'array vengono usati tramite costruttore
                // per creare una classe autore
                String[] autore = autoriStringa[i].split(";");
                Autore autoreCreatoDaArray = new Autore(autore[0], autore[1]);
                autoriLettiDaFile.add(autoreCreatoDaArray);
            }

            System.out.println("--- autori letti da file ---");
            autoriLettiDaFile.forEach(System.out::println);


        } catch (IOException e) {
            System.out.println("errore: " + e.getMessage());
        }



    }
}
