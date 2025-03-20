import it.epicode.libri.Libro;
import it.epicode.libri.RandomData;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class MainCollectors {
    public static List<Libro> libri = RandomData.libri;
    public static Set<Libro> libri =

    public static void main(String[] args) {
        //Utilizzo della classe Collectors per trasformare uno stream in una lista
        List<Libro> libriFiltrati = libri.stream()
                .limit(2)
                .collect(Collectors.toList());
        System.out.println("-----------------------------");
        System.out.println("Lista di libri filtrati: ");
        libriFiltrati.forEach(System.out::println);

        //Utilizzo della classe Collectors per trasformare uno stream in un set
        // a differenza del toList, nel caso in cui lo stream abbia dei duplicati
        // verrà inserito nel set solo uno dei valori
        // Il confronto, a meno che non si tratti di primitive, avviene tramite il metodo equals

        List<Libro> libriSet = libri.stream().limit(4).collect(collectors.toSet());
    }

}
