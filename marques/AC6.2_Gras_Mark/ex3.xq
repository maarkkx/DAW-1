declare option output:indent "yes";

for $c in json-doc("empleados.json")?empresa?productos?producto?*
let $preuIVA := xs:decimal($c?Precio) * 1.21
return {
  "IdFab": $c?IdFab,
  "IdProducto": $c?IdProducto,
  "Descripción": $c?Descripcion,
  "Precio": $c?Precio,
  "Precio con IVA": $preuIVA
}