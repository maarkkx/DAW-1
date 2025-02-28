public class Video extends Multimedia {

    public Video(String _identificador, String _localitzacio, String _nom, float _durada) {
        super(_identificador, _localitzacio, _nom, _durada);
    }
    @Override
    public String toString() {
        return identificador +
                ": localitzacio= " + localitzacio +
                ", nom= " + nom +
                ", durada= " + durada;
    }
}
