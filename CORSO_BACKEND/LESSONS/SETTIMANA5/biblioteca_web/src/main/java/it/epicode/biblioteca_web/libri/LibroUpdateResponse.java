package it.epicode.biblioteca_web.libri;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LibroUpdateResponse {
    private Long id;
    private String titolo;
    private Long casaEditriceId;
    private Long autoreId;
}
