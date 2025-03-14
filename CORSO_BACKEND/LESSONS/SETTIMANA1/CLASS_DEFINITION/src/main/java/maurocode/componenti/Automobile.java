package maurocode.componenti;

import it.epicode.automobili.TipoAuto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Automobile {
    private String targa;
    private String marca;
    private String modello;
    private int annoImmatricolazione;
    private int cilindrata;
    private TipoAuto tipo;



}
