package it.epicode.fs1024_patterns.adapter.amazon;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UtenteAmazon {
    private String userEmail;
    private String userPassword;
    private String name;
    private String surname;
}
