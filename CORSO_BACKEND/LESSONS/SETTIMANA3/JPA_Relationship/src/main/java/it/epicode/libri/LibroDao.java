package it.epicode.libri;

import it.epicode.categorie.Categoria;
import jakarta.persistence.EntityManager;

public class LibroDao {
    private EntityManager em;

    public LibroDao(EntityManager em){
        this.em = em;
    }

    public Libro findById(Long id){
        return em.find(Libro.class, id);
    }

    public void insert(Libro a){
        em.persist(a);
    }

    public void update(Libro a){
        em.merge(a);
    }

    public void delete(Long id){
        Libro a = findById(id);
        em.remove(a);
    }
}
