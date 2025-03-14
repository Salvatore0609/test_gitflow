package u4.d3;

import java.util.Scanner;

public class Main3 {
	public static void main(String[] args) {
		String input = "";

		Scanner scanner = new Scanner(System.in);
		do {
			System.out.println("Inserire una stringa seguita dal tasto Invio");
			input = scanner.nextLine();
			String[] caratteri = input.split("");
			System.out.println(String.join(",", caratteri));

		} while (!input.equals(":q"));
		scanner.close();
		System.out.println("Exit");
	}
}
