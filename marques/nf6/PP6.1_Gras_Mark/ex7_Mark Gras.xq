declare option output:method "html";
declare option output:indent "yes";

<html>
  <head>
    <title>XQ</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <h1>Exercici 1</h1>
    <h2>Mostra els clients del concessionari amb codi postal 30006</h2>
    <table>
      <tr>
        <th>Codi Client</th>
        <th>Nom</th>
        <th>Cognoms</th>
        <th>Direccio</th>
        <th>Poblacio</th>
        <th>Codi Postal</th>
        <th>Provincia</th>
        <th>Telefon</th>
        <th>Data naixement</th>
      </tr>
      {
        for $clientes in doc ("concesionario.xml")//Cliente
        return
          <tr>
            <td>{$clientes/CodigoCliente/text ()}</td>
            <td>{$clientes/Nombre/text ()}</td>
            <td>{$clientes/Apellidos/text ()}</td>
            <td>{$clientes/Direccion/text ()}</td>
            <td>{$clientes/Poblacion/text ()}</td>
            <td>{$clientes/CodigoPostal/text ()}</td>
            <td>{$clientes/Provincia/text ()}</td>
            <td>{$clientes/Telefono/text ()}</td>
            <td>{$clientes/FechaNacimiento/text ()}</td>
          </tr>
      }
    </table>
    <br/>
    <h1>Exercici 2</h1>
    <h2>Assenyala tots els clients de la direcció Vial de Paco Bayona</h2>
    <table>
      <tr>
        <th>Codi Client</th>
        <th>Nom</th>
        <th>Cognoms</th>
        <th>Direccio</th>
        <th>Poblacio</th>
        <th>Codi Postal</th>
        <th>Provincia</th>
        <th>Telefon</th>
        <th>Data naixement</th>
      </tr>
      {
        for $clientes in doc ("concesionario.xml")//Cliente [Direccion = "Vial de Paco Bayona"]
        return
          <tr>
            <td>{$clientes/CodigoCliente/text ()}</td>
            <td>{$clientes/Nombre/text ()}</td>
            <td>{$clientes/Apellidos/text ()}</td>
            <td>{$clientes/Direccion/text ()}</td>
            <td>{$clientes/Poblacion/text ()}</td>
            <td>{$clientes/CodigoPostal/text ()}</td>
            <td>{$clientes/Provincia/text ()}</td>
            <td>{$clientes/Telefono/text ()}</td>
            <td>{$clientes/FechaNacimiento/text ()}</td>
          </tr>
      }
    </table>
    <br/>
    <h1>Exercici 3</h1>
    <h2>Indica la matricula, la marca, el model, el preu i la fotografia de tots els cotxes venuts en el concesionario</h2>
    <table>
      <tr>
        <th>Matricula</th>
        <th>Marca</th>
        <th>Model</th>
        <th>Preu</th>
        <th>Foto</th>
      </tr>
      {
        for $coche in doc ("concesionario.xml")//Coche
        return
        <tr>
          <td>{$coche/Matricula/text ()}</td>
          <td>{$coche/Marca/text ()}</td>
          <td>{$coche/Modelo/text ()}</td>
          <td>{$coche/Precio/text ()}</td>
          <td>{$coche/Fotografia/text ()}</td>
        </tr>
      }
    </table>
    <br/>
    <h1>Exercici 4</h1>
    <h2>Cita el nom, els cognoms i la matricula d’aquells clients que han comprat un cotxe</h2>
    <table>
      <tr>
        <th>Nom</th>
        <th>Cognoms</th>
        <th>Matricula</th>
      </tr>
      {
        for $coche in doc("concesionario.xml")//Coche
        let $clientes := doc("concesionario.xml")//Cliente[CodigoCliente = $coche/CodigoCliente]
        return
        <tr>
          <td>{$clientes/Nombre/text()}</td>
          <td>{$clientes/Apellidos/text()}</td>
          <td>{$coche/Matricula/text()}</td>
        </tr>
      }
    </table>
    <br/>
    <h1>Exercici 5</h1>
    <h2>Presenta el codi de client, el nom i els cognoms dels clients que van comprar els cotxes amb preu superior a 12.000€</h2>
    <table>
      <tr>
        <th>Codi Client</th>
        <th>Nom</th>
        <th>Cognoms</th>
        <th>Preu</th>
      </tr>
      {
        for $coche in doc("concesionario.xml")//Coche [Precio > 12000]
        let $clientes := doc("concesionario.xml")//Cliente[CodigoCliente = $coche/CodigoCliente]
        return
        <tr>
          <td>{$clientes/CodigoCliente/text()}</td>
          <td>{$clientes/Nombre/text ()}</td>
          <td>{$clientes/Apellidos/text ()}</td>
          <td>{$coche/Precio/text()}</td>
        </tr>
      }
    </table>
    <br/>
    <h1>Exercici 6</h1>
    <h2>Mostra el un llistat de tots els cotxes que precissen fer una revisió</h2>
    <table>
      <tr>
        <th>Matricula</th>
        <th>Cambi Oli</th>
        <th>Cambi Filtre</th>
        <th>Revisio Frens</th>
      </tr>
      {
        for $revision in doc("concesionario.xml")//Revision [CambioAceite = "false" or CambioFiltro = "false" or RevisionFrenos = "false"]
        return
        <tr>
          <td>{$revision/Matricula/text()}</td>
          <td>{$revision/CambioAceite/text()}</td>
          <td>{$revision/CambioFiltro/text()}</td>
          <td>{$revision/RevisionFrenos/text()}</td>
        </tr>
      }
    </table>
  </body>
</html>