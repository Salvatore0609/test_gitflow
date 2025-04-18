package it.epicode.corso_universitario_web.corsi;

import it.epicode.corso_universitario_web.common.CommonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CorsoService {
    @Autowired
    private CorsoRepository corsoRepository;

    /*public Corso save(Corso corso) {
        return corsoRepository.save(corso);
    }*/

    public CommonResponse save(Corso corso) {
        corsoRepository.save(corso);
        return new CommonResponse(corso.getId());
    }

    public Corso update( Corso corso) {
        return corsoRepository.save(corso);
    }

    public void deleteById(Long id) {
        corsoRepository.deleteById(id);
    }

    public Corso findById(Long id) {
        return corsoRepository.findById(id).orElse(null);
    }

    public List<Corso> findAll() {
        return corsoRepository.findAll();
    }
}
