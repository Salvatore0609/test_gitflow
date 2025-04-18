package it.epicode.dischi.cantanti;

import it.epicode.dischi.common.CommonResponse;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cantanti")
public class CantanteController {
    @Autowired
    private CantanteService cantanteService;

    @GetMapping("/completo")
    // per fare la paginazione tramite controller, mettere un parametro
    // di tipo Pageable e annotarlo con @ParameterObject
    // @ParameterObject serve a Swagger per mostrare delle input box
    // per la gestione dei dati di paginazione
    // ricordaesi che il metodo non restituisce più una List ma una Page
    public Page<Cantante> findAllComplete(@ParameterObject Pageable pageable) {
        return cantanteService.findAllComplete(pageable);
    }

    @GetMapping
    public List<CantanteResponse> findAll() {
        return cantanteService.findAll();
    }

    @GetMapping("/{id}")
    public CantanteResponse findById(@PathVariable Long id) {
        return cantanteService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommonResponse create(@RequestBody CantanteRequest request) {
        return cantanteService.create(request);
    }

    @PutMapping("/{id}")
    public CantanteResponse update(@PathVariable Long id, @RequestBody CantanteRequest request) {
        return cantanteService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        cantanteService.delete(id);
    }

}
