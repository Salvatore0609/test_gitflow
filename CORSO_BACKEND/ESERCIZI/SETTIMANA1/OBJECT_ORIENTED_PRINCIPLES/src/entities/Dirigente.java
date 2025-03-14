package entities;

public class Dirigente extends Dipendente {
	public Dirigente(Dipartimento dipartimento) {
		super(10000, dipartimento);
	}

	@Override
	public double calculateSalary() {
		return this.stipendio;
	}
}
