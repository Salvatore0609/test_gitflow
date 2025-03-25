package it.epicode.libri.test_dao;

import it.epicode.libri.LibroDataAssetsObjectDAO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainDeleteLibroDao {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        LibroDataAssetsObjectDAO libroDao = new LibroDataAssetsObjectDAO(em);

        libroDao.delete(3L);

        em.close();
        emf.close();
    }
}
