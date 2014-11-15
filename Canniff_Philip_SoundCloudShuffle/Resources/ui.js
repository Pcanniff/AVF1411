var networkLoad = require("network");
var osname = Ti.Platform.osname;

exports.entryBuild = function(e) {
	var crud = new crudLoad();
	// Data
	var genreArray = [{
		title : "HipHop"
	}, {
		title : "Dance"
	}, {
		title : "Rap"
	}, {
		title : "R&B"
	}, {
		title : "Pop"
	}, {
		title : "Rock"
	}, {
		title : "Electronic"
	}, {
		title : "House"
	}, {
		title : "Soul"
	}, {
		title : "Folk"
	}, {
		title : "Trap"
	}, {
		title : "Dubstep"
	}, {
		title : "Trance"
	}];
	//Windows
	var entryWin = Ti.UI.createWindow({
		backgroundColor : "#000",
		fullscreen : true
	});
	var tableWin = Ti.UI.createWindow({
		backgroundColor : "#000",
		fullscreen : true
	});
	//Input Fields
	var userField = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#336699',
		top : "50%",
		width : "80%",
		height : "7%"
	});
	var passField = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#336699',
		top : "58%",
		width : "80%",
		height : "7%"
	});
	var logo = Ti.UI.createImageView({
		image : "images/soundcloud.png",
		height : 153,
		width : 153,
		bottom : 0,
		right : "1%"
	});
	var powered = Ti.UI.createLabel({
		text : "POWERED BY:",
		font : {
			fontFamily : "Roboto",
			fontSize : "20dp"
		},
		color : "#fff",
		bottom : "5%",
		right : "20%"
	});
	//Buttons
	var login = Ti.UI.createButton({
		title : 'Login',
		top : "75%",
		width : "50%",
		height : "10%"
	});
	var playFav = Ti.UI.createButton({
		title : "Listen to Favorites",
		font : {
			fontSize : "26dp"
		},
		top : "10%",
		width : "50%",
		height : "5%",
		color : "#FF6600",
	});
	//Table Elements
	var table = Ti.UI.createTableView({
		top : "25%",
		backgroundColor : 'white',
		data : genreArray
	});
	tableWin.add(playFav);
	// entryWin.add(powered);
	// entryWin.add(logo);
	// entryWin.add(login);
	// entryWin.add(userField);
	// entryWin.add(passField);
	tableWin.add(table);
	tableWin.open();

	playFav.addEventListener('click', function(e) {
		crud.read();
	});
	table.addEventListener('click', function(e) {
		var selection = e.source.title;
		networkLoad.netCheck(selection);
		tableWin.close();
	});

};
exports.playlistBuild = function(musicList) {
	var crud = new crudLoad();
	//Windows
	var index = 0;
	var musicArray = musicList;
	var length = musicArray.length - 1;
	var audioWin = Ti.UI.createWindow({
		backgroundColor : "#000",
		fullscreen : true
	});
	//Audio Player
	var player = Ti.Media.createAudioPlayer({
		url : musicArray[index].stream,
		allowBackground : true
	});
	var progress = Ti.UI.createProgressBar({
		bottom : "4%",
		width : "65%",
		height : '40dp',
		min : 0,
		max : (musicArray[index].duration / 1000),
		value : 0,
		tintColor : '#FF6600',
		style : Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	});
	var pausePlay = Ti.UI.createButton({
		bottom : "10%",
		height : 134,
		width : 134,
		backgroundImage : "images/pause.png"
	});
	var back = Ti.UI.createButton({
		bottom : "11%",
		width : 100,
		height : 100,
		left : "12%",
		backgroundImage : "images/back.png"
	});
	var returnButton = Ti.UI.createButton({
		title : "Back: New Playlist",
		top : "2%",
		width : "25%",
		height : "5%",
		left : "2%",
		color : "#FF6600",
	});
	var favorites = Ti.UI.createButton({
		title : "Add to Favorites",
		font : {
			fontSize : "24dp"
		},
		top : "48%",
		width : "25%",
		height : "5%",
		right : "3%",
		color : "#FF6600",
	});
	var next = Ti.UI.createButton({
		bottom : "11%",
		width : 100,
		height : 100,
		right : "12%",
		backgroundImage : "images/next.png"
	});
	var artwork = Ti.UI.createImageView({
		height : 150,
		width : 150,
		top : "55%",
		left : "5%",
		image : musicArray[index].artwork
	});
	var title = Ti.UI.createLabel({
		text : "Title: " + musicArray[index].title,
		font : {
			fontFamily : "Roboto",
			fontSize : "26dp"
		},
		color : "#fff",
		backgroundColor : "#000",
		top : "58%",
		left : "26%"
	});
	var userName = Ti.UI.createLabel({
		text : "User: " + musicArray[index].user,
		font : {
			fontFamily : "Roboto",
			fontSize : "26dp"
		},
		color : "#fff",
		backgroundColor : "#000",
		top : "61%",
		left : "26%"
	});
	player.addEventListener('progress', function(e) {
		progress.value = Math.round(e.progress / 1000);
	});
	pausePlay.addEventListener('click', function() {
		if (player.paused) {
			pausePlay.backgroundImage = "images/pause.png";
			player.play();
		} else if (player.playing) {
			pausePlay.backgroundImage = "images/play.png";
			player.pause();
		}

	});
	next.addEventListener('click', function(e) {
		if (index >= length) {
			alert("You are out of songs and need to select a new playlist. You can finish your current song if it is still playing!");
		} else {
			if (player.playing) {
				if (osname == "android") {
					player.release();
				} else {
					player.stop();
				};

			} else if (player.paused) {
				index = index + 1;
				player.url = musicArray[index].stream;
				artwork.image = musicArray[index].artwork;
				title.text = musicArray[index].title;
				userName.text = musicArray[index].user;
				audioWin.remove(artwork);
				audioWin.remove(title);
				audioWin.remove(userName);
				audioWin.add(userName);
				audioWin.add(title);
				audioWin.add(artwork);
				pausePlay.backgroundImage = "images/pause.png";

			}
		};
	});
	back.addEventListener('click', function(e) {
		if (index === 0) {
			back.enabled = false;
		} else if (player.playing) {
			index = index - 2;
			if (osname == "android") {
				player.release();
			} else {
				player.stop();
			};

		} else if (player.paused) {
			index = index - 1;
			player.url = musicArray[index].stream;
			artwork.image = musicArray[index].artwork;
			title.text = musicArray[index].title;
			userName.text = musicArray[index].user;
			audioWin.remove(artwork);
			audioWin.remove(title);
			audioWin.remove(userName);
			audioWin.add(userName);
			audioWin.add(title);
			audioWin.add(artwork);
			pausePlay.backgroundImage = "images/pause.png";
		}

	});

	player.addEventListener('change', function(e) {
		Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
		if (index !== 0) {
			back.enabled = true;
		}
	});
	favorites.addEventListener('click', function(e) {
		crud.create(musicArray[index]);
		alert(musicArray[index].title + "\nHas been added to your favorites!");
	});

	player.addEventListener('change', function(e) {
		console.log(length, index);
		if (index == length && e.state == 0) {
			alert("Playlist has ended. Please choose another one!");
		} else {
			if (e.state === 7 && index >= 0 && index < length ) {

				console.log("SONG COMPLETED!!!");
				if (osname == "android") {
					player.release();
				} else {
					player.stop();
				};
				index = index + 1;
				player.url = musicArray[index].stream;
				artwork.image = musicArray[index].artwork;
				title.text = musicArray[index].title;
				userName.text = musicArray[index].user;
				audioWin.remove(artwork);
				audioWin.remove(title);
				audioWin.remove(userName);
				audioWin.add(userName);
				audioWin.add(title);
				audioWin.add(artwork);
				player.play();
			} else if (e.state === 7 && index <= 0) {
				if (osname == "android") {
					player.release();
				} else {
					player.stop();
				};
				index = 0;
				player.url = musicArray[index].stream;
				artwork.image = musicArray[index].artwork;
				title.text = musicArray[index].title;
				userName.text = musicArray[index].user;
				audioWin.remove(artwork);
				audioWin.remove(title);
				audioWin.remove(userName);
				audioWin.add(userName);
				audioWin.add(title);
				audioWin.add(artwork);
				player.play();
			}
		};
	});
	returnButton.addEventListener('click', function(e) {
		if (osname == "android") {
			player.release();
		} else if (player.playing){;
			player.pause();
		};
		audioWin.close();
		uiLoad.entryBuild();

	});
	if (!musicArray[index].id){
		audioWin.add(favorites);
	};

	audioWin.add(returnButton);
	audioWin.add(progress);
	audioWin.add(userName);
	audioWin.add(title);
	audioWin.add(artwork);
	audioWin.add(next);
	audioWin.add(back);
	audioWin.add(pausePlay);
	audioWin.add(player);
	audioWin.open();
	player.start();
	progress.show();
};