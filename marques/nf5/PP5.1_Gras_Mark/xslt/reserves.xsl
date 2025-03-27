<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="css/style.css" type="text/css"/>        
            </head>
            <body>
                <title>XSLT</title>
                <h1>1. Nom i cognom de tots els investigadors</h1>

                <table>
                    <xsl:for-each select="laboratori/investigadors/investigador">
                        <tr>
                            <td><xsl:value-of select="NomInvestigador"/></td>
                            <td><xsl:value-of select="CognomInvestigador"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <h1>2. Dates de reserves de l'investigador amb DNI 32544331 (ordenades)</h1>
                <table>
                    <xsl:for-each select="laboratori/reserves/reserva[DNI = 32544331]">
                        <xsl:sort select="DataInici" order="Ascending"/>
                            <tr>
                                <td><xsl:value-of select="DataInici"/> - <xsl:value-of select="DataFi"/><br/></td>
                            </tr>
                    </xsl:for-each>
                </table>

                <h1>3. Investigadors amb la seva facultat</h1>
                <table>
                <xsl:for-each select="laboratori/investigadors/investigador">
                    <tr>
                        <td><xsl:value-of select="DNI"/></td>
                        <td><xsl:value-of select="NomInvestigador"/></td>
                        <td><xsl:value-of select="CognomInvestigador"/></td>
                        <xsl:for-each select="laboratori/facultats/facultat[IdFacultat = laboratori/investigadors/investigador/IdFacultat]">
                            <td><xsl:value-of select="NomFacultat"/></td>
                        </xsl:for-each>

                    </tr> 
                </xsl:for-each>
                </table>

                <h1>4. Equips reservats per Joan Bastardes Soto (ordenats per nom)</h1>

                <table> 
                <xsl:for-each select="laboratori/reserves/reserva[DNI = 32544331]">
                    <tr>
                        <td><xsl:value-of select="IdEquip"/></td>
                    </tr>
                </xsl:for-each>
                    <tr>
                        <xsl:if test="laboratori/equips/equip/IdEquip = laboratori/reserves/reserva[DNI = 32544331]/IdEquip">
                            <td><xsl:value-of select="laboratori/equips/equip/Nom"/></td>
                        </xsl:if>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>