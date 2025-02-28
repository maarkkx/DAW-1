"use strict";
const conductor = document.getElementById("conductor");
const matricula = document.getElementById("matricula");
const import1 = document.getElementById("import");
const descripcio = document.getElementById("descripcio");

const afegir = document.getElementById("afegir");
const buscar = document.getElementById("buscar");
const esborrar = document.getElementById("esborrar");
const llistar = document.getElementById("llistar");

const terminal = document.getElementById("terminal");

let multes = [
	{
		conductor: "Pau Gasoil",
		matricula: "1234ABC",
		import: 30.5,
		descripcio: "Mal aparcat"
	},
	{
		conductor: "Mireia del Monte",
		matricula: "5678DEF",
		import: 50.8,
		descripcio: "No ha passat la ITV"
	},
	{
		conductor: "Andres Lasiesta",
		matricula: "4321FED",
		import: 60,
		descripcio: "Bloqueja un gual permanent"
	},
	{
		conductor: "Mireia del Monte",
		matricula: "8765CBA",
		import: 40,
		descripcio: "Sense ticket"
	},
	{
		conductor: "Andres Lasiesta",
		matricula: "1029ASD",
		import: 30.5,
		descripcio: "Ticket caducat"
	},
	{
		conductor: "Andres Lasiesta",
		matricula: "4321FED",
		import: 60,
		descripcio: "Cotxe brut"
	}
];
afegir.addEventListener("click", () => {
	let multaa = {
		conductor: conductor.value.trim(),
		matricula: matricula.value.trim(),
		import: import1.value.trim(),
		descripcio: descripcio.value.trim()
	}
	multes.push(multaa);
})
buscar.addEventListener("click", () => {
	let matricula2 = matricula.value.trim();
	let arrayMatricula = [];
	let resultat = "";
	let resultat2 = "";

	for (let x = 0; x < multes.length; x++) {
		if (matricula2 == multes[x].matricula) {
			arrayMatricula.push(multes[x].matricula)
			resultat = "conductor: " + multes[x].conductor + "<br>" + "matricula: " + multes[x].matricula + "<br>" + "import: " + multes[x].import + "<br>" + "descripcio: " + multes[x].descripcio;
			resultat2 += resultat + "<br>" + "<br>";
		}
	}
	terminal.innerHTML = resultat2;
})
esborrar.addEventListener("click", () => {
	let matricula3 = matricula.value.trim();
	for (let j = multes.length - 1; j >= 0; j--) {
		if (matricula3 == multes[j].matricula) {
			multes.splice(j, 1);
			break;
		}
	}
})
llistar.addEventListener("click", () =>{
	let resultat = "";
	let resultat2 = "";
	for (let x = 0; x < multes.length; x++) {
			resultat = "conductor: " + multes[x].conductor + "<br>" + "matricula: " + multes[x].matricula + "<br>" + "import: " + multes[x].import + "<br>" + "descripcio: " + multes[x].descripcio;
			resultat2 += resultat + "<br>" + "<br>";
	}
	terminal.innerHTML = resultat2;
})