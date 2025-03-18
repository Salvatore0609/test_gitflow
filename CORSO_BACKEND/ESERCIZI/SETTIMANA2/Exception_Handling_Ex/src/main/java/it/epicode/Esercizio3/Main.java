package it.epicode.esercizio3;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Scanner;

public class Main {
    private static final Logger logger =  LoggerFactory.getLogger(Main.class);
    public static void main(String[] args) {
        ContoCorrente contoCorrente = new ContoCorrente("mauro larese",1000);
        ContoOnline contoOnline = new ContoOnline("mauro larese",1000, 500);

        Scanner scanner = new Scanner(System.in);
        System.out.println("prelievo da Conto Corrente");
        while (true) {
            System.out.println("Quanto vuoi prelevare? scrivi 0 per terminare "+ contoCorrente.getSaldo());

            int prelievo = 0;
            try {
                prelievo = scanner.nextInt();
                if(prelievo == 0) break;
            } catch (Exception e) {
                logger.error("Devi inserire un numero");

                scanner.nextLine();
                continue;
            }

            try {
                contoCorrente.preleva(prelievo);
            } catch (BancaException e) {
                logger.error(e.getMessage());
            }

        }

        System.out.println("prelievo da Conto Corrente online");
        while(true) {
            System.out.println("Quanto vuoi prelevare? scrivi 0 per terminare "+ contoOnline.getSaldo());

            int prelievo = 0;
            try {
                prelievo = scanner.nextInt();
            } catch (Exception e) {
                logger.error("Devi inserire un numero");
                scanner.nextLine();
                continue;

            }

            if(prelievo == 0) break;

            try {
                contoOnline.preleva(prelievo);
                contoOnline.stampaSaldo();
            } catch (BancaException e) {
                logger.error(e.getMessage());
            }



        }
    }
}
