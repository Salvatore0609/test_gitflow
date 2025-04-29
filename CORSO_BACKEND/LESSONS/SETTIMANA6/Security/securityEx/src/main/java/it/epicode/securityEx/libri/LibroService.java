package it.epicode.fs1024_security.libri;

import it.epicode.fs1024_security.common.CommonResponse;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
@RequiredArgsConstructor
public class LibroService {
    private final LibroRepository libroRepository;

    public CommonResponse saveLibro(@Valid LibroRequest request) {
        Libro libro = new Libro();
        BeanUtils.copyProperties(request, libro);

        libroRepository.save(libro);

        return new CommonResponse(libro.getId());
    }

    public void deleteLibro(Long id) {
        if (!libroRepository.existsById(id)) {
            throw new EntityNotFoundException("Libro not found");
        }
        libroRepository.deleteById(id);
    }

    public LibroResponse fromEntity(Libro libro) {
        LibroResponse response = new LibroResponse();
        BeanUtils.copyProperties(libro, response);
        return response;
    }

    public List<LibroResponse> findAll() {
        return libroRepository.findAll()
                .stream()
                .map(this::fromEntity)
                .toList();
    }
    public LibroResponse findLibroById(Long id) {
        Libro libro = libroRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Libro not found"));

        return fromEntity(libro);
    }

}
