//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import model.TresorModel;
import view.TresorView;
import java.util.Scanner;
import lib.tresorLib;

public class TresorControl {
    private TresorModel model;
    private TresorView view;

    public void Control(TresorModel model, TresorView view) {
        this.model = model;
        this.view = view;
    }


    public static void main(String[] args) {
        char [][] taulerSol = new char[10][10];
        char [][] tauler = new char[10][10];
        TresorModel.PintarArray(taulerSol);
        TresorModel.PintarArray(tauler);

        String textDemanar = "Escriu una coordenada (ej: B1):";
        Scanner scan = new Scanner(System.in);
        String regexCoord = "^[A-Z]{1}\\d{1}$";





        int x = 0;
        while(x < 1) {
            int [] coordsTresor = TresorModel.CrearTresor(taulerSol);
            TresorModel.CrearObj(taulerSol, coordsTresor);

            int coordT1 = coordsTresor[0];
            int coordT2 = coordsTresor[1];


            String tauler2 = TresorView.MostrarTauler(tauler);
            String taulerSol2 = TresorView.MostrarTauler(taulerSol);
            TresorView.EscriureText(taulerSol2 + "\n" +  tauler2);

            TresorView.EscriureText(textDemanar);
            String coord = scan.nextLine().trim().toUpperCase();
            String [] array = coord.split("");
            int numCoordCol = Integer.parseInt(array[1]);
            char lletra = array[0].charAt(0);
            int numCoordFil = tresorLib.charToInt(lletra);

            if (taulerSol[numCoordFil][numCoordCol] == 'X') {
                tauler = taulerSol;
                tauler2 = TresorView.MostrarTauler(tauler);
                taulerSol2 = TresorView.MostrarTauler(taulerSol);
                TresorView.EscriureText(taulerSol2 + "\n" +  tauler2);

                TresorView.EscriureText("Has trobat el tresor y has guanyat!");
                x = 1;
            }
            if (taulerSol[numCoordFil][numCoordCol] == '*') {
                tauler = taulerSol;
                tauler2 = TresorView.MostrarTauler(tauler);
                taulerSol2 = TresorView.MostrarTauler(taulerSol);
                TresorView.EscriureText(taulerSol2 + "\n" +  tauler2);

                TresorView.EscriureText("Has trobat una trampa, has perdut :(");
                x = 1;
            }
            if (taulerSol[numCoordFil][numCoordCol] == '.') {
                tauler[numCoordFil][numCoordCol] = ' ';
                taulerSol[numCoordFil][numCoordCol] = ' ';
                TresorView.EscriureText("Has fallat");
                double distancia = tresorLib.calcularDistancia(coordT1, coordT2, numCoordFil, numCoordCol);
                if (distancia <= 1.5) {
                    TresorView.EscriureText("T'estàs cremant !!!");
                } else if (distancia <= 3) {
                    TresorView.EscriureText(" Molt calent!");
                } else if (distancia <= 5) {
                    TresorView.EscriureText(" T'estas acostant...");
                } else if (distancia <= 8) {
                    TresorView.EscriureText(" Fred, fred...");
                } else {
                    TresorView.EscriureText(" Si t'allunyes més et congelaràs");
                }
            }

        }
    }
}