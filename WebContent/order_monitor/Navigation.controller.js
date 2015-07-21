sap.ui.controller("order_monitor.Navigation", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf order_monitor.Navigation
*/
//	onInit: function() {
//
//	},
	
	//Called when click on Left Navigation 
	optionListItemPress : function(eve){
		
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("order_search");	//order_search is used in Routing to identify which View will be displayed
	}
	
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf order_monitor.Navigation
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf order_monitor.Navigation
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf order_monitor.Navigation
*/
//	onExit: function() {
//
//	}

});