var win = Ti.UI.createWindow({
	backgroundColor: "#000",
	fullscreen: false
	
});
var button = Ti.UI.createButton({
	top: "10",
	backgroundImage: "images/button.png",
	height: "25%",
	width: "30%"
});



win.add(button);
win.open();
