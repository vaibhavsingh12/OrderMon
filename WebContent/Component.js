// Component.js file is a standard file with standard name "Component"
// This name should not be changed compiler search file with this name.

jQuery.sap.declare("sap.order_monitor.Component"); // Declare Component file

//Extending the Component.js Class 
sap.ui.core.UIComponent.extend("sap.order_monitor.Component",{
	
	metadata : {
		
		routing : {
			
			// Configuration for View (ex what kind of View is this etc..)
			config: {
				
				viewType : "JS",			//All View type
				viewPath : "order_monitor",	//Where all Views are placed so in order_monitor Folder
				targetControl : "order_monitor_app", //Where all Views will be displayed, so in SplitApp control in Index.html This is defined in App.js
				clearTarget : false,
				transition : "slide"
			},
			// Routing will be done here
			routes: [
			        {
					pattern: "order_search",	//routing pattern name defined on left navigation link click
					name: "order_search",		//any name can be given
					view: "Navigation",			//which View to display on Details page
					targetAggregation: "masterPages", 
					subroutes : [
					             	{
		        	             		pattern : "order_search",
		        	             		name : "order_search",	//Name given
		        	             		view : "Order_Monitor",	// Which View will be displayed on Right side which is called DetailsPage
		        	             		targetAggregation : "detailPages"	//This is Right side Page so it is called DetailsPage
					             	}
					            ]
			        },
					{
						   pattern: "",
						   name: "default",
						   view: "Navigation",
						   targetAggregation: "masterPages",
						   subroutes: [
						               {
						            	   pattern: "",
								    	   name: "Welcome",
								    	   view: "Welcome",
								    	   targetAggregation: "detailPages",
						               }
						               
						   ]
					},
					{
						pattern: "Order_List",	//routing pattern name defined on left navigation link click
						name: "order_list",		//any name can be given
						view: "Order_List",			//which View to display on Details page
						targetAggregation: "detailPages", 
					},
					{
						pattern: "Order_Detail/{orderID}",	// routing pattern name defined on left navigation link click
						name: "order_detail",				//any name can be given
						view: "Order_Detail",				//which View to display on Details page
						targetAggregation: "detailPages", 
					}
			]
		}
		
	},
	
	// Will be called as soon as application executed for here we can define all Routing initialization logic
	init : function(){
		
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.Router");
		
		//Call createContent method here
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		this._router = this.getRouter();
		
		//initialize the router
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();
		
	},
	
	createContent : function(){
		
		var oView = sap.ui.view({
			
			id : "app",						//ID given to View
			viewName : "order_monitor.App",	//Name of View taken from APP.JS file
			type : "JS",					//View type its a Javascript view
			viewData : {component : this}	
			
		});
		
		//Now set the Model
		var oOption_Model = new sap.ui.model.json.JSONModel("model/Options.json");
		oView.setModel(oOption_Model,"Options");				//All orders after filtration will be available here
		
		//Creating blank Model to set the value of individual Order Information which will be used 
		//when user will click on Order link to see the details
		var Order_Details = {
				
				item : []
		}
		
		//Setting another Model for Order Details Page
		var oOrd_Det_Model = new sap.ui.model.json.JSONModel(Order_Details);
		oView.setModel(oOrd_Det_Model,"Order_Details");
		
		return	oView;
		
	}
})
