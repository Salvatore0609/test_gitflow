package it.epicode.case_editrici;

import jakarta.persistence.EntityManager;

public class CasaEditriceDAO {
    private EntityManager em;

    public CasaEditriceDAO(EntityManager em) {
        this.em = em;
    }

    public CasaEditrice find(Long id) {
        return em.find(CasaEditrice.class, id);
    }

    //con transazione
    public void insert(CasaEditrice ce) {
        em.getTransaction().begin();
        em.persist(ce);
        em.getTransaction().commit();
    }

    //senza transazione
    public void insertNotTx(CasaEditrice ce) {
        em.persist(ce);
    }
    //con transazione
    public void update(CasaEditrice ce) {
        em.getTransaction().begin();
        em.merge(ce);
        em.getTransaction().commit();
    }
    //senza transazione
    public void updateNotTx(CasaEditrice ce) {
        em.merge(ce);
    }
    //con transazione
    public void delete(Long id) {
        CasaEditrice ce = find(id);
        em.getTransaction().begin();
        em.remove(ce);
        em.getTransaction().commit();
    }

    //senza transazione
    public void deleteNotTx(Long id) {
        CasaEditrice ce = find(id);
        em.remove(ce);
    }
}
