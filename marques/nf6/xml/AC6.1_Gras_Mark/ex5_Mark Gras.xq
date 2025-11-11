declare option output:indent "yes";

for $pedidos in doc ("empresas.xml")//pedido
where substring($pedidos/FechaPedido, 6, 2) = "01"
return
<resultado>
  <codi>{ $pedidos/Codigo/text() }</codi>
  <NumComanda>{ $pedidos/NumPedido/text() }</NumComanda>
  <data>{ $pedidos/FechaPedido/text() }</data>
  <Representant>{ $pedidos/Representante/text() }</Representant>
  <Fabricant>{ $pedidos/Fabricante/text() }</Fabricant>
  <Import>{ $pedidos/Importe/text() }</Import>
</resultado>