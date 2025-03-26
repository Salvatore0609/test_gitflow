package it.epicode.libri.test_dao;

import it.epicode.libri.Libro;
import it.epicode.libri.LibroDataAssetsObjectDAO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainUpdateLibroDao {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        LibroDataAssetsObjectDAO LibroDao = new LibroDataAssetsObjectDAO(em);

        Libro l = LibroDao.find(2L);
        l.setAnnoPubblicazione(2000);
        LibroDao.update(l);

        System.out.println("Libro aggiornato: " + l.getTitolo() + " " + l.getAutore() + " " + l.getAnnoPubblicazione());

        em.close();
        emf.close();

    }
}
