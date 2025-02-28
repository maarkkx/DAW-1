public class So extends Multimedia {
    String format;

    public So(String _identificador, String _localitzacio, String _nom, float _durada, String _format) {
        super(_identificador, _localitzacio, _nom, _durada);
        format = _format;
    }

    @Override
    public String toString() {
        return identificador +
                ": localitzacio= " + localitzacio +
                ", nom= " + nom +
                ", durada= " + durada +
                ", format= " + format;
    }
}
