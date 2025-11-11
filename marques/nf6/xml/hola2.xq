declare option output:indent "yes";

for $articulos in doc ("Neptuno.xml")//Articulos
where $articulos/UnidadesExistencia <= 20
return
<resultado>
  <referencia> {$articulos/RefArticulo/text ()} </referencia>
  <proveedor> { $articulos/RefProveedor/text ()}</proveedor>
  <nom> { $articulos/NombreArticulo/text ()}</nom>
  <categoria>{ $articulos/NombreCategoria/text ()}</categoria>
</resultado>