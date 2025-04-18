package it.epicode.biblioteca_web.libri;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LibroResponse {
    private Long id;
    private String titolo;
    private String casaEditrice;
    private String autoreNomeCognome;
}
