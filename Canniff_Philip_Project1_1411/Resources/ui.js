var win = Ti.UI.createWindow({
	fullscreen : true,
	backgroundColor : "#ccc"
});
var buttonOne = Ti.UI.createButton({
	bottom : "15%",
	borderRadius : "10dp",
	height : "20%",
	width : "50%",
	backgroundColor : "#000"
});

win.add(buttonOne);
win.open();

exports.buttonOne = buttonOne;

exports.wView = function(data) {
	console.log(data);
	var weatherWin = Ti.UI.createWindow({
		backgroundColor : "#ccc",
		fullscreen : true
	});
	var current = Ti.UI.createView({
		top : "2dp",
		bottom : "42%",
		left : "2%",
		right : "2%",
		borderRadius : "10dp",
		borderColor : "#fff"
	});

	weatherWin.add(current);
};
