package it.epicode.biblioteca_web.caseeditrici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/case-editrici")
public class CasaEditriceController {
    @Autowired
    private CasaEditriceService casaEditriceService;

    @GetMapping("/select")
    public List<CasaEditriceSelectReponse> findAllSelect() {
        return casaEditriceService.findAllSelect();
    }

}
