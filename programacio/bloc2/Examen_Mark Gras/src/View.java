import java.util.ArrayList;

public class View {

    public static void mostrarLLista (ArrayList llista) {
        String llistaString = "";
        for (Object o : llista) {
            System.out.println(o.toString());
        }
    }
}
