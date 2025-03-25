package it.epicode.libri.test_dao;

import it.epicode.libri.Libro;
import it.epicode.libri.LibroDataAssetsObjectDAO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

import java.util.List;

public class MainInsertLibroDao {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        //creiamo un entity manager
        EntityManager em = emf.createEntityManager();


        //usiamo entity manager per inserire un libro nel db(database)
        Libro l = new Libro("La casa nella prateria", "Bo", 1934);
        Libro ll = new Libro("La collina dei misteri", "Giovannino", 1994);
        Libro lll = new Libro("La casa delle meraviglie", "Gesù", 2004);


        // mi istanzio una classe dao
        LibroDataAssetsObjectDAO dao = new LibroDataAssetsObjectDAO(em);
        //uso l'insert tramite arrayList overload del metodo insert di un libro singolo
        dao.insert(List.of(l, ll, lll));

        //chiudiamo l'entity manager
        em.close();
        //chiudiamo l'entity manager factory
        emf.close();

    }
}
