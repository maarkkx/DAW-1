declare option output:indent "yes";

for $revision in doc("concesionario.xml")//Revision [CambioAceite = "false" or CambioFiltro = "false" or RevisionFrenos = "false"]
return
<resultado>
  <Matricula>{$revision/Matricula/text()}</Matricula>
  <CambioAceite>{$revision/CambioAceite/text()}</CambioAceite>
  <CambioFiltro>{$revision/CambioFiltro/text()}</CambioFiltro>
  <RevisionFrenos>{$revision/RevisionFrenos/text()}</RevisionFrenos>
</resultado>