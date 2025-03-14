package u4.d2.es2;

public class Main2 {

	public static void main(String[] args) {
		Sim sim1 = new Sim("+39 3494278804");
		sim1.aggiungiCredito(20);

		Chiamata[] listaChiamate = new Chiamata[5];
		listaChiamate[0] = new Chiamata("+39 3494278805", 20);
		listaChiamate[1] = new Chiamata("+39 3494278805", 1);
		listaChiamate[2] = new Chiamata("+39 3494275405", 7);
		listaChiamate[3] = new Chiamata("+39 3494278876", 1);
		listaChiamate[4] = new Chiamata("+39 3494272358", 13);
		sim1.setListaChiamate(listaChiamate);
		sim1.stampaDati();

	}

}
