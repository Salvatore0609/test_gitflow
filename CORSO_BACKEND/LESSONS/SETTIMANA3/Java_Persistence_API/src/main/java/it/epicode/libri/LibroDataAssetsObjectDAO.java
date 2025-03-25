package it.epicode.libri;

import jakarta.persistence.EntityManager;

import java.util.List;

public class LibroDataAssetsObjectDAO {
    private EntityManager em;

    //costruttore
    public LibroDataAssetsObjectDAO(EntityManager em) {
        this.em = em;
    }

    //i comandi che ci servono sono:
    //insert per inserire

    public void insert (Libro l) {
        em.getTransaction().begin();
        em.persist(l);
        em.getTransaction().commit();
    }

    //insert tramite array list
    public void insert (List<Libro> libri) {
        em.getTransaction().begin();
        for (Libro l: libri) {
            em.persist(l);
        }
        em.getTransaction().commit();
    }

    //update per aggiornare
    public void update(Libro l) {
        em.getTransaction().begin();
        //se l'oggetto esiste lo aggiorna, se non esiste lo crea come il persist
        em.merge(l);
        em.getTransaction().commit();
    }

    //delete per eliminare (invece di passargli l'oggetto completo ma gli passiamo solo la chiave primaria)
    public void delete(Long id) {
        Libro l = em.find(Libro.class, id);
        em.getTransaction().begin();
        em.remove(l);
        em.getTransaction().commit();
    }


    //find per cercare tramite chiave primaria
    public Libro find(Long id) {
        return em.find(Libro.class, id);
    }
}
