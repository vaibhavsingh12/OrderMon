sap.ui.jsview("order_monitor.Navigation", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf order_monitor.Navigation
	*/ 
	getControllerName : function() {
		return "order_monitor.Navigation";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf order_monitor.Navigation
	*/ 
	createContent : function(oController) {
		var oNavigation = new sap.m.List({
			id : "navList"
		})
		
		oNavigation.bindItems({
			path : "Options>/collection", 
			template : new sap.m.StandardListItem({
				title: "{Options>option}",
				type: sap.m.ListType.Navigation,
				press:function(evt){
					oController.optionListItemPress(evt);
				}
			})
		});
		
		return new sap.m.Page({
			title: "Options",
			icon : "sap-icon://sys-cancel",
			content: [oNavigation]
		});
	}

});