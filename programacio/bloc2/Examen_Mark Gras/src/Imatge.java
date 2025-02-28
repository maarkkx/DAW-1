public class Imatge extends Recurs implements Microfilm {
    float midaHoritzontal;
    float midaVertical;
    boolean color;

    public Imatge(String _identificador, String _localitzacio, float _midaHoritzontal, float _midaVertical, boolean _color) {
        super(_identificador, _localitzacio);
        midaHoritzontal = _midaHoritzontal;
        midaVertical = _midaVertical;
        color = _color;
    }

    public void show() {

    }

    public boolean prev() {
        return false;
    }

    public boolean next() {
        return false;
    }
    @Override
    public String toString() {
        return identificador +
                ": localitzacio= " + localitzacio +
                ", midaH= " + midaHoritzontal +
                ", midaV= " + midaVertical +
                ", color= " + color;
    }
}
