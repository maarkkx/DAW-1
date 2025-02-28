import java.util.ArrayList;


public class Model {
    private static ArrayList<Object> recurs = new ArrayList<>();

    public int buscarRecursPos(String id) {
        int pos = recurs.indexOf(id);
        return pos;
    }

    public static void afegirRecurs(String id, String localitzador, String nom, float durada) {
        String identificador = "VID_" + id;

        Video vid1 = new Video(identificador, localitzador, nom, durada);
        recurs.add(vid1);
    }

    public static void afegirRecurs(String id, String localitzador, String nom, float durada, String format) {
        String identificador = "SND_" + id;

        So so1 = new So(identificador, localitzador, nom, durada, format);
        recurs.add(so1);
    }

    public static void afegirRecurs(String id, String localitzador, float midaHoritzontal, float midaVertical, boolean color) {
        String identificador = "IMG_" + id;

        Imatge img1 = new Imatge(identificador, localitzador, midaHoritzontal, midaVertical, color);
        recurs.add(img1);
    }

    public void eliminarRecurs(String id) {
        int pos = recurs.indexOf(id);
        recurs.remove(pos);
    }

    public ArrayList filtrarRecursos(String tipus) {
        ArrayList<Object>filtrat = new ArrayList<Object>();
        for (int x = 0; x < recurs.size(); x++) {
            if (recurs.get(x) == tipus) {
                filtrat.add(recurs.get(x));
            }
        }
        return filtrat;
    }

    public static ArrayList getArraylist() {
        return recurs;
    }
}
