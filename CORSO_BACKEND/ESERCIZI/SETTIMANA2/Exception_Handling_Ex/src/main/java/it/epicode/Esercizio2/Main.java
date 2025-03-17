package it.epicode.Esercizio2;

import it.epicode.Esercizio2.excpetions.DivisioneExcteption;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Scanner;

public class Main {

    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Input km percorsi
            System.out.print("Inserisci i km percorsi: ");
            double km = scanner.nextDouble();

            // Input litri consumati
            System.out.print("Inserisci i litri di carburante consumati: ");
            double litri = scanner.nextDouble();

            // Calcola km/litro
            if (litri == 0) {
                throw new DivisioneExcteption("Divisione per zero non consentita.");
            }
            double kmPerLitro = km / litri;
            logger.info("Calcolo effettuato: {} km / {} litri = {} km/litro", km, litri, kmPerLitro);
            System.out.println("Km/litro percorsi: " + kmPerLitro);

        } catch (DivisioneExcteption e) {
            logger.error("Errore di divisione per zero: {}", e.getMessage());
            System.out.println("Errore: " + e.getMessage());
        } catch (Exception e) {
            logger.error("Errore di input: {}", e.getMessage());
            System.out.println("Errore: Input non valido. Inserisci numeri corretti.");
        }
    }
}
