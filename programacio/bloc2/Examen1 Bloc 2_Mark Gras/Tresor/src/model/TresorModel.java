package model;

public class TresorModel {


    /**
     * Funció per pintar tota la array amb un simbol
     * @param tauler Array que es pintara.
     * @return Retorna la array pero totes les posicions d'aquesta amb un punt.
     */
    public static char[][] PintarArray(char[][] tauler) {
        for (int y = 0; y < 10; y++) {
            for (int x = 0; x < 10; x++){
                tauler[y][x] = '.';
            }
        }
        return tauler;
    }

    /**
     * Array per crear el tresor
     * @param tauler Array bidimensional on es posara un tresor en una posicio aleatoria de la array
     * @return retorna una array amb la posicio del tresor
     */
    public static int[] CrearTresor(char[][] tauler) {
        int filRan = (int) Math.round(Math.random() * 10);
        int colRan = (int) Math.round(Math.random() * 10);
        tauler[filRan][colRan] = 'X';
        int [] posicio = new int[2];
        posicio[0] = filRan;
        posicio[1] = colRan;
        return posicio;
    }

    /**
     * Funcio per crear les trampes del tauler de forma aleatoria.
     * @param tauler array on es crearan les trampes
     * @param posicio array on esta la ubicacio del tresor
     * @return retorna una array dimensional amb les trampes posades aleatoriament.
     */
    public static char[][] CrearObj(char[][] tauler, int[] posicio) {
        int checkCol = -1;
        int checkFil = -1;
        for (int x = 0; x < 10; x++) {
            int filRan = (int) Math.round(Math.random() * 9);
            int colRan = (int) Math.round(Math.random() * 9);

            if (filRan == checkFil && colRan == checkCol) {
                x--;
            } else if (filRan == posicio[0] && colRan == posicio[1]){
                x--;
            } else {
                tauler[filRan][colRan] = '*';
            }
            checkFil = filRan;
            checkCol = colRan;

        }
        return tauler;
    }

}

