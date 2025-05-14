package com.example.test_s19.dipendenti;

import com.example.test_s19.auth.AuthResponse;
import com.example.test_s19.auth.LoginRequest;
import jakarta.mail.MessagingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
@Slf4j
@RestController
@RequestMapping("/dipendenti")
public class DipendenteController {
    @Autowired
    private DipendenteService dipendenteService;
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Page<Dipendente> findAll(@RequestParam(defaultValue = "0") int page,
                                    @RequestParam(defaultValue = "10") int size,
                                    @RequestParam(defaultValue = "id") String sortBy) {

        return dipendenteService.findAll(page, size, sortBy);
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Dipendente findById(@PathVariable Long id) {
        return dipendenteService.getDipendenteById(id);
    }
    @PreAuthorize("isAuthenticated()")
    @GetMapping("/current-user")
    public Dipendente getCurrentUser(@AuthenticationPrincipal Dipendente dipendente) {
        return dipendente;
    }
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createDipendente(@RequestBody DipendenteAuthRequest request) throws MessagingException {
        dipendenteService.registerDipendente(request);
        return ResponseEntity.ok("Registrazione avvenuta con successo");
    }
    @PreAuthorize("isAuthenticated()")
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Dipendente updateDipendente(@PathVariable Long id, @RequestBody DipendenteRequest request, @AuthenticationPrincipal Dipendente dipendente) {
        return dipendenteService.updateDipendente(id, request, dipendente);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDipendente(@PathVariable Long id) {
        dipendenteService.deleteDipendente(id);
    }
    @PreAuthorize("isAuthenticated()")
    @PatchMapping(value = "/{id}/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Dipendente uploadImage(@PathVariable Long id, @RequestPart MultipartFile file) {
        dipendenteService.uploadImage(id, file);
        return dipendenteService.getDipendenteById(id);
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        log.info("Login request:");
        String token = dipendenteService.authenticateUser(
                loginRequest.getUsername(),
                loginRequest.getPassword()
        );
        return ResponseEntity.ok(new AuthResponse(token));
    }
}