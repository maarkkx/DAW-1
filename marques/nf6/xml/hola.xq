declare option output:indent "yes";

for $articulos in doc ("Neptuno.xml")//Articulos
where $articulos/NombreCategoria = "Bebidas" or $articulos/NombreCategoria = "Condimentos"
return
<resultado>
  <referencia>{$articulos/RefArticulo/text ()}</referencia>
  <refProveedor>{ $articulos/RefProveedor/text ()}</refProveedor>
  <nombre>{ $articulos/NombreArticulo/text ()}</nombre>
  <categoria>{ $articulos/NombreCategoria/text ()}</categoria>
  <preu>{ $articulos/PrecioUnidad/text ()}</preu>
  <unitats>{ $articulos/UnidadesExistencia/text ()}</unitats>
</resultado>