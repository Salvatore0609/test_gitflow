package it.epicode.biblioteca_web.libri;

import com.github.javafaker.Faker;
import it.epicode.biblioteca_web.autori.Autore;
import it.epicode.biblioteca_web.autori.AutoreRepository;
import it.epicode.biblioteca_web.caseeditrici.CasaEditrice;
import it.epicode.biblioteca_web.caseeditrici.CasaEditriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Order(10)
public class LibroRunner implements CommandLineRunner {
    @Autowired
    private Faker faker;
    @Autowired
    private LibroRepository libroRepository;
    @Autowired
    private AutoreRepository autoreRepository;
    @Autowired
    private CasaEditriceRepository casaEditriceRepository;


    @Override
    public void run(String... args) throws Exception {


        if(libroRepository.count() == 0) {
            List<Autore> autori = autoreRepository.findAll();
            List<CasaEditrice> caseEditrici = casaEditriceRepository.findAll();

            for(int i = 0; i < 10; i++) {
                Libro libro = new Libro();
                libro.setTitolo(faker.book().title());
                libro.setAutore(autori.get(i));
                libro.setCasaEditrice(caseEditrici.get(i));

                libroRepository.save(libro);
            }
        }



    }
}
