package it.epicode.fs1024_patterns.adapter.google;

public interface IUserGoogle {
    String getUserName();
    String getUserPassword();
    String getEmailAdress();
    void setUserName(String userName);
    void setUserPassword(String userPassword);
    void setEmailAdress(String emailAdress);
    String getFirstName();
    String getLastName();
    void setFirstName(String firstName);
    void setLastName(String lastName);
}
