package it.epicode.libri.test;

import it.epicode.libri.Libro;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainUpdateLibro {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        //creiamo un entity manager
        EntityManager em = emf.createEntityManager();

        Libro l = em.find(Libro.class, 1L);

        //iniziamo una transazione
        em.getTransaction().begin();
        l.setAnnoPubblicazione(2000);
        em.merge(l);
        //commit della transazione
        em.getTransaction().commit();
        //chiudiamo l'entity manager
        em.close();
        //chiudiamo l'entity manager factory
        emf.close();
    }
}
