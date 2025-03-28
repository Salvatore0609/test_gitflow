package it.epicode.autori;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

import java.util.List;

public class MainCreateAutori {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        Autore a1 = new Autore(null,"Giuseppe", "Verdi");
        Autore a2 = new Autore(null, "Giuseppe", "Rossi");
        Autore a3 = new Autore(null, "Pippo", "Bianchi");
        Autore a4 = new Autore(null, "Gigio", "Verdi");
        Autore a5 = new Autore(null, "Salvatore", "Rossi");

        AutoreDAO autoreDAO = new AutoreDAO(em);

        em.getTransaction().begin();

        autoreDAO.insert(List.of(a1,a2,a3,a4,a5));

        em.getTransaction().commit();

       /* em.close();
        emf.close();*/
    }

}
