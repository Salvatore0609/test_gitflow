package it.epicode.Esercizio1;

import it.epicode.Esercizio1.classi.ArrayUpdateProgram;
import it.epicode.Esercizio1.exceptions.InvalidNumException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Scanner;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        ArrayUpdateProgram program = new ArrayUpdateProgram();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            try {
                System.out.print("Inserisci il numero (0 per uscire): ");
                int number = scanner.nextInt();


                if (number == 0) {
                    logger.info("L'utente ha scelto di uscire dal programma.");
                    System.out.println("Exiting program.");
                    break;
                }

                System.out.print("Invia una posizione: ");
                int position = scanner.nextInt();


                program.updateArray(number, position);

            } catch (InvalidNumException e) {
                logger.error("Invalid input: {}", e.getMessage());
                System.out.println("Error: " + e.getMessage());
            } catch (Exception e) {
                logger.error("Invalid input detected: {}", e.getMessage());
                System.out.println("Error: Invalid input. Please enter valid integers.");
                scanner.nextLine(); // Pulisce il buffer dello scanner
            }
        }
        scanner.close();
    }
}