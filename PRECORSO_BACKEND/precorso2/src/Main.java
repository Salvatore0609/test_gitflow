import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        /*System.out.println("---------------IF ELSE-------------------");

        System.out.println("inserisci il primo numero");
        int x = scanner.nextInt();
        System.out.println("inserisci il secondo numero");
        int y = scanner.nextInt();*/

        /*if (x > y) {
            System.out.println("x è maggiore di y");
        } else {
            System.out.println("x non è maggiore di y");
        }*/

        /*if (x > y) {
            System.out.println("x è maggiore di y");
        } else if(x == y) {
            System.out.println("i due numeri sono uguali");
        }else {
            System.out.println("x non è maggiore di y");
        }*/


        /*System.out.println("---------------SWITCH CASE-------------------");

        System.out.println("inserisci un numero da 1 a 7");
        int day = scanner.nextInt();

        String lett = "";
        switch (day) {
            case 1:
                lett = "Lun";
                break;
            case 2:
                lett = "Mar";
                break;
            case 3:
                lett = "Mer";
                break;
            case 4:
                lett = "Gio";
                break;
            case 5:
                lett = "Ven";
                break;
            case 6:
                lett = "Sab";
                break;
            case 7:
                lett = "Dom";
            default:
                lett = "numero inserito non valido";
                break;
        }

        System.out.println("il numero inserito corrisponde al giorno: " +  lett);*/

        /*System.out.println("---------------WHILE-------------------");*/

        /*int i = 1;
        int sum = 0;

        while(i <= 5){
            sum += i;
            i++;
            System.out.println(sum);
        }

        System.out.println("La somma è: " + sum);*/

        /*int sum = 0;
        int number;

        System.out.println("inserisci i numeri da sommare, 0 per terminare");

        while(true){
            System.out.println("inserisci un numero");
            number = scanner.nextInt();

            if(number == 0) break;

            sum += number;
        }

        System.out.println("la somma è: " + sum);*/

        /*System.out.println("---------------DO WHILE-------------------");

        int number;

        do {
            System.out.println("inserisci un numero maggiore di 0");
            number = scanner.nextInt();
        } while (number <= 0);

        System.out.println("il numero inserito è: " + number);*/

        System.out.println("---------------FOR-------------------");

        int[] numbers = new int[5];

        for(int i = 0; i < numbers.length; i++){
            System.out.println("inserisci un numero");
            numbers[i] = scanner.nextInt();

        }

        System.out.println("stampiamo gli elementi degll'array");

        for(int i = 0; i < numbers.length; i++){
            System.out.println(numbers[i]);
        }
    }
}