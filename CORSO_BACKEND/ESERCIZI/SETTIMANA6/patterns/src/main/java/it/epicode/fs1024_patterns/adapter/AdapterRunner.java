package it.epicode.fs1024_patterns.adapter;

import it.epicode.fs1024_patterns.adapter.amazon.UtenteAmazon;
import it.epicode.fs1024_patterns.adapter.google.GoogleLogin;
import it.epicode.fs1024_patterns.adapter.google.UserGoogle;
import it.epicode.fs1024_patterns.adapter.google.adapters.UserGoogleAmazon;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class AdapterRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Adapter Pattern Example");

        System.out.println("Uso utente Google");
        UserGoogle userGoogle = new UserGoogle("userName", "userPassword", "emailAdress", "firstName", "lastName");
        boolean done = GoogleLogin.login(userGoogle);
        System.out.println("Login done: " + done);

        // spina tedesca
        UtenteAmazon userAmazon = new UtenteAmazon("userEmail", "userPassword", "name", "surname");

        System.out.println("Uso utente Amazon tramite adattatore");

        // adattatore per spina tedesca e noi infiliamo la spina tedesca dentro l'adattatore
        // passiamo utente amazon nel costruttore
        UserGoogleAmazon userGoogleAmazon = new UserGoogleAmazon(userAmazon);
        done = GoogleLogin.login(userGoogleAmazon);
        System.out.println("Login done: " + done);

    }
}
