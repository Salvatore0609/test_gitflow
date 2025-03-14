package esercizio.figure;

public class Stampe {
    public static void stampa(Triangolo triangolo){
        System.out.println("Area="+triangolo.area());
        System.out.println("Perimetro="+triangolo.perimetro());

    }

    public static void stampaDueTriangoli(Triangolo triangolo1, Triangolo triangolo2){
        System.out.println("Area1="+triangolo1.area());
        System.out.println("Area2="+triangolo2.area());
        System.out.println("Somma Areae="+(triangolo2.area()+triangolo1.area())  );


        System.out.println("Perimetro1="+triangolo1.perimetro());
        System.out.println("Perimetro2="+triangolo2.perimetro());
        System.out.println("Somma Perimetri="+(triangolo2.perimetro()+triangolo1.perimetro())  );


    }

}
