sap.ui.jsview("order_monitor.Order_Search", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf order_monitor.Order_Search
	*/ 
	getControllerName : function() {
		return "order_monitor.Order_Search";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf order_monitor.Order_Search
	*/ 
	createContent : function(oController) {
		
		
		
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			
			id : "ml_Order_Search",
			layoutFixed : true,
			columns : 2,
	         width : "100%",
	         widths : [ "50%", "50%" ]
		});
		
		//creating table cells
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			hAlign : "Center"
		});
		
//		var oHeader = new sap.m.Label("lblHeader",{text : "abc 123"});
//		oCell.addContent(oHeader);
//		oMatrix.createRow(oCell);
		
		var oLabel = new sap.m.Label("lblCustNo", {text : "Customer Number",textAlign : "Center"});
		var oText = new sap.m.Input("txtCustomerNo", {value : "",});
		
		oLabel.setLabelFor(oText);
		oMatrix.createRow(oLabel, oText);
		
		var oLabel = new sap.m.Label("lblOrdNo", {text : "Order Number"});
		var oText = new sap.m.Input("txtOrdNo", {value : ""});
		
		oLabel.setLabelFor(oText);
		oMatrix.createRow(oLabel, oText);
			
		
 		return new sap.m.Page({
			title: "Order Search",
			content: [
			         oMatrix
			]
		});
	}

});