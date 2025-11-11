declare option output:indent "yes";

for $coche in doc("concesionario.xml")//Coche [Precio > 12000]
let $clientes := doc("concesionario.xml")//Cliente[CodigoCliente = $coche/CodigoCliente]
return
<resultado>
  <CodigoCliente>{$clientes/CodigoCliente/text()}</CodigoCliente>
  <nom>{$clientes/Nombre/text ()}</nom>
  <Apellidos>{$clientes/Apellidos/text ()}</Apellidos>
  <Precio>{$coche/Precio/text()}</Precio>
</resultado>