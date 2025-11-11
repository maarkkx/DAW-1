declare option output:indent "yes";

for $clientes in doc ("empresas.xml")//cliente [RepClie = "Ana Bustamante"]
return
<resultado>
  <numClient> {$clientes/NumClie/text ()} </numClient>
  <nom> {$clientes/Nombre/text ()} </nom>
  <creditLimit> {$clientes/LimiteCredito/text ()} </creditLimit>
</resultado>