package it.epicode.caseeditrici;

import jakarta.persistence.EntityManager;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class CasaEditriceDAO {
    private EntityManager em;

    private CasaEditrice findById(Long id) {
        return em.find(CasaEditrice.class, id);
    }

    public void insert(CasaEditrice ce) {
        em.persist(ce);
    }

    public void insert(List<CasaEditrice> caseEditrici) {
        caseEditrici.forEach(ce -> em.persist(ce));
    }

    public void delete(Long id) {
        CasaEditrice ce = findById(id);
        if (ce != null) {
            em.remove(ce);
        }
    }

    public void update(CasaEditrice ce) {
        em.merge(ce);
    }

    // viene utilizzata una query dinamica
    // ossia non ancora definita in un entity
    // per poter gestire questo tipo di query l'entity manager ha a disposizione un metodo createQuery
    public List<CasaEditrice> findByNome(String nomeDaCercare) {
        return em.createQuery("SELECT ce FROM CasaEditrice ce WHERE ce.nome = :nome", CasaEditrice.class)
                // siccome la query ha un parametro nome, dobbiamo passare il valore del parametro
                .setParameter("nome", nomeDaCercare)
                // recupera tutti i record e li mette in una lista
                .getResultList();
    }


    // viene utilizzata una quary predefinita in un entity
    // per poter gestire questo tipo di query l'entity manager ha a disposizione un metodo createNamedQuery
    public List<CasaEditrice> findAll() {
        return em.createNamedQuery("casa_editrice.find.all", CasaEditrice.class)
                .getResultList();
    }

}
