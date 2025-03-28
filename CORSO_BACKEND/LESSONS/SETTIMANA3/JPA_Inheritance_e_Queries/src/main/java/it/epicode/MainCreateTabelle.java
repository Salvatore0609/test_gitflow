package it.epicode;

import it.epicode.pubblicazioni.Libro;
import it.epicode.pubblicazioni.Periodicita;
import it.epicode.pubblicazioni.Rivista;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainCreateTabelle {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        em.find(Libro.class, 1L);

        Libro libro = new Libro();
        libro.setTitolo("Il Signore degli Anelli");
        libro.setNumeroPagine(1000);

        Rivista rivista = new Rivista();
        rivista.setTitolo("National Geographic");
        rivista.setPeriodicita(Periodicita.MENSILE);

        em.getTransaction().begin();
        em.persist(rivista);
        em.persist(libro);
        em.getTransaction().commit();

        em.close();
        emf.close();
    }
}
