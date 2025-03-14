package esercizio.figure;

public class Main {


    public static void main(String[] args) {

        Triangolo triangolo = new Triangolo(10, 12);
        Triangolo triangolo1 = new Triangolo(20, 17);

        Stampe.stampa(triangolo);
        Stampe.stampa(triangolo1);


        Stampe.stampaDueTriangoli(triangolo, triangolo1);



    }
}
