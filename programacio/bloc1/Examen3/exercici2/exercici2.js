"use strict";
let simbol1 = "x";
let simbol2 = "o";
let array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


/*Has de pasar-li una array bidimensional (a), el numero de la fila(f) i
 el simbol que ha de ser igual (s). Retorna True si tots els elements de
 la fila son iguals, fals si no ho son*/
function comprFiles(a, f, s) {
    let check = true;
    if (a[f][0] != s) {
        check = false;
    } else if (a[f][1] != s) {
        check = false;
    } else if (a[f][2] != s) {
        check = false;
    }
    return check;
}

/*Has de pasar-li una array bidimensional (a), el numero de la columna(c) i
el simbol que ha de ser igual (s). Retorna True si tots els elements de la 
columna son iguals, fals si no ho son*/
function comprCol(a, c, s) {
    let check = true;
    if (a[0][c] != s) {
        check = false;
    } else if (a[1][c] != s) {
        check = false;
    } else if (a[2][c] != s) {
        check = false;
    }
    return check;
}

/*Has de pasar-li una array bidimensional (a) i el simbol que vols comprovar (s).
Retorna True si tots els elements de la diagonal principal son igual a (s) i false si no ho son*/
function comprDia1(a, s) {
    let check = true;
    if (a[0][0] != s) {
        check = false;
    } else if (a[1][1] != s) {
        check = false;
    } else if (a[2][2] != s) {
        check = false;
    }
    return check;
}

/*Has de pasar-li una array bidimensional (a) i el simbol que vols comprovar (s).
Retorna True si tots els elements de la diagonal secundaria son igual a (s) i false si no ho son*/
function comprDia2(a, s) {
    let check = true;
    if (a[0][2] != s) {
        check = false;
    } else if (a[1][1] != s) {
        check = false;
    } else if (a[2][0] != s) {
        check = false;
    }
    return check;
}

/*Has de pasar-li una array bidimensional (a), el numero de la fila(f) i
 el simbol que ha de ser igual (s). Retorna True si un dels elements de
 la fila es igual, fals si no hi ha cap*/
function comprSimFil(a, f, s) {
    let check = false;
    if (a[f][0] == s) {
        check = true;
    } else if (a[f][1] == s) {
        check = true;
    } else if (a[f][2] == s) {
        check = true;
    }
    return check;
}

/*Has de pasar-li una array bidimensional (a), el numero de la columna(c) i
el simbol que ha de ser igual (s). Retorna True si un dels elements de la 
columna es igual, fals si no hi ha cap*/
function comprSimCol(a, c, s) {
    let check = false;
    if (a[0][c] == s) {
        check = true;
    } else if (a[1][c] == s) {
        check = true;
    } else if (a[2][c] == s) {
        check = true;
    }
    return check;
}

/*Has de pasar-li una array bidimensional (a) i el simbol que vols comprovar (s).
Retorna True si un dels elements de la diagonal principal es igual a (s) i false si no*/
function comprSimDia1(a, s) {
    let check = false;
    if (a[0][0] == s) {
        check = true;
    } else if (a[1][1] == s) {
        check = true;
    } else if (a[2][2] == s) {
        check = true;
    }
    return check;
}

/*Has de pasar-li una array bidimensional (a) i el simbol que vols comprovar (s).
Retorna True si un dels elements de la diagonal secundaria es igual a (s) i false si no*/
function comprSimDia2(a, s) {
    let check = false;
    if (a[0][2] == s) {
        check = true;
    } else if (a[1][1] == s) {
        check = true;
    } else if (a[2][0] == s) {
        check = true;
    }
    return check;
}

/*Aquesta funcio demana dades al usuari com la fila, columna i el simbol que despres amb
un altre funcio es podra afegir a la array bidimensional retorna en forma d objecte les dades
introduides en format correcte */
function demanarUsuari() {
    try {
        let f = prompt("Escriu la lletra de la fila (A, B, C)");
        if (f == "A" || f == "B" || f == "C" || f == "a" || f == "b" || f == "c")
            throw new Error("Error en la dada de la fila")

        let c = parseInt(prompt("Escriu el numero de la columna (1, 2, 3)"));
        if (c == 1 || c == 2 || c == 3)
            throw new Error("Error en la dada de la columna")

        let s = prompt("Escriu la fitxa que vols posar (X o O)")
        if (s == "X" || s == "O" || s == "x" || s == "o")
            throw new Error("Error en el simbol")

    } catch (e) {
        alert("El tipus de dada no es correcte")
        console.log(e)
    }
    let tot = f + c + s;
    console.log("Ha escollit: " + tot)

    f -= 1;
    c -= 1;
    let obj = {
        fila: f,
        columna: c,
        simbol: s
    }

    return obj;
}

/*Aquesta funcio demana una array (a) i un objecte (obj). Segons les dades del objecte, en una fila y columna
posa un simbol, si aquest espai ja esta ocupat dona un error*/
function posarSimbolArray(a, obj) {
    try {
        if (a[obj.fila][obj.columna] == "x" || a[obj.fila][obj.columna] == "X" || a[obj.fila][obj.columna] == "o" || a[obj.fila][obj.columna] == "O")
            throw new Error("Error aquest espai ja esta ocupat")
        else
            a[obj.fila][obj.columna] = obj.simbol;

    } catch (e) {
        alert("Aquest espai ja esta ocupat")
        console.log(e)
    }
}