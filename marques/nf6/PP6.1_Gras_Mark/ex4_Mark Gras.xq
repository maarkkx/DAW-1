declare option output:indent "yes";

for $coche in doc("concesionario.xml")//Coche
let $clientes := doc("concesionario.xml")//Cliente[CodigoCliente = $coche/CodigoCliente]
return
<resultado>
  <Nombre>{$clientes/Nombre/text()}</Nombre>
  <Apellidos>{$clientes/Apellidos/text()}</Apellidos>
  <Matricula>{$coche/Matricula/text()}</Matricula>
</resultado>