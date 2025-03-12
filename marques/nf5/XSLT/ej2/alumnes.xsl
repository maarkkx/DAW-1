<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
        <html>
            <body>
                <table>
                    <tr>
                        <th>Nom</th>
                        <th>edat</th>
                        <th>nota</th>
                    </tr>
                    <xsl:for-each select="escola/alumne">
                        <tr>
                            <td><xsl:value-of select="nom"/></td>
                            <td><xsl:value-of select="edat"/></td>
                            <td><xsl:value-of select="nota"/></td>
                            <xsl:choose>
                                <xsl:when test="number(nota) &lt; 5"><td>Suspès</td></xsl:when>
                                <xsl:when test="number(nota) &gt;= 5"><td>Aprovat</td></xsl:when>
                            </xsl:choose>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>