const terminal = document.getElementById("terminal");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const exec = document.getElementById("exec");
exec.addEventListener("click", executar);

async function executar() {
    let contrasenya = c1.value;
    let contrasenya2 = c2.value;
    console.log(contrasenya)
    console.log(contrasenya2)
    if (contrasenya.length < 8) {
        alert("La contrasenya no compleix els requisits, escriu altre contrasenya")
    } else {
        if (contrasenya == contrasenya2) {
            terminal.innerHTML = "La contrasenya s'ha configurat correctament. Has aconseguit entrar a DAW"
        } else {
            alert("Error")
        }
    }
}
