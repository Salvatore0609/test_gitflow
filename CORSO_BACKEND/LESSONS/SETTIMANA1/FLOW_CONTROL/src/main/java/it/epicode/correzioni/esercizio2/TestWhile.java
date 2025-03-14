package it.epicode.correzioni.esercizio2;

import java.util.Scanner;

public class TestWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Inserisci una stringa");


        boolean continua = true;
        while(continua) {
            String input = scanner.nextLine();
            if(input.equals(":q")) {
                continua = false;
            } else {

                for (int i = 0; i < input.length(); i++) {
                    System.out.print(input.charAt(i));
                    if(i<input.length()-1){
                        System.out.print(",");
                    }
                }


            }
        }


    }
}
