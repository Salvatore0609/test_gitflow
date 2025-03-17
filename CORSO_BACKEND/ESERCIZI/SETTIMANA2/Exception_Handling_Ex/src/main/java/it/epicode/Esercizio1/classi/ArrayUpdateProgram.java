package it.epicode.Esercizio1.classi;

import it.epicode.Esercizio1.exceptions.InvalidNumException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.Arrays;

public class ArrayUpdateProgram {

    private static final Logger logger = LoggerFactory.getLogger(ArrayUpdateProgram.class);
    private int[] array;

    public ArrayUpdateProgram() {
        array = new int[5];
        for (int i = 0; i < array.length; i++) {
            array[i] = (int) (Math.random() * 10) + 1;
        }
        logger.info("Array iniziale: {}", Arrays.toString(array));
    }

    public void updateArray(int number, int position) throws InvalidNumException {
        if (position < 0 || position >= array.length) {
            logger.error("La posizione {} non è valida. La posizione deve essere tra 0 e {}.", position, array.length - 1);
            throw new InvalidNumException("La posizione non è valida. La posizione deve essere tra 0 e " + (array.length - 1) + ".");
        }
        array[position] = number;
        logger.info("Array aggiornato: {}", Arrays.toString(array));
    }

    public int[] getArray() {
        return array;
    }
}
