package brawlstars;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Objects;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num = -1;
        while (num != 0) {
            System.out.println("1. Comprovar Mida");
            System.out.println("2. Modificar dades");
            System.out.println("3. Mitja");
            System.out.println("0. Acabar");
            System.out.println("Entra una opció (0-3): ");

            num = scan.nextInt();
            switch (num) {
                case (1):
                    comprovarMida();
                    break;

                case (2):
                    modificarDades();
                    break;

                case (3):
                    mitjaClass();
                    break;
            }
        }
    }


    public static void comprovarMida() {
        File tournament = new File("Tournaments.stats");
        if (tournament.length() > 2500) {
            try {
                Scanner lectura = new Scanner(tournament);

                String text = "";
                File low = new File("LowScore.stats");
                //Creo l'arxiu en cas de que no existeixi
                if (!low.exists()) {
                    low.createNewFile();
                    System.out.println("S'ha creat l'arxiu LowScore.stats\n");
                }


                PrintStream escriure = new PrintStream(low);

                int comptadorLinia = 0;

                while (lectura.hasNextLine()) {
                    text = lectura.nextLine();
                    if (text.isEmpty())  continue;
                    String [] dades = text.split(";");

                    if (comptadorLinia >= 1) { //Faig aquest if per no copiar la primera linia
                        String numm = dades[3];
                        int num1 = Integer.parseInt(numm);
                        if (num1 < 70) {
                            String brawler = dades[0] + ";" + dades[1] + ";" + dades[2] + ";" + dades[3] + ";" + dades[4];
                            escriure.println(brawler);
                        }
                    }
                    comptadorLinia++;
                }
            } catch (IOException error) {
                System.out.println("No s'ha pogut llegir l'arxiu\n");
            }
            System.out.println("S'ha modificat el contingut del arxiu LowScore.stats correctament\n");
        }
    }

    public static void modificarDades() {
        File tournament = new File("Tournaments.stats");
        try{
            Scanner lectura = new Scanner(tournament);
            String text = "";
            int comptador = 0;
            while (lectura.hasNextLine()) {
                text = lectura.nextLine();
                if (text.isEmpty())  continue;

                if (comptador >= 1) { //Faig aquest if per no copiar la primera linia

                    String [] paraules = text.split(";");
                    String arxNom = "Brawlers/" + paraules[1] + "/" + paraules[2];

                    File arx = new File (arxNom);
                    arx.mkdirs(); //Creo les carpetes de tots els brawlers abans de crear l'arxiu per si falta alguna

                    String arxNom2 = "Brawlers/" + paraules[1] + "/" + paraules[2] + "/" +  paraules[0] + ".stats";
                    File arx2 = new File (arxNom2);
                    arx2.createNewFile(); //Creo els arxius de brawlers
                    System.out.println("S'ha creat l'arxiu i/o estructura: " + "\"" + arxNom2 + "\"");

                    try {
                        PrintStream escriure = new PrintStream(arx2);
                        String contingut = paraules[3] + ";" + paraules[4];
                        escriure.println(contingut);
                        System.out.println("S'ha modificat el contingut de l'arxiu: " + arxNom2 + "\n");
                    } catch (IOException error) {
                        System.out.println("No es pot crear l'arxiu i modificarlo\n");
                    }
                }
                comptador++;
            }
        } catch (IOException e) {
            System.out.println("No s'ha pogut llegir l'arxiu\n");
        }

    }

    public static void mitjaClass () {
        int comptadorClassArtillery = 0;
        int comptadorClassAssasin = 0;
        int comptadorClassController = 0;
        int comptadorClassDmg = 0;
        int comptadorClassMarksman = 0;
        int comptadorClassTank = 0;
        int mitjaArtillery = 0;
        int mitjaAssasin = 0;
        int mitjaController = 0;
        int mitjaDmg = 0;
        int mitjaMarksman = 0;
        int mitjaTank = 0;

        File low = new File("LowScore.stats");
        try {
            Scanner lectura = new Scanner(low);
            String text = "";

            while (lectura.hasNextLine()) {
                text = lectura.nextLine();
                if (text.isEmpty())  continue;
                String [] paraules = text.split(";");

                if (Objects.equals(paraules[1], "Artillery")) {
                    comptadorClassArtillery++;
                    mitjaArtillery += Integer.parseInt(paraules[3]);
                }
                if (Objects.equals(paraules[1], "Assassin")) {
                    comptadorClassAssasin++;
                    mitjaAssasin += Integer.parseInt(paraules[3]);
                }
                if (Objects.equals(paraules[1], "Controller")) {
                    comptadorClassController++;
                    mitjaController += Integer.parseInt(paraules[3]);
                }
                if (Objects.equals(paraules[1], "Damage Dealer")) {
                    comptadorClassDmg++;
                    mitjaDmg += Integer.parseInt(paraules[3]);
                }
                if (Objects.equals(paraules[1], "Marksman")) {
                    comptadorClassMarksman++;
                    mitjaMarksman += Integer.parseInt(paraules[3]);
                }
                if (Objects.equals(paraules[1], "Tank")) {
                    comptadorClassTank++;
                    mitjaTank += Integer.parseInt(paraules[3]);
                }
            }
            mitjaArtillery = mitjaArtillery / comptadorClassArtillery;
            mitjaMarksman = mitjaMarksman / comptadorClassMarksman;
            mitjaController = mitjaController / comptadorClassController;
            mitjaDmg = mitjaDmg / comptadorClassDmg;
            mitjaAssasin = mitjaAssasin / comptadorClassAssasin;
            mitjaTank = mitjaTank / comptadorClassTank;

            System.out.println("Damage Dealer: " + mitjaDmg + "\nArtillery: " + mitjaArtillery + "\nTank: " + mitjaTank + "\nController: " + mitjaController + "\nAssasin" + mitjaAssasin + "\nMarksman: " + mitjaMarksman + "\n");

        } catch (IOException e) {
            System.out.println("No s'ha pogut llegir l'arxiu\n");
        }

    }
}