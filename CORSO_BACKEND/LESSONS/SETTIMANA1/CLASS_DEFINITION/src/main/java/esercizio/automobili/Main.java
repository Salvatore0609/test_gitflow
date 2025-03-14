package esercizio.automobili;

public class Main {
    public static void main(String[] args) {
        Automobile automobile = new Automobile();
        automobile.setMarca("Fiat");
        automobile.setModello("500");
        automobile.setAnno(2021);
        automobile.setPrezzo(12000.0);

        Allestimento allestimento = new Allestimento();
        allestimento.setNome("Sport");
        allestimento.setDescrizione("Allestimento sportivo");
        allestimento.setPrezzo(1500.0);


        Allestimento allestimento1 = new Allestimento();
        allestimento1.setNome("Lusso");
        allestimento1.setDescrizione("Allestimento lusso");
        allestimento1.setPrezzo(2000.0);


        automobile.getAllestimento()[0] = allestimento;
        automobile.getAllestimento()[1] = allestimento1;


    }
}
