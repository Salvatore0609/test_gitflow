package com.example.test_s19.dipendenti;

import com.example.test_s19.auth.Role;
import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class CreaDipendentiRunner implements CommandLineRunner {
    @Autowired
    Faker faker;
    @Autowired
    DipendenteRepository dipendenteRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        for (int i = 0; i < 10; i++) {
            Dipendente dipendente = new Dipendente();
            dipendente.setNome(faker.name().firstName());
            dipendente.setCognome(faker.name().lastName());
            dipendente.setEmail(dipendente.getNome() + "." + dipendente.getCognome() + "@gmail.com");
            dipendente.setUsername((dipendente.getNome() + "." + dipendente.getCognome()).toLowerCase().replaceAll("[^a-z0-9.]", ""));
            dipendente.setAvatar("https://ui-avatars.com/api/?name=" + dipendente.getNome() + "+" + dipendente.getCognome());
            dipendente.setPassword(passwordEncoder.encode("pwddipendente"));
            dipendente.setRoles(Set.of(Role.ROLE_USER));
            dipendenteRepository.save(dipendente);

        }
        Dipendente admin = new Dipendente();
        admin.setNome(faker.name().firstName());
        admin.setCognome(faker.name().lastName());
        admin.setEmail("admin" + "@gmail.com");
        admin.setUsername("admin");
        admin.setAvatar("https://ui-avatars.com/api/?name=" + admin.getNome() + "+" + admin.getCognome());
        admin.setPassword(passwordEncoder.encode("pwdadmin"));
        admin.setRoles(Set.of(Role.ROLE_ADMIN));
        dipendenteRepository.save(admin);
    }
}
