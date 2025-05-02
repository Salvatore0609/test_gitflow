package com.example.test_s19.dipendenti;

import com.example.test_s19.auth.JwtTokenUtil;
import com.example.test_s19.auth.Role;
import com.example.test_s19.cloudinary.CloudinaryService;
import com.example.test_s19.common.CommonResponse;
import com.example.test_s19.common.EmailSenderService;
import com.example.test_s19.exceptions.NotFoundException;
import com.example.test_s19.exceptions.UsernameException;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@Validated
public class DipendenteService {
    @Autowired
    private DipendenteRepository dipendenteRepository;
    @Autowired
    private CloudinaryService cloudinaryService;
    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    public Dipendente registerDipendente(DipendenteAuthRequest request) throws MessagingException {
        if (dipendenteRepository.existsByUsername(request.getUsername())) {
            throw new EntityExistsException("Username già in uso");
        }

        Dipendente dipendente = new Dipendente();
        dipendente.setNome(request.getNome());
        dipendente.setCognome(request.getCognome());
        dipendente.setEmail(request.getEmail());
        dipendente.setUsername(request.getUsername());
        dipendente.setPassword(passwordEncoder.encode(request.getPassword()));
        dipendente.setRoles(Set.of(Role.ROLE_USER));
        dipendente.setAvatar("https://ui-avatars.com/api/?name=" + dipendente.getNome() + "+" + dipendente.getCognome());
        emailSenderService.sendEmail(dipendente.getEmail(), "Benvenuto", "Ciao "+dipendente.getNome() + " " + dipendente.getCognome()+"! Benvenuto nella nostra azienda!" );
        return dipendenteRepository.save(dipendente);
    }

    public Optional<Dipendente> findByUsername(String username) {
        return dipendenteRepository.findByUsername(username);
    }

    public String authenticateUser(String username, String password)  {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            return jwtTokenUtil.generateToken(userDetails);
        } catch (AuthenticationException e) {
            throw new SecurityException("Credenziali non valide", e);
        }
    }


    public Dipendente loadUserByUsername(String username)  {
        Dipendente dipendente = dipendenteRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("Utente non trovato con username: " + username));


        return dipendente;
    }
    public CommonResponse createDipendente(DipendenteRequest request) throws MessagingException {
        Dipendente dipendente = new Dipendente();
        BeanUtils.copyProperties(request, dipendente);
        if (dipendenteRepository.existsByUsername(dipendente.getUsername())) {
            throw new UsernameException("Username già in uso");
        }
        if (dipendenteRepository.existsByEmail(dipendente.getEmail())) {
            throw new UsernameException("Email già in uso");
        }
        dipendente.setAvatar("https://ui-avatars.com/api/?name=" + dipendente.getNome() + "+" + dipendente.getCognome());
        dipendente = dipendenteRepository.save(dipendente);
        emailSenderService.sendEmail(dipendente.getEmail(), "Benvenuto", "Ciao "+dipendente.getNome() + " " + dipendente.getCognome()+"! Benvenuto nella nostra azienda!" );
        return new CommonResponse(dipendente.getId());
    }
    public Page<Dipendente> findAll(int page, int size, String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort));
        return dipendenteRepository.findAll(pageable);
    }

    public Dipendente getDipendenteById(Long id) {
        return dipendenteRepository.findById(id).orElseThrow(() -> new NotFoundException("Dipendente non trovato"));
    }
    public Dipendente updateDipendente(Long id, DipendenteRequest request, Dipendente  dipendenteCorrente) {
        boolean isAdmin = dipendenteCorrente.getRoles().contains(Role.ROLE_ADMIN);
        if(dipendenteCorrente.getId() == id || isAdmin) {
            Dipendente dipendente = dipendenteRepository.findById(id).orElseThrow(() -> new NotFoundException("Dipendente non trovato"));
            BeanUtils.copyProperties(request, dipendente);
            return dipendenteRepository.save(dipendente);
        } else {
            throw new IllegalArgumentException("Non sei autorizzato a modificare questo dipendente");
        }
    }
    public void deleteDipendente(Long id) {
        if (!dipendenteRepository.existsById(id)) {
            throw new NotFoundException("Dipendente non trovato");
        }
        dipendenteRepository.deleteById(id);
    }
    public boolean existsByUsername(String username) {
        return dipendenteRepository.existsByUsername(username);
    }
    public void uploadImage(Long id, MultipartFile file) {
        Dipendente dipendente = dipendenteRepository.findById(id).orElseThrow(() -> new NotFoundException("Dipendente non trovato"));
        dipendente.setAvatar(cloudinaryService.uploadImage(file));
        dipendenteRepository.save(dipendente);
    }
}
