public class Main {
    public static void main(String[] args) {

        System.out.println("Hello, World!");
        System.out.println("ciao");
        //-------------------------------TIPI PRIMITIVI----------------
        boolean myBoolean = true;
        myBoolean = false;

        //NUMERI INTERI
        byte numeroPiccolo = 100; //numeri da -128 a +127
        short numeroMedio = 1000; // numeri da -32768 a +32767
        int numeroIntero = 1000000; //numeri abbastanza grandi
        long numeroMoltoGrande = 1000000000; //numero molto grandi


        //NUMERI DECIMALI
        float numDecimale = 0.6f;
        double altroNumDecimale = 0.6; //entrambi rappresentano numeri decimali, però best is double

        //STRINGHE
        char singoloCarattere = 'A'; //per memorizzare un singolo carattere meglio utilizzare i char
        String testo = "Ciao a tutti"; //perforza apici doppi
        System.out.println("la lunghezza della stringa è : " + testo.length());

        //ARRAYS
        /*
        String[] names = new String[5]; //array di 5 elementi non inizializzato (tutti null)
        names[0] ="Andrea";
        names[1] ="Marco";
        */
        String[] names = {"Andrea", "Alberto", "Marco", "Barbara", "Salvatore"}; //Array di 5 elementi già inizializzato
        System.out.println("il primo elemento dell'array è : " + names[0]);
        System.out.println("il primo elemento dell'array è : " + names[1]);
        System.out.println("il primo elemento dell'array è : " + names[2]);
        System.out.println("il primo elemento dell'array è : " + names[3]);
        System.out.println("il primo elemento dell'array è : " + names[4]);

        //---------------------OPERATORI ARITMETICI-------------------------
        System.out.println(2+2);
        System.out.println(2-2);
        System.out.println(2*2);
        System.out.println(2/2);
        System.out.println(2%2);

        int i = 0;
        System.out.println(i++); //stampa 0 e incrementa
        System.out.println(i); //stampa 1
        System.out.println(++i); //incrementa e stampa 2
        System.out.println(i); //stampa 2

        System.out.println(i--); //stampa 2 e decrementa
        System.out.println(i); //stampa 1
        System.out.println(--i); //decrementa e stampa 0
        System.out.println(i); //stampa 0

        //OPERATORE DI UGUAGLIANZA/DISUGUAGLIANZA E COMPARAZIONE
        int i1 = 1;
        int i2 = 2;
        System.out.println(i1 == i2);
        System.out.println(i1 != i2);
        System.out.println(i1 > i2);
        System.out.println(i1 < i2);
        System.out.println(i1 >= i2);
        System.out.println(i1 <= i2);

        //OPERATORI CONDIZIONALI
        boolean a = true;
        boolean b = false;
        boolean c = true;
        boolean d = false;
        System.out.println(a && c); //essendo entrambi true, AND ci ritorna true
        System.out.println(a && b); // essendo uno true e uno false, AND ci ritorna false
        System.out.println(b && a); // uguale a sopra
        System.out.println(b && d); // uguale alla prima

        System.out.println(a || c); // true
        System.out.println(a || b); // true
        System.out.println(b || a); // true
        System.out.println(b || d); // false

        System.out.println(!a); //false
        System.out.println(!b); //true

        int I = 0;
        I += 5;
        System.out.println(I); // 5
        I -= 2;
        System.out.println(I); // 3
        I *= 2;
        System.out.println(I); // 6
        I /= 2;
        System.out.println(I); // 3
        I %= 2;
        System.out.println(I); // 1

    }
}