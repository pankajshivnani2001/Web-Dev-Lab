<xsl:stylesheet version = "1.0" 
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform"> 

<xsl:template match = "/class">

	<html>
		<body>
			<h2>Student List</h2>
			
			<table border = "1">
				<tr bgcolor="lightgreen">
					<th>Order ID</th>
					<th>Customer ID</th>
					<th>Amount</th>
                    <th>Mode Of Payment</th>
                    <th>Payment Status</th>
				</tr>
				
				<xsl:for-each select = "Transaction">
                    <xsl:if test="PaymentInfo/Status = 'Successful'">
                        <tr>
                            <td><xsl:value-of select = "ID/OrderId"/></td>
                            <td><xsl:value-of select = "ID/CustomerId"/></td>
                            <td><xsl:value-of select = "PaymentInfo/Amount"/></td>
                            <td><xsl:value-of select = "PaymentInfo/ModeOfPayment"/></td>
                            <td><xsl:value-of select = "PaymentInfo/Status"/></td>
                        </tr>
                    </xsl:if>
				
				</xsl:for-each>
				
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>