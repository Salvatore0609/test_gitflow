package it.epicode.corso_universitario_web.corsi;

import it.epicode.corso_universitario_web.common.CommonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/corsi")
public class CorsoController {
    @Autowired
    private CorsoService corsoService;

    @GetMapping
    public List<Corso> getAll() {
        return corsoService.findAll();
    }

    /*@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Corso save(@RequestBody Corso corso) { //conversione da json a classe corso
        return corsoService.save(corso);
    }*/

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommonResponse save(@RequestBody Corso corso) {
        return corsoService.save(corso);
    }

    @PutMapping("/{id}")
    public Corso update(@PathVariable Long id, @RequestBody Corso corso) {
        corso.setId(id);
        return corsoService.update(corso);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(Long id) {
        corsoService.deleteById(id);
    }
}
