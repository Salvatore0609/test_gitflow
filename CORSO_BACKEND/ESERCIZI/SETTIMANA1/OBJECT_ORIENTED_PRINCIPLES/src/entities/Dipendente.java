package entities;

import interfaces.Worker;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

public abstract class Dipendente implements Worker {
	protected final double stipendio;
	private final int matricola;
	private Dipartimento dipartimento;

	public Dipendente(double stipendio, Dipartimento dipartimento) {
		Random rndm = new Random();
		this.stipendio = stipendio;
		this.dipartimento = dipartimento;
		this.matricola = rndm.nextInt(10000, 99999);
	}

	public abstract double calculateSalary();

	public int getMatricola() {
		return matricola;
	}

	public Dipartimento getDipartimento() {
		return dipartimento;
	}

	public void setDipartimento(Dipartimento dipartimento) {
		this.dipartimento = dipartimento;
	}

	@Override
	public void checkIn(LocalDateTime time) {
		System.out.println("Sono un " + this.getClass().getSimpleName() + " e ho timbrato alle " + time.format(DateTimeFormatter.ISO_TIME));
	}

	@Override
	public String toString() {
		return "Dipendente{" +
				"matricola=" + matricola +
				", stipendio=" + stipendio +
				", dipartimento=" + dipartimento +
				'}';
	}
}
