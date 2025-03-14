package it.epicode.automobili;

import it.epicode.automobili.test.AutoSperimentale;

public class TestAutomobile {
    public static void main(String[] args) {
        Automobile a1 = new Automobile("AB123CD");

        a1.setMarca("Fiat");
        a1.setModello("Panda");
        a1.setAnnoImmatricolazione(2010);
        a1.setCilindrata(1200);
        a1.setTipo(TipoAuto.ELETTRICA);

        Automobile a2 = new Automobile("CD456EF", "Ford", "Focus", 2015, 1600, TipoAuto.DIESEL);

        System.out.println(a1);
        System.out.println(a2);

        AutoSperimentale as = new AutoSperimentale();
        as.setMarca("Fiat");
        as.setModello("Panda");
        as.setAnnoImmatricolazione(2010);
        as.setCilindrata(1200);


    }
}
