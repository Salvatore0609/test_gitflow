package it.epicode.corso_universitario_web.iscrizioni;

import lombok.Data;

@Data
public class IscrizioneRequest {
    private Long studenteId;
    private Long corsoId;
}
