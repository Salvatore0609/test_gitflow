package it.epicode;

public class TestArray {
    public static float calcolaAreaRettangolo(int base, int altezza){
        return base * altezza;
    }

    public static void stampaFattoria1(String[] fattoria) {
        System.out.println("Fattoria 1");
        System.out.println(fattoria[0]);
        System.out.println(fattoria[1]);
        System.out.println(fattoria[2]);
    }

    public static void stampaFattoria2(String[] fattoria) {
        System.out.println("Fattoria 2");
        System.out.println(fattoria[0]);
        System.out.println(fattoria[1]);
        System.out.println(fattoria[2]);
    }

    public static void main(String[] args) {


        int[] giorniDellaSettimana = new int[7];

        giorniDellaSettimana[0] = 1;
        giorniDellaSettimana[1] = 2;
        giorniDellaSettimana[2] = 3;
        giorniDellaSettimana[3] = 4;
        giorniDellaSettimana[4] = 5;
        giorniDellaSettimana[5] = 6;
        giorniDellaSettimana[6] = 7;


        String[] nomiGiorni = new String[7];
        nomiGiorni[0] = "Lunedì";
        nomiGiorni[1] = "Martedì";
        nomiGiorni[2] = "Mercoledì";
        nomiGiorni[3] = "Giovedì";
        nomiGiorni[4] = "Venerdì";
        nomiGiorni[5] = "Sabato";
        nomiGiorni[6] = "Domenica";

        String[] nomiMesi = {"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"};

        String[] fattoria = new String[3];
        fattoria[0] = "mucca";
        fattoria[1] = "cavallo";
        fattoria[2] = "pecora";

        String[] fattoria1 = new String[3];
        fattoria1[0]= fattoria[1];
        fattoria1[1]= fattoria[2];
        fattoria1[2]= fattoria[0];


        stampaFattoria1(fattoria);
        stampaFattoria2(fattoria1);



        System.out.println( TestArray.calcolaAreaRettangolo(12,5) );



    }
}
