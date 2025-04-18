package it.epicode.dischi.cantanti;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CantanteRequest {
    private String nome;
    private String cognome;
}
