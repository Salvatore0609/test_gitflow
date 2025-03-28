package it.epicode.autori;

import jakarta.persistence.EntityManager;
import lombok.AllArgsConstructor;
import java.util.List;

@AllArgsConstructor
public class AutoreDAO {
    private EntityManager em;
    // ricerca per id
    public Autore findById(Long id) {
        return em.find(Autore.class, id);
    }
    // inserimento record
    public void insert(Autore a) {
        em.persist(a);
    }
    public void insert(List<Autore> autori) {
        autori.forEach(a -> em.persist(a));
        // equivalente a
//        for(Autore a : autori) {
//            em.persist(a);
//        }
    }
    // cancellazione record
    public void delete(Long id) {
        Autore a = findById(id);
        if (a != null) {
            em.remove(a);
        }
    }
    // modifica record
    public void update(Autore a) {
        em.merge(a);
    }
    // ricerca per cognome
    public List<Autore> findByCognome(String cognomeDaCercare) {
        return em.createNamedQuery("autore.find.cognome", Autore.class)
                // siccome la query ha un parametro nome, dobbiamo passare il valore del parametro
                .setParameter("cognome", cognomeDaCercare)
                // recupera tutti i record e li mette in una lista
                .getResultList();
    }
    // ricerca di tutti gli autori inseriti
    public List<Autore> findAll() {
        // non ci sono parametri per cui utilizzo direttamente il getResultList
        return em.createNamedQuery("autore.find.all", Autore.class)
                .getResultList();
    }

    public List<Autore> findByCognomeNome(String cognome, String nome) {
        return em.createNamedQuery("autore.find.cognome.nome", Autore.class)
                // la query contiene 2 parametri cognome e nome per cui devo fare 2 setParameter
                .setParameter("cognome", cognome)
                .setParameter("nome", nome)
                .getResultList();
    }

}
