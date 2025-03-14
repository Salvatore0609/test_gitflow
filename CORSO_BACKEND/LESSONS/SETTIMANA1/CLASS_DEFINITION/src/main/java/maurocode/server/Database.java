package maurocode.server;

import it.epicode.automobili.TipoAuto;
import maurocode.componenti.Automobile;

public class Database {
    public static void inizializzaDatabase() {
        ElencoAuto.elencoAuto[1] = new Automobile("Fiat", "Panda", "2005", 2000, 3000, TipoAuto.DIESEL);
        ElencoAuto.elencoAuto[2] = new Automobile("Ford", "Fiesta", "2010", 2000,3000, TipoAuto.ELETTRICA);
        ElencoAuto.elencoAuto[3] = new Automobile("Ford", "Focus", "2015", 2010,3000, TipoAuto.IBRIDA);
    }
}
