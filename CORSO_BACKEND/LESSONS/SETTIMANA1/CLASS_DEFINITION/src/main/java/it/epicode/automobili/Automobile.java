package it.epicode.automobili;

import lombok.*;

import java.util.Objects;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Automobile {
    protected String targa;
    private String marca;
    private String modello;

    @ToString.Exclude
    private int annoImmatricolazione;
    private int cilindrata;
    private TipoAuto tipo;

    public Automobile(String targa) {
        this.targa = targa;
    }

    @Override
    public String toString() {
        return "Automobile - " +
                "targa='" + targa + '\'' + ", marca='" + marca + '\'' ;

    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Automobile that = (Automobile) o;
        return Objects.equals(targa, that.targa) && Objects.equals(marca, that.marca) && Objects.equals(modello, that.modello);
    }

    @Override
    public int hashCode() {
        return Objects.hash(targa, marca, modello);
    }
}
