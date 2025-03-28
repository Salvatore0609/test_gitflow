package it.epicode.autori;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

import java.util.List;

public class MainCercaAutori {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("epicode");
        EntityManager em = emf.createEntityManager();

        AutoreDAO autoreDAO = new AutoreDAO(em);

        List<Autore> autori = autoreDAO.findAll();

        for (Autore autore : autori) {
            System.out.println(autore.getCognome() + " " + autore.getNome());
        }
        System.out.println("--------------------------------------------------");
        System.out.println("Cerco autore con cognome Rossi: ");

        List<Autore> autoriRossi = autoreDAO.findByCognome("Rossi");
        for (Autore autore : autoriRossi) {
            System.out.println(autore.getCognome() + " " + autore.getNome());
        }

        System.out.println("---------------------------------------------------");
        System.out.println("Cerco autore con cognome Rossi e nome Mario: ");
        List<Autore> autoriRossiMario = autoreDAO.findByCognomeAndNome("Rossi", "Giuseppe");

        for (Autore autore : autoriRossiMario) {
            System.out.println(autore.getCognome() + " " + autore.getNome());
        }
    }
}
