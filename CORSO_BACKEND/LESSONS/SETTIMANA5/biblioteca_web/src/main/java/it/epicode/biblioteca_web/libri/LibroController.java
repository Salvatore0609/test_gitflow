package it.epicode.biblioteca_web.libri;

import it.epicode.biblioteca_web.common.CommonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/libri")
public class LibroController {
    @Autowired
    private LibroService libroService;

    @GetMapping("/{id}")
    public LibroUpdateResponse findById(@PathVariable Long id) {
        return libroService.findById(id);
    }

    @GetMapping("/full")
    public List<Libro> findAllFull() {
        return libroService.findFull();
    }

    @GetMapping
    public List<LibroResponse> findAll() {
        return libroService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommonResponse save(LibroInsertRequest request) {
        return libroService.save(request);
    }

    @PutMapping("/{id}")
    public LibroResponse update(@PathVariable Long id, @RequestBody LibroInsertRequest request) {
        return libroService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        libroService.deleteById(id);
    }
}
