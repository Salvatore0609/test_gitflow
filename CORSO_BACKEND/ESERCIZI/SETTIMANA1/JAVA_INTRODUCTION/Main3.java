package u4.d1;

import java.util.Scanner;

public class Main3 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String[] inputStrings = new String[3];
		System.out.println("Insert first string then Enter");
		inputStrings[0] = scan.nextLine();
		System.out.println("Insert second string then Enter");
		inputStrings[1] = scan.nextLine();
		System.out.println("Insert third string then Enter");
		inputStrings[2] = scan.nextLine();

		System.out.println("Here the strings concatenated");
		System.out.println(inputStrings[0] + inputStrings[1] + inputStrings[2]);

		System.out.println("Here they are in reverse order");
		System.out.println(inputStrings[2] + inputStrings[1] + inputStrings[0]);
		scan.close();
	}
}
