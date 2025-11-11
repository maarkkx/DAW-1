for $c in json-doc("empleados.json")?empresa?clientes?cliente?*
where $c?RepClie = "Ana Bustamante"
return {
  "Nom": $c?Nombre
}