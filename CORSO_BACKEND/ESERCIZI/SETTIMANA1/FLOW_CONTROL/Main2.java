package u4.d3;

import java.util.Scanner;

public class Main2 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		int test = scan.nextInt();
		System.out.println(stampaNumero(test));
		scan.close();

	}

	public static String stampaNumero(int num) {
		String risultato;
		switch (num) {
		case 0: {
			risultato = "zero";
			break;
		}
		case 1: {
			risultato = "uno";
			break;
		}
		case 2: {
			risultato = "due";
			break;
		}
		case 3: {
			risultato = "tre";
			break;
		}
		default:
			risultato = "Numero non compreso tra 0 e 3, impossibile convertire";
		}
		return risultato;
	}

}
