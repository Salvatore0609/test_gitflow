package it.epicode.biblioteca_web.autori;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AutoreSelectResponse {
    private Long id;
    private String nomeCognome;
}
