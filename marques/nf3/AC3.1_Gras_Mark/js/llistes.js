const ul1 = document.getElementById("llistaUl1");
const textoUl = document.getElementById("llista1");
const addUl = document.getElementById("add1");
const delUl = document.getElementById("del1");

addUl.addEventListener("click", () => {
    let stringUl1 = textoUl.value;
    if (stringUl1 == "") {
        alert("Afegeix un element")
    } else {
        let stringLi = "<li>" + stringUl1 + "</li>";
        ul1.innerHTML += stringLi;
    }

})

delUl.addEventListener("click", () => {
    ul1.removeChild(ul1.lastElementChild);
})

const ol1 = document.getElementById("llistaOl");
const textoOl = document.getElementById("llista2");
const addOl = document.getElementById("add2");
const delOl = document.getElementById("del2");

addOl.addEventListener("click", () => {
    let stringOl1 = textoOl.value;
    if (stringOl1 == "") {
        alert("Afegeix un element")
    } else {
        let stringLiOl = "<li>" + stringOl1 + "</li>";
        ol1.innerHTML += stringLiOl;
    }

})

delOl.addEventListener("click", () => {
    ol1.removeChild(ol1.lastElementChild);
})

const titolDl = document.getElementById("titol");
const descDl = document.getElementById("desc");
const dl1 = document.getElementById("llistadl3");
const addDl = document.getElementById("add3");
const delDl = document.getElementById("del3");

addDl.addEventListener("click", () => {
    let titol = titolDl.value;
    let desc = descDl.value;
    let dt = "<dt>" + titol + "</dt>";
    let dd = "<dd>" + desc + "</dd>";

    if (titol == "" || desc == "") {
        alert("Afegeix un element")
    } else {
        dl1.innerHTML += dt + dd + "<br>";
    } 
})

delDl.addEventListener("click", () => {
    dl1.removeChild(dl1.lastElementChild)
    dl1.removeChild(dl1.lastElementChild)
    dl1.removeChild(dl1.lastElementChild)
})