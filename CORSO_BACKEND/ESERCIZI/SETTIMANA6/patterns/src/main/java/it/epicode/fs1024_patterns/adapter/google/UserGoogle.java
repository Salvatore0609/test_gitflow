package it.epicode.fs1024_patterns.adapter.google;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserGoogle implements IUserGoogle {
    private String userName;
    private String userPassword;
    private String emailAdress;
    private String firstName;
    private String lastName;
}
