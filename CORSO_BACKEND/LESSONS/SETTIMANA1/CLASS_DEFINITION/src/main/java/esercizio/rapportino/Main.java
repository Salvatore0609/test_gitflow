package esercizio.rapportino;

public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente("Mario", "Rossi", "Via Roma 1", "1234567890");
        Tecnico tecnico = new Tecnico("Luca", "Verdi");
        Lavoro lavoro = new Lavoro("Pulizia tubi", 21.0, 1);
        Lavoro lavoro2 = new Lavoro("Cambio filtro ", 24.0, 1);

        Rapportino rapportino = new Rapportino();
        rapportino.setData("2021-06-01");
        rapportino.setNumero(1);
        rapportino.setCliente(cliente);
        rapportino.setTecnico(tecnico);
        rapportino.getLavori()[0] = lavoro;
        rapportino.getLavori()[1] = lavoro2;



    }
}
