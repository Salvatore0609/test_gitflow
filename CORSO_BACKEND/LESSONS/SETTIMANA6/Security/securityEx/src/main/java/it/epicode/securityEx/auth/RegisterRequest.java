package it.epicode.fs1024_security.auth;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password;
}
