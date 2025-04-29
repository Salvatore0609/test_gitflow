package it.epicode.fs1024_security.libri;

import it.epicode.fs1024_security.common.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/libri")
@RequiredArgsConstructor
@PreAuthorize("isAuthenticated()")
public class LibroController {
    private final LibroService libroService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<LibroResponse> getAllLibri() {
        return libroService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    //@PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("isAuthenticated()")
    public CommonResponse createLibro(LibroRequest request) {
        return libroService.saveLibro(request);
    }


    //@PreAuthorize("isAuthenticated()")
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("/{id}")
    public LibroResponse getLibroById(Long id) {
        return libroService.findLibroById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteLibro(Long id) {
        libroService.deleteLibro(id);
    }
}
