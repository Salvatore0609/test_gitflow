package it.epicode.Spring_Introducion_LibreriaOnline.libri;

import it.epicode.Spring_Introducion_LibreriaOnline.autori.Autore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LibroRepository extends JpaRepository<Libro, Long>{

    public List<Libro> findAllByAutore(Autore autore);
    public Libro findByTitolo(String titolo);
    public List<Libro> findAllByGenere(String genere);

}
