sap.ui.jsview("order_monitor.Order_Monitor", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf order_monitor.Order_Monitor
	*/ 
	getControllerName : function() {
		return "order_monitor.Order_Monitor";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf order_monitor.Order_Monitor
	*/ 
	createContent : function(oController) {
	
		var oLayout1 = new sap.ui.layout.form.ResponsiveGridLayout("L1");

		var oForm1 = new sap.ui.layout.form.Form("F1",{
			//title: new sap.ui.core.Title({text: "", tooltip: "Order Monitoring Utility"}),
			editable: true,
			layout: oLayout1,
			formContainers: [
				new sap.ui.layout.form.FormContainer("F1C1",{
					title: "",
					formElements: [
					               
						new sap.ui.layout.form.FormElement({
							label : new sap.m.Label("lblCustomer",{text : "Customer ID"}),
							required: true,
							fields : [new sap.m.Input("txtCustomerID",{value : "",width:"200px"})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label : new sap.m.Label("lblOrderNo",{text : "Order Number"}),
							required: true,
							fields: [new sap.m.Input("txtOrderNo",{value: "",width:"200px"})
							]
						}),
					    
//						new sap.ui.layout.form.FormElement({
//							label: new sap.m.Label({text: "Order Type", textAlign : "Left",wrapping : false}),
//							required: true,
//							fields: [new sap.m.Input("txtOrderType",{value: "",width:"200px"})
//							]
//						}),
						
						
						new sap.ui.layout.form.FormElement("chkZSOR",{
							label: "",
							fields: [new sap.ui.commons.CheckBox({
								
								text : 'Standard Order',
								tooltip : 'Standard Order'	
							})
							]
						}),
							
						new sap.ui.layout.form.FormElement("chkZOC2",{
							label: "",
							fields: [new sap.ui.commons.CheckBox({
								
								text : 'C2 Order',
								tooltip : 'C2 Order'	
							})
							]
						}),
						
						new sap.ui.layout.form.FormElement("chkZOCS",{
							label: "",
							fields: [new sap.ui.commons.CheckBox({
								
								text : 'CSOS Order',
								tooltip : 'CSOS Order'	
							})
							]
						}),
						
//						new sap.ui.layout.form.FormElement({
//							label: new sap.m.Label({text: "Submit Date From", textAlign : "Left",wrapping : false}),
//							required: true,
//							fields: [new sap.ui.commons.DatePicker("txtDateFrom",{yyyymmdd: "19990909", layoutData: new sap.ui.layout.GridData({span: "L2 M2 S12"})})
//							]
//						}),
//						new sap.ui.layout.form.FormElement({
//							label: new sap.m.Label({text: "Submit Date To", textAlign : "Left",wrapping : false}),							 
//							fields: [
//									    new sap.m.DatePicker({
//									        value : {
//									            path : "",
//									            type :  new sap.ui.model.type.Date({}, {
//									                minimum : new Date()
//									            })
//									        }
//									    })
//							]
//						}),
//						
						new sap.ui.layout.form.FormElement({
							label: new sap.m.Label({text: "Submitted From", textAlign : "Left",wrapping : false,width:"200px"}),							 
							fields: [new sap.ui.commons.DropdownBox("ddlDuration", {items : [
									new sap.ui.core.ListItem("Today", {text:"Today"}),
									new sap.ui.core.ListItem("Yesterday", {text:"Yesterday"}),
									],width:"200px"
									})
								]
							}),
						
//						new sap.ui.layout.form.FormElement({
//							label: new sap.m.Label({text: "Submitted From", textAlign : "Left",wrapping : false}),
//							required: true,
//							fields: [new sap.m.Input("txtSubmittedFrom",{value: "00:00:00",width:"200px"})
//							]
//						}),
//						new sap.ui.layout.form.FormElement({
//							label: new sap.m.Label({text: "Submitted To", textAlign : "Left",wrapping : false}),
//							required: true,
//							fields: [new sap.m.Input("txtSubmittedTo",{value: "11:59:59",width:"200px"})
//							]
//						}),
//							
						new sap.ui.layout.form.FormElement({
							label: "",
							fields: [new sap.ui.commons.CheckBox({
								
								text : 'Successfully Replicated',
								tooltip : 'Replicated to ECC'	
							})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "",
							fields: [new sap.ui.commons.CheckBox({
								
								text : 'Replication Failed',
								tooltip : 'Replication failed to ECC'	
							})
							]
						}),
						]
				})
			]
		});
		
		return new sap.m.Page({
			title: "Search Orders",
			showNavButton: true,
			navButtonPress: function() {
				window.history.go(-1);
			},
			footer: new sap.m.Bar({
				contentRight: [
		              new sap.m.Button({
		            	text: "Execute",
		            	icon: "sap-icon://accept",
		            	press: function(evt) {
		            		oController.navigateToOrderList(evt);
		            	}
		              }),
		              new sap.m.Button({
		            	text: "Cancel",
		            	icon: "sap-icon://sys-cancel",
		            	press: function(evt) {
		            		window.history.go(-1);
		            	}
		              })
				]
			}),
			content: [oForm1]
		});	//addStyleClass("controlPadding");
	}

});