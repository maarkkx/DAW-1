declare option output:method "html";
declare option output:indent "yes";

let $arxiu := doc("empresas.xml")
return
<html>
  <head>
    <title>XQ</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>EX 6</h1>
    <table>
      <tr>
        <th>Numero de empleat</th>
        <th>Nom</th>
        <th>Oficina</th>
      </tr>
      {
        for $empleados in $arxiu//empleado
        where $empleados/Oficina
        return
          <tr>
            <td>{ $empleados/NumEmp/text() }</td>
            <td>{ $empleados/Nombre/text() }</td>
            <td>{ $empleados/Oficina/text() }</td>
          </tr>
      }
    </table>

    <h1>EX 7</h1>
    <table>
      <tr>
        <th>NumPedido</th>
        <th>Import</th>
        <th>Client</th>
        <th>Límit de Crèdit</th>
      </tr>
      {
        for $pedidos in $arxiu//pedido
        let $nomClie := $pedidos/Cliente
        let $clientes := $arxiu//cliente[Nombre = $nomClie]
        return
          <tr>
            <td>{ $pedidos/NumPedido/text() }</td>
            <td>{ $pedidos/Importe/text() }</td>
            <td>{ $pedidos/Cliente/text() }</td>
            <td>{ $clientes/LimiteCredito/text() }</td>
          </tr>
      }
    </table>

    <h1>EX 8</h1>
    <table>
      <tr>
        <th>Ciutat</th>
        <th>Superior</th>
      </tr>
      {
        for $oficinas in $arxiu//oficina
        where xs:integer($oficinas/Objetivo) > 3600
        return
          <tr>
            <td>{ $oficinas/Ciudad/text() }</td>
            <td>{ $oficinas/Director/text() }</td>
          </tr>
      }
    </table>
  </body>
</html>