public abstract class Multimedia extends Recurs implements Reproductor {
    String nom;
    float durada;

    public Multimedia(String _identificador, String _localitzacio, String _nom, float _durada) {
        super(_identificador, _localitzacio);
        nom = _nom;
        durada = _durada;
    }

    public void play() {

    }

    public void pause() {

    }

    public void stop() {

    }
}
