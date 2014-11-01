var loadView = require("ui").wView;	
exports.orm = function() {
	var db = Titanium.Database.open('database');
	db.execute('CREATE TABLE IF NOT EXISTS weatherData (id INTEGER PRIMARY KEY, tempF TEXT, tempC TEXT, city TEXT, state TEXT, wind TEXT)');
	db.close();
	
	this.read = function() {
		var db = Ti.Database.open('database');
		var rows = db.execute('SELECT id, tempF, tempC, city, state, wind FROM weatherData');
			var object = {
				tempF : rows.fieldByName('tempF'),
				tempC : rows.fieldByName('tempC'),
				city : rows.fieldByName('city'),
				state : rows.fieldByName('state'),
				wind: rows.fieldByName('wind')
			};
	
		rows.close();
		db.close();
		loadView(object);
	};
	this.create = function(obj) {
		var db = Titanium.Database.open('database');
		db.execute('INSERT INTO weatherData (tempF, tempC, city, state, wind) VALUES (?, ?, ?, ?, ?)', obj.tempF, obj.tempC, obj.city, obj.state, obj.wind);
		db.close();
		this.read();
	};
	this.dele = function(id) {
		var db = Titanium.Database.open('database');
		db.execute('DELETE FROM weatherData');
		db.close();
	};
}; 