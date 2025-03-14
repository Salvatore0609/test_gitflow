package u4.d2.es2;

public class Chiamata {
	private String numeroChiamato;
	private int durata;

	public Chiamata(String numChiamato, int durata) {
		this.numeroChiamato = numChiamato;
		this.durata = durata;
	}

	public String getNumeroChiamato() {
		return this.numeroChiamato;
	}

	public int getDurata() {
		return this.durata;
	}

}
