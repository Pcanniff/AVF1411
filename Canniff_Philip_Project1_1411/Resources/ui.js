var win = Ti.UI.createWindow({
	fullscreen : true,
	backgroundColor : "#ccc"
});
var buttonOne = Ti.UI.createButton({
	title : "Click for weather from your current position!",
	color : "#fff",
	bottom : "15%",
	borderRadius : "10dp",
	height : "15%",
	width : "90%",
	backgroundColor : "#000"
});
var title = Ti.UI.createLabel({
	text : "",
	font : {
		fontSize : "28dp"
	},
	color : "#fff",
	bottom : "2%",
	left : "5%"
});

win.add(buttonOne);
win.open();

exports.buttonOne = buttonOne;

exports.wView = function(data) {
	console.log(data);
	var weatherWin = Ti.UI.createWindow({
		backgroundImage : "images/background2.png",
		fullscreen : true
	});
	var current = Ti.UI.createView({
		top : "1%",
		bottom : "58%",
		left : "2%",
		right : "2%",
		borderRadius : "10dp",
		borderColor : "#fff"
	});
	var temp = Ti.UI.createLabel({
		text : data.tempF + "º",
		font : {
			fontSize : "72dp"
		},
		color : "#fff",
		bottom : "8%",
		left : "5%"
	});
	var tempCel = Ti.UI.createLabel({
		text : data.tempC + " ºc",
		font : {
			fontSize : "28dp"
		},
		color : "#fff",
		bottom : "2%",
		left : "5%"
	});
	var city = Ti.UI.createLabel({
		text : data.city,
		font : {
			fontSize : "20dp"
		},
		color : "#fff",
		top : "2%",
		left : "5%"
	});
	var state = Ti.UI.createLabel({
		text : data.state,
		font : {
			fontSize : "16dp"
		},
		color : "#fff",
		top : "10%",
		left : "5%"
	});
	var wind = Ti.UI.createLabel({
		text : "Wind: " + data.wind + " mph",
		font : {
			fontSize : "20dp"
		},
		color : "#fff",
		top : "2%",
		right : "5%"
	});
	current.add(wind);
	current.add(state);
	current.add(city);
	current.add(tempCel);
	current.add(temp);
	weatherWin.add(current);
	weatherWin.open();
};
