package it.epicode.biblioteca_web.libri;

import it.epicode.biblioteca_web.autori.Autore;
import it.epicode.biblioteca_web.autori.AutoreRepository;
import it.epicode.biblioteca_web.caseeditrici.CasaEditrice;
import it.epicode.biblioteca_web.caseeditrici.CasaEditriceRepository;
import it.epicode.biblioteca_web.common.CommonResponse;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibroService {
    @Autowired
    private LibroRepository libroRepository;
    @Autowired
    private AutoreRepository autoreRepository;
    @Autowired
    private CasaEditriceRepository casaEditriceRepository;

    public CommonResponse save(LibroInsertRequest request){
        Libro libro = new Libro();
        BeanUtils.copyProperties(request, libro);

        Autore autore = autoreRepository.findById(request.getAutoreId())
                .orElseThrow(() -> new EntityNotFoundException("Autore non trovato"));
        CasaEditrice casaEditrice = casaEditriceRepository.findById(request.getCasaEditriceId())
                .orElseThrow(() -> new EntityNotFoundException("Casa Editrice non trovata"));

        libro.setAutore(autore);
        libro.setCasaEditrice(casaEditrice);

        libroRepository.save(libro);

        CommonResponse response = new CommonResponse( libro.getId() );


        return response;
    }



    public LibroResponse update(Long id, LibroInsertRequest request) {

        Autore autore = autoreRepository.findById(request.getAutoreId())
                .orElseThrow(() -> new EntityNotFoundException("Autore non trovato"));
        CasaEditrice casaEditrice = casaEditriceRepository.findById(request.getCasaEditriceId())
                .orElseThrow(() -> new EntityNotFoundException("Casa Editrice non trovata"));

        Libro libro = libroRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Libro non trovato"));

        BeanUtils.copyProperties(request, libro, "id");
        libro.setAutore(autore);
        libro.setCasaEditrice(casaEditrice);

        libroRepository.save(libro);

        LibroResponse response = new LibroResponse();
        BeanUtils.copyProperties(libro, response);
        response.setCasaEditrice(libro.getCasaEditrice().getNome());
        response.setAutoreNomeCognome(libro.getAutore().getNome() + " " + libro.getAutore().getCognome());

        return response;

    }

    public void deleteById(Long id) {
        Libro libro = libroRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Libro non trovato"));

        libroRepository.delete(libro);

    }

    public LibroUpdateResponse findById(Long id) {
        Libro libro = libroRepository.findById(id).orElseThrow(() -> new RuntimeException("Libro non trovato"));

        LibroUpdateResponse response = new LibroUpdateResponse();
        BeanUtils.copyProperties(libro, response);

        response.setCasaEditriceId(libro.getCasaEditrice().getId());
        response.setAutoreId(libro.getAutore().getId());

        return response;


    }

    public List<Libro> findFull() {
        return libroRepository.findAll();

    }

   public List<LibroResponse> findAll() {
        return libroRepository.findAll().stream()
                .map(this::toResponse)
                .toList();

    }



   public LibroResponse toResponse(Libro libro) {
        LibroResponse response = new LibroResponse();
        BeanUtils.copyProperties(libro, response);
        response.setCasaEditrice(libro.getCasaEditrice().getNome());
        response.setAutoreNomeCognome(libro.getAutore().getNome() + " " + libro.getAutore().getCognome());
        return response;
    }




}
