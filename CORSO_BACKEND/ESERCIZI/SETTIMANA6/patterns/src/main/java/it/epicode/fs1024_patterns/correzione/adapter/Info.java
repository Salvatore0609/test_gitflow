package it.epicode.fs1024_patterns.correzione.adapter;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Info {
    private String nome;
    private String cognome;
    private LocalDate dataNascita;
}
