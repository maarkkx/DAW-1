declare option output:indent "yes";

for $productos in doc ("empresas.xml")//producto
let $preu := xs:decimal($productos/Precio)
let $preuIVA := $preu * 1.21
return
<resultado>
  <idFabricant> {$productos/IdFab/text ()} </idFabricant>
  <idProducte> {$productos/IdProducto/text ()} </idProducte>
  <Descripcio> {$productos/Descripcion/text ()} </Descripcio>
  <Preu> {$preu} </Preu>
  <PreuIVA> {$preuIVA} </PreuIVA>
</resultado>