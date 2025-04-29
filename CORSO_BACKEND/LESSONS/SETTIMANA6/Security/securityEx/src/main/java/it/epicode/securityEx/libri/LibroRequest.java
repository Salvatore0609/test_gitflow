package it.epicode.fs1024_security.libri;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LibroRequest {
    @NotBlank(message = "Il titolo non può essere vuoto")
    private String titolo;
    @NotBlank(message = "L'autore non può essere vuoto")
    private String autore;
    @NotBlank(message = "Il genere non può essere vuoto")
    private String genere;
    @NotBlank(message = "La lingua non può essere vuota")
    private String lingua;
}
