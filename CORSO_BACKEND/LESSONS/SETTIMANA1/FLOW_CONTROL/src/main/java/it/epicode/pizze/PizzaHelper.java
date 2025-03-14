package it.epicode.pizze;

public class PizzaHelper {
    public static Pizza[] menuDiPizze() {
        Pizza pizzaMargherita = new Pizza();
        pizzaMargherita.setCalorie(200);
        pizzaMargherita.setCosto(10);
        pizzaMargherita.setIngredienti("Mozzarella, Pomodoro, Capperi");
        pizzaMargherita.setNome("Margherita");
        pizzaMargherita.setTipo("rossa");

        Pizza pizzaDiavola = new Pizza();
        pizzaDiavola.setCalorie(300);
        pizzaDiavola.setCosto(15);
        pizzaDiavola.setIngredienti("Mozzarella, Pomodoro, Capperi, Peperoni");
        pizzaDiavola.setNome("Diavola");
        pizzaDiavola.setTipo("rossa");

        Pizza pizzaCapricciosa = new Pizza();
        pizzaCapricciosa.setCalorie(400);
        pizzaCapricciosa.setCosto(20);
        pizzaCapricciosa.setIngredienti("Mozzarella, Pomodoro, Capperi, Peperoni, Funghi");
        pizzaCapricciosa.setNome("Capricciosa");
        pizzaCapricciosa.setTipo("rossa");

        Pizza pizzaDamaBianca = new Pizza();
        pizzaDamaBianca.setCalorie(400);
        pizzaDamaBianca.setCosto(20);
        pizzaDamaBianca.setIngredienti("Mozzarella, capperi");
        pizzaDamaBianca.setNome("Dama Bianca");
        pizzaDamaBianca.setTipo("bianca");

        Pizza pizzaCapricciosaBattuta = new Pizza();
        pizzaCapricciosaBattuta.setCalorie(700);
        pizzaCapricciosaBattuta.setCosto(30);
        pizzaCapricciosaBattuta.setIngredienti("Mozzarella, Pomodoro, Capperi, Peperoni, Funghi");
        pizzaCapricciosaBattuta.setNome("Capricciosa Battuta");
        pizzaCapricciosaBattuta.setTipo("battuta");

        Pizza[] pizze = {pizzaMargherita, pizzaDiavola, pizzaCapricciosa, pizzaDamaBianca, pizzaCapricciosaBattuta};

        return pizze;
    }

    public static Pizza[] pizzeBattute() {
        Pizza pizzaMargheritaBattuta = new Pizza();
        pizzaMargheritaBattuta.setCalorie(500);
        pizzaMargheritaBattuta.setCosto(20);
        pizzaMargheritaBattuta.setIngredienti("Mozzarella, Pomodoro, Capperi");
        pizzaMargheritaBattuta.setNome("Margherita Battuta");
        pizzaMargheritaBattuta.setTipo("battuta");

        Pizza pizzaDiavolaBattuta = new Pizza();
        pizzaDiavolaBattuta.setCalorie(600);
        pizzaDiavolaBattuta.setCosto(25);
        pizzaDiavolaBattuta.setIngredienti("Mozzarella, Pomodoro, Capperi, Peperoni");
        pizzaDiavolaBattuta.setNome("Diavola Battuta");
        pizzaDiavolaBattuta.setTipo("battuta");

        Pizza pizzaCapricciosaBattuta = new Pizza();
        pizzaCapricciosaBattuta.setCalorie(700);
        pizzaCapricciosaBattuta.setCosto(30);
        pizzaCapricciosaBattuta.setIngredienti("Mozzarella, Pomodoro, Capperi, Peperoni, Funghi");
        pizzaCapricciosaBattuta.setNome("Capricciosa Battuta");
        pizzaCapricciosaBattuta.setTipo("battuta");

        Pizza[] pizzeBattute = {pizzaMargheritaBattuta, pizzaDiavolaBattuta, pizzaCapricciosaBattuta};
        return pizzeBattute;
    }

    public static void stampaPizze(Pizza[] pizze) {

        for(int i=0; i<pizze.length; i++) {
            Pizza pizzaCorrente = pizze[i];

            System.out.printf("Pizza %s costo %f",pizzaCorrente.getNome(), pizzaCorrente.getCosto());
            System.out.println("");
            System.out.println("-------------------------------------");
        }
    }

    public static void stampaPizzeWhile(Pizza[] pizze) {
        int pizzeStampate = 0;
        while(pizzeStampate<pizze.length  ) {

            Pizza pizzaCorrente = pizze[pizzeStampate];
            System.out.printf("Pizza %s costo %f",pizzaCorrente.getNome(), pizzaCorrente.getCosto());
            System.out.println("");
            System.out.println("-------------------------------------");
            pizzeStampate++;
        }
    }

    public static void stampaPizzaDoWhile(Pizza[] pizze) {
        int pizzeStampate = 0;
        do {
            if(pizze.length>0) {
                Pizza pizzaCorrente = pizze[pizzeStampate];
                System.out.printf("Pizza %s costo %f", pizzaCorrente.getNome(), pizzaCorrente.getCosto());
                System.out.println("");
                System.out.println("-------------------------------------");
            } else {
                System.out.println("Non ci sono pizze da stampare");
            }
            pizzeStampate++;
        } while (pizzeStampate<pizze.length);
    }

}
