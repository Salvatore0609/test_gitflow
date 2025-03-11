package it.epicode.pizze;

public class TestPariODispari {

    // xor
    // AND OR
    // AND è vero se entrambi i termini sono veri   TRUE TRUE = TRUE   FALSE FALSE = FALSE  TRUE FALSE = FALSE
    // OR è vero se almeno uno dei due termini è vero  TRUE TRUE = TRUE   FALSE FALSE = FALSE  TRUE FALSE = TRUE
    // XOR è vero se i due sono uguali    FALSE FALSE = TRUE      TRUE TRUE = TRUE     TRUE FALSE = FALSE


    public static void main(String[] args) {
        int numero = 5;
        if(numero % 2 == 0) {
            System.out.println("Il numero è pari");
        } else {
            System.out.println("Il numero è dispari");
        }
    }


}
