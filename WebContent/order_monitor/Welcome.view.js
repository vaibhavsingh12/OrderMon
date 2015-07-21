sap.ui.jsview("order_monitor.Welcome", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf order_monitor.Welcome
	*/ 
	getControllerName : function() {
		return "order_monitor.Welcome";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf order_monitor.Welcome
	*/ 
	createContent : function(oController) {
		
		var oText = new sap.m.Text({
			text : "Use this tool to Monitor Order status" 
		});
		
		return new sap.m.Page({
			title: "Welcome to SplitApp demo",
			content: [
		          new sap.ui.commons.TextView({
		        	text : "",
		        	tooltip : '',
		        	wrapping : false,
		        	semanticColor: sap.ui.commons.TextViewColor.Positive,
		        	design: sap.ui.commons.TextViewDesign.H3
		        		
		          })
			]
		});
	}

});