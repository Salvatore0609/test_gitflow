package maurocode.visualizzazioni;

import maurocode.server.ElencoAuto;

public class ListaAutomobili {
    public static void mostraListaAutomobili() {
        System.out.println("Elenco automobili");
        System.out.println("-----------------");
        for (int i = 0; i < ElencoAuto.elencoAuto.length; i++) {
            if( ElencoAuto.elencoAuto[i]!=null)
                System.out.println(i + ". " + ElencoAuto.elencoAuto[i].getMarca() + " " + ElencoAuto.elencoAuto[i].getModello());
        }

    }
}
