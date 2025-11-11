declare option output:indent "yes";

for $coche in doc ("concesionario.xml")//Coche
return
<resultado>
  <Matricula> {$coche/Matricula/text ()} </Matricula>
  <Marca> {$coche/Marca/text ()} </Marca>
  <Modelo> {$coche/Modelo/text ()} </Modelo>
  <Precio> {$coche/Precio/text ()} </Precio>
  <Fotografia> {$coche/Fotografia/text ()} </Fotografia>
</resultado>