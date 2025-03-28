package it.epicode;

import it.epicode.autori.Autore;
import it.epicode.autori.AutoreDao;
import it.epicode.case_editrici.CasaEditrice;
import it.epicode.case_editrici.CasaEditriceDao;
import it.epicode.categorie.Categoria;
import it.epicode.categorie.CategoriaDao;
import it.epicode.libri.Libro;
import it.epicode.libri.LibroDao;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

import java.time.LocalDate;
import java.util.List;

public class MainCreateLibro {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        CategoriaDao categoriaDao =  new CategoriaDao(em);
        LibroDao libroDao = new LibroDao(em);
        AutoreDao autoreDao = new AutoreDao(em);
        CasaEditriceDao casaEditriceDao = new CasaEditriceDao(em);

        Autore autore = new Autore(null, "Andrea", "Colombo", "italiana");
        Autore autore2 = new Autore(null, "Giovanni", "Devalle", "italiana");

        CasaEditrice casaEditrice = new CasaEditrice(null, "Mondadori", "Italia", LocalDate.of(1990, 1, 1));

        Categoria fantasy = new Categoria(null, "fantasy");
        Categoria giallo = new Categoria(null, "giallo");
        Categoria thriller = new Categoria(null, "thriller");
        Categoria avventura = new Categoria(null, "avventura");

        em.getTransaction().begin();

        // le salvo direttamente perchè non sono inserite nel libro
        categoriaDao.insert(thriller);
        categoriaDao.insert(avventura);
        // non serve salvare fantasy e giallo perchè sono già presenti nel libro
        // per cui vengono salvati a cascata nel momento in cui salvo il libro

        //casaEditriceDAO.insert(casaEditrice);
        //autoreDAO.insert(autore);

        Libro libro = new Libro(null,"Acqua Azzurra", autore, casaEditrice, List.of(fantasy, giallo));
        Libro libro2 = new Libro(null, "Il Signore degli Anelli", autore2, casaEditrice, List.of(fantasy, giallo));

        libroDao.insert(libro);
        libroDao.insert(libro2);

        em.getTransaction().commit();

        libroDao.findById(1L);
        libroDao.findById(2L);

        em.close();
        emf.close();
    }
}
