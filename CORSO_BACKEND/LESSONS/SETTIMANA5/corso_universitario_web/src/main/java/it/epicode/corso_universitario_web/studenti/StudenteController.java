package it.epicode.corso_universitario_web.studenti;

import it.epicode.corso_universitario_web.common.CommonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/studenti")
public class StudenteController {
    @Autowired
    private StudenteService studenteService;
    //get per trovare tutti gli studenti
    //ADESSO SE NOI FACESSIMO UNA CHIAMATA AJAX SI AGGANGIA AL METODO GET PER RACCOGLIERE E POI SUCCESSIVAMENTE FINDALL CHE RESTITUIRA TUTTI GLI STUDENTI
    @GetMapping
    public List<Studente> getAll() {
        return studenteService.findAll();
    }

    //get per trovare uno specifico studente per id
    @GetMapping("/{id}")
    public Studente getById(@PathVariable Long id) {
        return studenteService.findById(id);
    }

    //post per aggiungere uno studente
   /* @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Studente create(@RequestBody Studente studente) {
        return studenteService.save(studente);
    }
*/
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommonResponse create(@RequestBody Studente studente) {
        return studenteService.save(studente);
    }

    //put per modificare uno studente
    @PutMapping("/{id}")
    public Studente update(@PathVariable Long id, @RequestBody Studente studente) {
        studente.setId(id);
        return studenteService.update(studente);
    }

    //delete per eliminare uno studente
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        studenteService.deleteById(id);
    }

}
