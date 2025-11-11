declare option output:indent "yes";

for $c in json-doc("empleados.json")?empresa?pedidos?pedido?*
where $c?Cliente = "Cristóbal García"
return {
  "Num comandes": count($c)
}