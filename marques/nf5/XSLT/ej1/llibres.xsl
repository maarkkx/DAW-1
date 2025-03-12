<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <html>
            <body>
            <h1>Llibres</h1>
            <xsl:for-each select="llibreria/llibre">
                <ul>                    
                    <li><h2><xsl:value-of select="titol"/></h2></li>
                    <li><p><xsl:value-of select="autor"/></p></li>
                </ul>
            </xsl:for-each>
            </body>
        </html>
    </xsl:template>

    

</xsl:stylesheet>