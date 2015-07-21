sap.ui.controller("order_monitor.Order_List", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf order_monitor.Order_List
*/
	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
//		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	  //Now set the Model
		var oOrder_Model = new sap.ui.model.json.JSONModel("model/Orders.json");
		this.getView().setModel(oOrder_Model,"Orders");				//All orders after filtration will be available here
		
	},

	getOrderDetails : function (oEvent,oTableSuser){
//		alert(oEvent.getSource().getBindingContext("Orders"));
		
		var obj = oEvent.getSource().getBindingContext("Orders").getObject();
		console.log(obj);	//prints the JSON for your selected table row
		console.log(obj.CustomerNo); 
		this.router.navTo("order_detail", {orderID: obj.OrderNumber}); //
		
	}
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf order_monitor.Order_List
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf order_monitor.Order_List
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf order_monitor.Order_List
*/
//	onExit: function() {
//
//	}

});