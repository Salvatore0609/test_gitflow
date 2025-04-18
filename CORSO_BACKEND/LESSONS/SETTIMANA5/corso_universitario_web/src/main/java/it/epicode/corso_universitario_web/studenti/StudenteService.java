package it.epicode.corso_universitario_web.studenti;

import it.epicode.corso_universitario_web.common.CommonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudenteService {
    @Autowired
    private StudenteRepository studenteRepository;

    public Studente findById(Long id) {
        return studenteRepository.findById(id).orElse(null);
    }

    public List<Studente> findAll() {
        return studenteRepository.findAll();
    }

    /*public Studente save(Studente studente) {
        return studenteRepository.save(studente);
    }*/

    public CommonResponse save(Studente studente) {
        studenteRepository.save(studente);
        return new CommonResponse(studente.getId());
    }

    public void deleteById(Long id) {
        studenteRepository.deleteById(id);
    }

    public Studente update(Studente studente) {
        return studenteRepository.save(studente);
    }


}
