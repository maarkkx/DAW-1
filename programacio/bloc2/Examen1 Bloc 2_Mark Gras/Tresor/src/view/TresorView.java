package view;

public class TresorView {
    /**
     * Array per escriure un text per pantalla
     * @param text Text que s'escriura
     */
    public static void EscriureText(String text) {
        System.out.print(text);
    }

    /**
     * Array per mostrar la array per pantalla
     * @param tauler array que volem mostrar per pantalla
     * @return String de la array
     */
    public static String MostrarTauler(char[][] tauler) {
        String taulerMostrar = "";
        for (int x = 0; x < 10; x++){
            for (int y = 0; y < 10; y++) {
                taulerMostrar += tauler[x][y] + " ";
            }
            taulerMostrar += "\n";
        }
        return taulerMostrar;
    }
}
