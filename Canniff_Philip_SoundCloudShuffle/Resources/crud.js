var uiLoad = require("ui");
exports.orm = function(e) {
	var db = Titanium.Database.open('database');
	db.execute('CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY, title TEXT, user TEXT, stream TEXT, genre TEXT, artwork TEXT, duration INTEGER)');
	db.close();

	this.read = function() {
		var db = Titanium.Database.open('database');
		var rows = db.execute('SELECT id, title, user, stream, genre, artwork, duration FROM favorites');
		var captureArray = [];
		var object = {};
		while (rows.isValidRow()) {
			captureArray.push( object = {

				title : rows.fieldByName('title'),
				user : rows.fieldByName('user'),
				stream : rows.fieldByName('stream'),
				genre : rows.fieldByName('genre'),
				artwork : rows.fieldByName('artwork'),
				duration : rows.fieldByName('duration'),
				id : rows.fieldByName('id')

			});
			rows.next();
		}
		if (captureArray.length == 0) {
			alert("Please select some favortie songs before playing this playlist!");
		} else {
			uiLoad.playlistBuild(captureArray);
		};
		rows.close();
		db.close();
	};
	this.create = function(obj) {
		var db = Titanium.Database.open('database');
		db.execute('INSERT INTO favorites (title, user, stream, genre, artwork, duration) VALUES (?, ?, ?, ?, ?, ?)', obj.title, obj.user, obj.stream, obj.genre, obj.artwork, obj.duration);
		db.close();
	};
	this.dele = function(id) {
		var db = Titanium.Database.open('database');
		db.execute('DELETE FROM favorites');
		db.close();
	};
};
