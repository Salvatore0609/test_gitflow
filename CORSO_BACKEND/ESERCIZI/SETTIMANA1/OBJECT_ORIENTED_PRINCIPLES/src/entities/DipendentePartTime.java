package entities;

public class DipendentePartTime extends Dipendente {
	private double oreLavorate;

	public DipendentePartTime(double stipendio, Dipartimento dipartimento) {
		super(stipendio, dipartimento);
		this.oreLavorate = 0;
	}

	public void aggiungiOre(double ore) {
		if (ore > 0)
			this.oreLavorate += ore;
		else System.err.println("Non si può inserire un numero di ore lavorate negativo!");
	}

	@Override
	public double calculateSalary() {
		return oreLavorate * this.stipendio;
	}

	@Override
	public String toString() {
		return "Dipendente{" +
				"matricola=" + this.getMatricola() +
				", stipendio=" + this.calculateSalary() +
				", dipartimento=" + this.getDipartimento() +
				'}';
	}
}
