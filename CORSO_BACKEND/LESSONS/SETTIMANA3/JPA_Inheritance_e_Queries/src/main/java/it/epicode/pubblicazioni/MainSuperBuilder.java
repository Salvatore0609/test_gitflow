package it.epicode.pubblicazioni;

public class MainSuperBuilder {
    public static void main(String[] args) {

        // lombok ha un annotazione SuperBuilder che permette di creare un builder per una classe che estende un'altra classe
        // evitando la creazione di un costruttore con tutti i campi sia del figlio che del padre
        Libro libro = Libro.builder()
                .numeroPagine(200)
                .titolo("test")
                .build();


        System.out.println(libro);
    }
}
