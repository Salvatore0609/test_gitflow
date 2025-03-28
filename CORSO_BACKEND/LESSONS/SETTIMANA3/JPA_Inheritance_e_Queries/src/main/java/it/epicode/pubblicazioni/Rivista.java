package it.epicode.pubblicazioni;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rivista extends Pubblicazione {
    @Enumerated(EnumType.STRING)
    private Periodicita periodicita;
}
