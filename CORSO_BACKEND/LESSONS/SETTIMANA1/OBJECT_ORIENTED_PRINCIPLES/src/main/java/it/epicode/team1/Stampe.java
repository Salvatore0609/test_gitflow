package it.epicode.team1;

public class Stampe {
    public static void stampaOggetto(Stampabile oggetto){
        if(oggetto!=null)
            oggetto.stampa();
    }

    public static void stampaOggetto(Stampabile[] oggetti) {
        for (int i = 0; i < oggetti.length; i++) {
           stampaOggetto(oggetti[i]);
        }
    }


    public static void stampaCosto(Stampabile oggetto){
        if(oggetto!=null)
            oggetto.stampaCosto();
    }

    public static void stampaCosto(Stampabile[] oggetti) {
        for (int i = 0; i < oggetti.length; i++) {
           stampaCosto(oggetti[i]);
        }
    }


}
