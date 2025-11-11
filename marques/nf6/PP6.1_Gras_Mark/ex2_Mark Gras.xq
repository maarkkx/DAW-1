declare option output:indent "yes";

for $clientes in doc ("concesionario.xml")//Cliente [Direccion = "Vial de Paco Bayona"]
return
<resultado>
  <CodigoCliente> {$clientes/CodigoCliente/text ()} </CodigoCliente>
  <nom> {$clientes/Nombre/text ()} </nom>
  <Apellidos> {$clientes/Apellidos/text ()} </Apellidos>
  <Direccion> {$clientes/Direccion/text ()} </Direccion>
  <Poblacion> {$clientes/Poblacion/text ()} </Poblacion>
  <CodigoPostal> {$clientes/CodigoPostal/text ()} </CodigoPostal>
  <Provincia> {$clientes/Provincia/text ()} </Provincia>
  <Telefono> {$clientes/Telefono/text ()} </Telefono>
  <FechaNacimiento> {$clientes/FechaNacimiento/text ()} </FechaNacimiento>
</resultado>