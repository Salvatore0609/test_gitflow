package com.example.test_s19.auth;

import com.example.test_s19.dipendenti.Dipendente;
import com.example.test_s19.dipendenti.DipendenteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Slf4j
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private DipendenteRepository dipendenteRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Dipendente dipendente = dipendenteRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Utente non trovato con username: " + username));
        log.debug("Dipendente caricato: username={}, password={}", dipendente.getUsername(), dipendente.getPassword());
        return dipendente;

    }
}
