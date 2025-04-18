package it.epicode.corso_universitario_web.iscrizioni;

import it.epicode.corso_universitario_web.common.CommonResponse;
import it.epicode.corso_universitario_web.corsi.Corso;
import it.epicode.corso_universitario_web.corsi.CorsoRepository;
import it.epicode.corso_universitario_web.studenti.Studente;
import it.epicode.corso_universitario_web.studenti.StudenteRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IscrizioneService {
    @Autowired
    private IscrizioneRepository iscrizioneRepository;
    @Autowired
    private CorsoRepository corsoRepository;
    @Autowired
    private StudenteRepository studenteRepository;

    public List<Iscrizione> findAll() { return iscrizioneRepository.findAll(); }

    /*public Iscrizione save(IscrizioneRequest iscrizione) {
        Iscrizione iscrizioneEntity = new Iscrizione();

        // cerco il corso
        Corso corso = corsoRepository.findById(iscrizione.getCorsoId())
                .orElseThrow(() -> new EntityNotFoundException("Corso non trovato"));

        // cerco lo studente
        Studente studente = studenteRepository.findById(iscrizione.getStudenteId())
                .orElseThrow(() -> new EntityNotFoundException("Studente non trovato"));

        iscrizioneEntity.setCorso(corso);
        iscrizioneEntity.setStudente(studente);
        return iscrizioneRepository.save(iscrizioneEntity);
    }*/

    public CommonResponse save(IscrizioneRequest iscrizione) {
        Iscrizione iscrizioneEntity = new Iscrizione();

        // cerco il corso
        Corso corso = corsoRepository.findById(iscrizione.getCorsoId())
                .orElseThrow(() -> new EntityNotFoundException("Corso non trovato"));

        // cerco lo studente
        Studente studente = studenteRepository.findById(iscrizione.getStudenteId())
                .orElseThrow(() -> new EntityNotFoundException("Studente non trovato"));

        iscrizioneEntity.setCorso(corso);
        iscrizioneEntity.setStudente(studente);
        iscrizioneRepository.save(iscrizioneEntity);
        return new CommonResponse(iscrizioneEntity.getId());
    }
}
