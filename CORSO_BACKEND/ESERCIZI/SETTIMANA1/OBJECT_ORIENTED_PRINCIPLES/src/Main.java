import entities.*;
import interfaces.Worker;

import java.time.LocalDateTime;

public class Main {
	public static void main(String[] args) {
		Dirigente dirigenteAmministrativo = new Dirigente(Dipartimento.AMMINISTRAZIONE);
		DipendeFullTime fullTime = new DipendeFullTime(1500, Dipartimento.VENDITE);
		DipendentePartTime partTime = new DipendentePartTime(15, Dipartimento.PRODUZIONE);
		partTime.aggiungiOre(200);

		Dipendente[] arrayDipendenti = {dirigenteAmministrativo, fullTime, partTime};

		double totaleStipendi = 0;
		for (Dipendente dipendente : arrayDipendenti) {
			System.out.println(dipendente);
			totaleStipendi += dipendente.calculateSalary();
		}

		System.out.println(totaleStipendi);

		Volontario volontario = new Volontario("Pdor", 20, "Figlio di Kmer");
		Worker[] workers = {dirigenteAmministrativo, fullTime, partTime, volontario};

		for (Worker worker : workers) {
			worker.checkIn(LocalDateTime.now());
		}

	}
}