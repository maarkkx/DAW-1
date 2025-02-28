const arRes1 = document.getElementById("arRes1");
const arRes2 = document.getElementById("arRes2");

//Exercici 8 Maxim dun array
let array1 = [1, 6, 8, 3, 5, 2, 2, 9, 4]
array1.sort();
array1.reverse();

arRes1.innerHTML = "El número més gran de la llista és: " + array1[0];

//Exercici 9 Ordenar Array 
let array2 = [2, 3, 5, 7, 3, 2, 4, 5, 7, 8, 3, 1, 3, 2]
array2.sort();
let resultat = "";

for (let x = 0; x < array2.length; x++) {
    resultat += array2[x] + " "
}

arRes2.innerHTML = "Array ordenada: " + resultat;