declare option output:method "html";
declare option output:indent "yes";

<html>
  <head>
    <title>XQ</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <h1>Exercici 6</h1>
    <table>
      <th>Numero Empleat</th>
      <th>Nom</th>
      <th>Oficina</th>
      {
        for $c in json-doc("empleados.json")?empresa?empleados?empleado?*
        where exists($c?Oficina)
        return
          <tr>
            <td>{$c?NumEmp}</td>
            <td>{$c?Nombre}</td>
            <td>{$c?Oficina}</td>
          </tr>
      }
    </table>
    <br>
    <h1>Exercici 7</h1>
      <table>
        <tr>
          <th>NumPedido</th>
          <th>Import</th>
          <th>Client</th>
          <th>Límit de Crèdit</th>
        </tr>
        {
          for $pedidos in json-doc("empleados.json")?empresa?pedidos?pedido?*
          let $nomClie := $pedidos?Cliente
          let $clientes := for $c in json-doc("empleados.json")?empresa?clientes?cliente?*
                                where $c?Nombre = $nomClie
                           return $c
          
          return
          <tr>
            <td>{$pedidos?NumPedido}</td>
            <td>{$pedidos?Importe}</td>
            <td>{$pedidos?Cliente}</td>
            <td>{$clientes?LimiteCredito}</td>
          </tr>
        }
      </table>
    </br>
    <h1>Exercici 8</h1>
    <table>
      <tr>
        <th>Ciutat</th>
        <th>Superior</th>
      </tr>
      {
        for $oficinas in json-doc("empleados.json")?empresa?oficinas?oficina?*
        where xs:integer($oficinas?Objetivo) > 3600
        return
          <tr>
            <td>{$oficinas?Ciudad}</td>
            <td>{$oficinas?Objetivo}</td>
            <td>{$oficinas?Director}</td>
          </tr>
      }
    </table>
  </body>
</html>