package it.epicode.fs1024_patterns.adapter.google.adapters;

import it.epicode.fs1024_patterns.adapter.amazon.UtenteAmazon;
import it.epicode.fs1024_patterns.adapter.google.IUserGoogle;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class UserGoogleAmazon implements IUserGoogle {
    private UtenteAmazon userAmazon;

    @Override
    public String getUserName() {
        return userAmazon.getName()+"."+userAmazon.getSurname();
    }

    @Override
    public String getUserPassword() {
        return userAmazon.getUserPassword();
    }

    @Override
    public String getEmailAdress() {
        return userAmazon.getUserEmail();
    }

    @Override
    public void setUserName(String userName) {
        // userAmazon.setUserEmail(userName);
    }

    @Override
    public void setUserPassword(String userPassword) {
        userAmazon.setUserPassword(userPassword);
    }

    @Override
    public void setEmailAdress(String emailAdress) {
        userAmazon.setUserEmail(emailAdress);
    }

    @Override
    public String getFirstName() {
        return userAmazon.getName();
    }

    @Override
    public String getLastName() {
        return userAmazon.getSurname();
    }

    @Override
    public void setFirstName(String firstName) {
        userAmazon.setName(firstName);
    }

    @Override
    public void setLastName(String lastName) {
        userAmazon.setSurname(lastName);
    }
}
