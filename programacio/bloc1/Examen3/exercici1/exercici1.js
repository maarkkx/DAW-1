"use strict";

let string = "dt, 31-12/24";

f4(string)

/*Li pasas un string i crida a la funcio f2 i la f3, finalment mostra la data amb un alert*/
function f4(str) {
    try {
        let obj = f2(str);
        let data = f3(obj);
    } catch (e) {
        alert(e)
    }
    alert(data)
}

/*Has de pasar-li un objecte*/
function f3(obj) {
    if (obj.any < 100) {
        let any = 0;
        any = parseInt(obj.any) + 2000;
        obj.any = any;
    }
    if (obj.dia_mes > 31 || obj.dia_mes < 1) {
        throw new Error("El dia del mes es incorrecte")
    }
    if (obj.mes > 12 || obj.mes < 1) {
        throw new Error("El mes no es valid")
    }
    let data = obj.dia_setmana + " " + obj.dia_mes + " de " + obj.mes + " de " + obj.any;
    return data;
}

/*crida la f1, has de pasar-li un string, el transforma en un objecte.*/
function f2(str) {
    f1(str)
    let regexSeparar = /[ \s-\/]/;
    let arraydata = str.split(regexSeparar)
    let objData = {
        dia_setmana: arraydata[0],
        dia_mes: arraydata[1],
        mes: arraydata[2],
        any: arraydata[3]
    }
    return objData;
}

/*Has de pasar-li un string per validar el format de la data, en cas de format incorrecte retorna un error*/
function f1(str) {
    let regexData = /^((dl)|(dt)|(dc)|(dj)|(dv)|(ds)|(dv)),[\s]*?[\d]{1,2}[-\/]*?[\d]{1,2}[-\/]*?[\d]{2,4}$/;
    if (regexData.test(str)) {
        return;
    } else {
        throw new Error("Format incorrecte");
        return;
    }
}