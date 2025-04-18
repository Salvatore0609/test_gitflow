package it.epicode.biblioteca_web.autori;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutoreService {
    @Autowired
    private AutoreRepository autoreRepository;

    public List<AutoreSelectResponse> findAllSelect() {

        List<Autore> autori = autoreRepository.findAll();
        return autori.stream()
                .map(autore -> new AutoreSelectResponse(autore.getId(), autore.getNome() + " " + autore.getCognome()))
                .toList();
    }

}
