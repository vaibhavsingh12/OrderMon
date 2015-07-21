sap.ui.jsview("order_monitor.Order_List", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf order_monitor.Order_List
	*/ 
	getControllerName : function() {
		return "order_monitor.Order_List";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf order_monitor.Order_List
	*/ 
	createContent : function(oController) {

		var oInfoToolbar = new sap.m.Toolbar({
    		active : true,
    		content : [
    			new sap.m.Text({
    				text : "Click on Order number for details",
    				wrapping : false
    			}),
    			new sap.m.ToolbarSpacer(),
    		]
    	}).attachPress(function() {
    		sap.m.MessageToast.show("InfoBar Pressed!");
    	});
		
		var oTable = new sap.m.Table("orderdata", {
	        inset: true,
	        columns: [
	            new sap.m.Column({
	                header: new sap.m.Label({ text: "Order Number" }),
	                mergeDuplicates: true
	            }),
	            new sap.m.Column({ header: new sap.m.Label({ text: "Customer No" })}),
	            new sap.m.Column({ header: new sap.m.Label({ text: "Customer Name" }) }),
	            new sap.m.Column({
	                header: new sap.m.Label({ text: "Order Type" }).addStyleClass("columnhdr"),
	                minScreenWidth: sap.m.ScreenSize.Tablet,
	                demandPopin: true,
	                popinDisplay: "Block"
	            }),
	            new sap.m.Column({ 
	            	header: new sap.m.Label({ text: "Status" }).addStyleClass("columnhdr"), 
	            	hAlign: "Right",
	            	minScreenWidth: sap.m.ScreenSize.Tablet,
	            	demandPopin: true,
	                popinDisplay: "Block"
	            }),

	        ],
		footerText : "This is a table footer",
		infoToolbar : oInfoToolbar,
	    }).addStyleClass("custTableNav");
		
		var oTemplate  = new sap.m.ColumnListItem({
        	type: sap.m.ListType.Active,
    		unread : false,
    		vAlign : "Middle",
            cells: [
                    new sap.m.Link({ text: "{Orders>OrderNumber}"}).addStyleClass("columnhdr"),
                    new sap.m.Label({ text: "{Orders>CustomerNo}" }),
                    new sap.m.Label({ text: "{Orders>CustomerName}", wrapping : true }),
                    new sap.m.Label({ text: "{Orders>OrderType}" }),
                    new sap.m.Label({ text: "{Orders>Status}" }),
            ]
        });
	
		oTemplate.attachPress(function(oEvent) {
			 oController.getOrderDetails(oEvent,this);
		})
		
		oTable.bindAggregation("items","Orders>/",oTemplate);
	    
		return new sap.m.Page({
			title: "Order List",
			showNavButton: true,
			navButtonPress: function() {
				window.history.go(-1);
			},
			
			content: [oTable]
		});
	}

});