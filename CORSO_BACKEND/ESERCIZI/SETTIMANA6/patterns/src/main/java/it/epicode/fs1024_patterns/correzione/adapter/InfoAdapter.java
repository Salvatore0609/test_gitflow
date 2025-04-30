package it.epicode.fs1024_patterns.correzione.adapter;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class InfoAdapter implements DataSource {
    private Info info;
    @Override
    public String getNomeCompleto() {
        return info.getNome() + " " + info.getCognome();
    }

    @Override
    public int getEta() {
        return LocalDate.now().getYear() - info.getDataNascita().getYear();
    }
}
