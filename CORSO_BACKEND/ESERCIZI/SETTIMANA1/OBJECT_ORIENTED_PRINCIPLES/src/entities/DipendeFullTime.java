package entities;

public class DipendeFullTime extends Dipendente {
	public DipendeFullTime(double stipendio, Dipartimento dipartimento) {
		super(stipendio, dipartimento);
	}

	@Override
	public double calculateSalary() {
		return this.stipendio;
	}

}
