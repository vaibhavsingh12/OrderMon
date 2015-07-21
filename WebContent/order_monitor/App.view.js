sap.ui.jsview("order_monitor.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf order_monitor.App
	*/ 
	// This is first file which we have coded 
	
	
	getControllerName : function() {
		return "order_monitor.App";   //this is not mandatory to have but we are keeping this
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf order_monitor.App
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true); 						//We do not want scrolling in application
		return new sap.m.SplitApp("order_monitor_app",{});	//creating order_monitor_app type application
	}

});