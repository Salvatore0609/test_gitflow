package it.epicode.fs1024_patterns.correzione.adapter;

public class StampaUtente {
    public static void print(DataSource data) {
        System.out.println("Nome: " + data.getNomeCompleto());
        System.out.println("Età: " + data.getEta());
    }
}
