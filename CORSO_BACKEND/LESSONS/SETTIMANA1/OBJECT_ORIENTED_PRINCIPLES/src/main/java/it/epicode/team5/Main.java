package it.epicode.team5;

import it.epicode.team1.Stampabile;
import it.epicode.team1.Stampe;
import it.epicode.team3.DipendentePartTime;
import it.epicode.team4.Ufficio;

public class Main {
    public static void main(String[] args) {
        Stampabile ufficio = new Ufficio("Ufficio", "Via Roma", "Roma");

        Stampe.stampaOggetto(ufficio);


        DipendentePartTime dipendentePT = new DipendentePartTime();
        dipendentePT.setNome("Mario");
        dipendentePT.setCognome("Rossi");
        dipendentePT.setMatricola("12345");


        Stampe.stampaOggetto(dipendentePT);


        Stampe.stampaCosto(ufficio);
        Stampe.stampaCosto(dipendentePT);

        System.out.println("----------------- stampa oggetti");

        Stampabile[] stampabili = {dipendentePT, ufficio};
        Stampe.stampaOggetto(stampabili);


    }
}
