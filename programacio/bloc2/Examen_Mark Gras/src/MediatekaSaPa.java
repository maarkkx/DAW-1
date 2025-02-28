public class MediatekaSaPa {
    public static void main(String[] args) {
        Model.afegirRecurs("1", "A1", "videoA", 120);
        Model.afegirRecurs("2", "A2", "videoB", 32);
        Model.afegirRecurs("3", "A3", "videoC", 54);
        Model.afegirRecurs("4", "A4", "videoD", 128);
        Model.afegirRecurs("5", "A5", "videoE", 40);

        Model.afegirRecurs("6", "B1", "soA", 102, ".mp3");
        Model.afegirRecurs("7", "B2", "soA", 102, ".mp3");
        Model.afegirRecurs("8", "B3", "soA", 102, ".mp3");
        Model.afegirRecurs("9", "B4", "soA", 102, ".mp3");
        Model.afegirRecurs("10", "B5", "soA", 102, ".mp3");

        Model.afegirRecurs("11", "C1", 10, 20, true);
        Model.afegirRecurs("12", "C2", 10, 20, true);
        Model.afegirRecurs("13", "C3", 10, 20, true);
        Model.afegirRecurs("14", "C4", 10, 20, true);
        Model.afegirRecurs("15", "C5", 10, 20, true);

        View.mostrarLLista(Model.getArraylist());
    }
}