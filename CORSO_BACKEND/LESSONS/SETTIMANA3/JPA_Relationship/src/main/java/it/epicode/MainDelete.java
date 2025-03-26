package it.epicode;

import it.epicode.autori.AutoreDao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainDelete {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        AutoreDao autoreDao = new AutoreDao(em);

        em.getTransaction().begin();

        autoreDao.delete(2L);

        em.getTransaction().commit();

        em.close();
        emf.close();
    }
}
