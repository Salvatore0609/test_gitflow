package it.epicode.team3;

import it.epicode.team2.Dipendente;

public class TestDipendente {

    public static void print(Dipendente dipendente) {
        System.out.println(dipendente.stipendio());
    }

    public static void main(String[] args) {
        Dipendente dipendentePt = new DipendentePartTime();
        Dipendente dipendentePiva = new DipendetePiva(40,   15);


        DipendentePartTime dipendentePartTime1 = new DipendentePartTime();

        print(dipendentePartTime1);


    }

}
