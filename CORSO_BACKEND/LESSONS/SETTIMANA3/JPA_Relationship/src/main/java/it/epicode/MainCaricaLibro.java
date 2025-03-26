package it.epicode;


import it.epicode.libri.Libro;
import it.epicode.libri.LibroDao;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainCaricaLibro {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        LibroDao libroDao = new LibroDao(em);

        Libro l = libroDao.findById(1L);

        System.out.println(l);

        em.close();
        emf.close();
    }
}
