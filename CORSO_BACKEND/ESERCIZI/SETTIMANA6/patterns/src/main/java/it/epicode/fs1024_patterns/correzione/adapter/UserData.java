package it.epicode.fs1024_patterns.correzione.adapter;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserData implements DataSource {
    private String nomeCompleto;
    private int eta;

    public UserData(DataSource dataSource) {
        this.nomeCompleto = dataSource.getNomeCompleto();
        this.eta = dataSource.getEta();
    }
}
