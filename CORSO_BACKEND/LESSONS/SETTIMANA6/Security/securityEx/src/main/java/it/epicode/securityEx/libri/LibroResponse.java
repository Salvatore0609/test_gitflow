package it.epicode.fs1024_security.libri;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LibroResponse {
    private Long id;
    private String titolo;
    private String autore;
    private String genere;
    private String lingua;

}
