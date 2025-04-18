package it.epicode.dischi.cantanti;

import it.epicode.dischi.common.CommonResponse;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CantanteService {
    @Autowired
    private CantanteRepository cantanteRepository;

    // uso optional per recuperare oggetto
    public Cantante  findByIdOptional(Long id) {
        Optional<Cantante> cantante = cantanteRepository.findById(id);

        // controllo se l'oggetto è presente nell'optional
        if(!cantante.isPresent()){
            // se non è presente lancio eccezione
            throw new EntityNotFoundException("Cantante non trovato");
        }
        return cantante.get();
    }


    public CantanteResponse findById(Long id)  {
        Cantante cantante = cantanteRepository
                .findById(id)
                .orElseThrow(() -> new CantanteNonTrovatoException("Cantante non trovato"));

        return fromEntity(cantante);
    }


    // metodo del service che fa la paginazione
    // riceve un parametro di tipo Pageable che passa al metodo
    // findAll del repository
    // ricordarsi che la paginazione restituisce un oggetto
    // di tipo Page e non una lista
    public Page<Cantante> findAllComplete(Pageable pageable){
        return cantanteRepository.findAll(pageable);
    }

    public List<CantanteResponse> findAll() {
          return fromEntity(cantanteRepository.findAll());
    }


    public CantanteResponse update(Long id, CantanteRequest request) {
        Cantante cantante = cantanteRepository
                .findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cantante non trovato"));
        BeanUtils.copyProperties(request, cantante);
        cantanteRepository.save(cantante);
        return fromEntity(cantante);
    }

    public CommonResponse create(CantanteRequest request) {
        Cantante cantante = new Cantante();
        BeanUtils.copyProperties(request, cantante);
        cantanteRepository.save(cantante);
        return new CommonResponse(cantante.getId());
    }

    public void delete(Long id) {
        Cantante cantante = cantanteRepository
                .findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cantante non trovato"));
        cantanteRepository.delete(cantante);
    }

    public CantanteResponse fromEntity(Cantante cantante) {
        CantanteResponse response = new CantanteResponse();
        BeanUtils.copyProperties(cantante, response);
        return response;
    }

    public List<CantanteResponse> fromEntity(List<Cantante> cantanti) {
        return cantanti
                .stream()
                .map(this::fromEntity)
                .toList();
    }


}
