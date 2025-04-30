package it.epicode.fs1024_patterns.correzione.chain;

import lombok.Data;

@Data
public abstract class Ufficiale {
    private Ufficiale responsabile;
    private String nome;
    private String cognome;
    private Double stipendio;

    public Ufficiale(Double stipendio) {
        this.stipendio = stipendio;
    }

    public void controllaStipendio(Double stipendio) {
          if(this.stipendio>=stipendio) {
              System.out.println(this.getClass().getSimpleName() + " percepisce almeno " + stipendio);
          }
          if(responsabile!=null) {
              responsabile.controllaStipendio(stipendio);
          } else {
              System.out.println("Non esistono ufficiali superiori");
          }
    }

}
