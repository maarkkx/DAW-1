declare option output:indent "yes";

for $c in json-doc("empleados.json")?empresa?pedidos?pedido?*
where month-from-date(xs:date($c?FechaPedido)) = 1
return {
  "Codigo": $c?Codigo,
  "NumPedido": $c?NumPedido,
  "FechaPedido": $c?FechaPedido,
  "Cliente": $c?Cliente,
  "Representante": $c?Representante,
  "Fabricante": $c?Fabricante,
  "Importe" : $c?Importe
}