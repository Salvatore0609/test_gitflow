package it.epicode.libri.test_dao;

import it.epicode.libri.Libro;
import it.epicode.libri.LibroDataAssetsObjectDAO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class MainCumulativoDao {
    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        LibroDataAssetsObjectDAO libroDAO = new LibroDataAssetsObjectDAO(em);

        Libro l = new Libro("Il signore degli annelli", "J.R.R. Tolkien", 1954);

        em.getTransaction().begin();

        //PIU OPERAZIONI IN UNA UNICA TRASAZIONE
        libroDAO.insertNotTx(l);
        //creiamo un altra zona di memoria l2 per l
        Libro l2 = libroDAO.find((l.getId()));
        l2.setAutore("J.R.R. Tolkien junior");
        libroDAO.updateNotTx(l2);
        //libroDAO.deleteNotTx(l2.getId());

        //
        em.getTransaction().commit();

        em.close();
        emf.close();


    }
}
