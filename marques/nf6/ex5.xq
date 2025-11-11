declare option output:indent "yes";

for $c in json-doc("empleados.json")?empresa?pedidos?pedido?*
where xs:integer($c?Importe) > 20
order by $c?Importe descending
return {
  "Codigo": $c?Codigo,
  "NumPedido": $c?NumPedido,
  "FechaPedido": $c?FechaPedido,
  "Cliente": $c?Cliente,
  "Representante": $c?Representante,
  "Fabricante": $c?Fabricante,
  "Importe" : $c?Importe
}