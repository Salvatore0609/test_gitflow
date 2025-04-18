package it.epicode.biblioteca_web.caseeditrici;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CasaEditriceService {
    @Autowired
    private CasaEditriceRepository casaEditriceRepository;

    public List<CasaEditriceSelectReponse> findAllSelect() {
        List<CasaEditrice> caseEditrici = casaEditriceRepository.findAll();
        return caseEditrici.stream()
                .map(casaEditrice -> new CasaEditriceSelectReponse(casaEditrice.getId(), casaEditrice.getNome()))
                .toList();
    }


}
