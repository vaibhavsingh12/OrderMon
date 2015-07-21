sap.ui.jsview("order_monitor.Order_Detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf order_monitor.Order_Detail
	*/ 
	getControllerName : function() {
		return "order_monitor.Order_Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf order_monitor.Order_Detail
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Order Details",
			content: [
			
			]
		});
	}

});