package it.epicode.corso_universitario_web.studenti;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudenteRepository extends JpaRepository<Studente, Long> {
}
