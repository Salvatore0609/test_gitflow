package it.epicode.Esercizio3;

import it.epicode.Esercizio3.classi.ContoCorrente;
import it.epicode.Esercizio3.classi.ContoOnLine;
import it.epicode.Esercizio3.exceptions.BancaException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Scanner;

public class Main {

    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Creazione di un ContoCorrente e un ContoOnLine
        ContoCorrente conto1 = new ContoCorrente("Mario Rossi", 1000);
        ContoOnLine conto2 = new ContoOnLine("Luigi Verdi", 2000, 500);

        while (true) {
            try {
                System.out.println("\nScegli un'opzione:");
                System.out.println("1. Preleva da ContoCorrente");
                System.out.println("2. Preleva da ContoOnLine");
                System.out.println("3. Esci");
                System.out.print("Scelta: ");
                int scelta = scanner.nextInt();

                if (scelta == 3) {
                    System.out.println("Uscita dal programma.");
                    break;
                }

                System.out.print("Inserisci l'importo da prelevare: ");
                double importo = scanner.nextDouble();

                switch (scelta) {
                    case 1:
                        conto1.preleva(importo);
                        System.out.println("Prelievo effettuato con successo. Nuovo saldo: " + conto1.restituisciSaldo());
                        break;
                    case 2:
                        conto2.preleva(importo);
                        System.out.println("Prelievo effettuato con successo. Nuovo saldo: " + conto2.restituisciSaldo());
                        break;
                    default:
                        System.out.println("Scelta non valida.");
                }

            } catch (BancaException e) {
                logger.error("Errore durante il prelievo: {}", e.getMessage());
                System.out.println("Errore: " + e.getMessage());
            } catch (Exception e) {
                logger.error("Errore generico: {}", e.getMessage());
                System.out.println("Errore: Input non valido.");
                scanner.nextLine(); // Pulisce il buffer dello scanner
            }
        }

        scanner.close();
    }
}
