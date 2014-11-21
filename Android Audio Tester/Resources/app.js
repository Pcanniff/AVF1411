var win = Ti.UI.createWindow({
	backgroundColor: "#ff0000",
	fullscreen: true
});

var player = Ti.Media.createAudioPlayer({
		url : "/Test.mp3",
		allowBackground : true
		
	});
	

player.start();
win.add(player);
win.open();
