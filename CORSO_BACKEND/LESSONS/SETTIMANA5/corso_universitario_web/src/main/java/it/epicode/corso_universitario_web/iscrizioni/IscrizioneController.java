package it.epicode.corso_universitario_web.iscrizioni;

import it.epicode.corso_universitario_web.common.CommonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/iscrizioni")
public class IscrizioneController {
    @Autowired
    private IscrizioneService iscrizioneService;

    /*@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Iscrizione save(IscrizioneRequest iscrizione) {
        return iscrizioneService.save(iscrizione);
    }*/

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommonResponse save(IscrizioneRequest iscrizione) {
        return iscrizioneService.save(iscrizione);
    }

    @GetMapping
    public List<Iscrizione> findAll() { return iscrizioneService.findAll(); }
}
