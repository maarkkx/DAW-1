declare option output:indent "yes";

for $pedidos in doc ("empresas.xml")//pedido
where xs:integer($pedidos/Importe) > 20
order by xs:integer($pedidos/Importe) descending
return
<resultado>
  <codi> {$pedidos/Codigo/text ()} </codi>
  <NumComanda> {$pedidos/NumPedido/text ()} </NumComanda>
  <data> {$pedidos/FechaPedido/text ()} </data>
  <client> {$pedidos/Cliente/text ()} </client>
  <Representant> {$pedidos/Representante/text ()} </Representant>
  <Fabricant> {$pedidos/Fabricante/text ()} </Fabricant>
  <Import> {$pedidos/Importe/text ()} </Import>
</resultado>