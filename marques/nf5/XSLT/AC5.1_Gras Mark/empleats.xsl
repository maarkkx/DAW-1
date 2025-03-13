<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
    <html>
        <head>
            <link rel="stylesheet" href="css/style.css" type="text/css"/>        
        </head>
        <body>
            <title>Empleats</title>
            <h1>Llista d'Empleats</h1>
            <table>
                <tr>
                    <th><p>Nom</p></th>
                    <th><p>Càrrec</p></th>
                    <th><p>Departament</p></th>
                    <th><p>Sou(€)</p></th>
                    <th><p>Sou després d'impostos(€)</p></th>
                    <th><p>Categoria</p></th>
                </tr>
                <xsl:for-each select="oficina/empleat[sou > 2000]">
                    <xsl:sort select="sou" order="descending"/>
                    <tr>
                        <td><xsl:value-of select="nom"/></td>
                        <td><xsl:value-of select="carrec"/></td>
                        <td><xsl:value-of select="departament"/></td>
                        <td>
                            <xsl:if test="sou &gt;= 4500">
                                <span class="mas4k"><xsl:value-of select="sou"/></span>
                            </xsl:if>
                            <xsl:if test="sou &lt; 4500">
                                <span><xsl:value-of select="sou"/></span>
                            </xsl:if>
                        </td>
                        <td><xsl:value-of select="sou*0.80"/></td>
                        <xsl:choose>
                            <xsl:when test="number(experiencia) &gt;= 5"><td><p class="senior">Senior</p></td></xsl:when>
                            <xsl:when test="number(experiencia) &lt; 5"><td><p class="junior">Junior</p></td></xsl:when>
                        </xsl:choose>
                            
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>