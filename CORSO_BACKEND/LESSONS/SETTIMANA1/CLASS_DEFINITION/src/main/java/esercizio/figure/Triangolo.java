package esercizio.figure;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Triangolo {
    private double base;
    private double altezza;

    public double area() {
        return (base * altezza) / 2;
    }

    public double perimetro() {
        return base * 3;
    }
}
