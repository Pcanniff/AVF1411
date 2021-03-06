var loadView = require("ui").wView;	
exports.orm = function() {
	var db = Titanium.Database.open('database');
	db.execute('CREATE TABLE IF NOT EXISTS weatherData (id INTEGER PRIMARY KEY, tempF TEXT, tempC TEXT, city TEXT, state TEXT, wind TEXT, high TEXT, low TEXT, lowC TEXT, maxWind TEXT, phase TEXT, hemisphere TEXT)');
	db.close();
	
	this.read = function() {
		var db = Ti.Database.open('database');
		var rows = db.execute('SELECT * FROM weatherData');
			var object = {
				tempF : rows.fieldByName('tempF'),
				tempC : rows.fieldByName('tempC'),
				city : rows.fieldByName('city'),
				state : rows.fieldByName('state'),
				wind: rows.fieldByName('wind'),
				high: rows.fieldByName('high'),
				low: rows.fieldByName('low'),
				lowC : rows.fieldByName('lowC'),
				maxWind : rows.fieldByName('maxWind'),
				phase : rows.fieldByName('phase'),
				hemisphere : rows.fieldByName('hemisphere')
			};
	
		rows.close();
		db.close();
		loadView(object);
	};
	this.create = function(obj) {
		console.log(obj);
		var db = Titanium.Database.open('database');
		db.execute('INSERT INTO weatherData (tempF, tempC, city, state, wind, high, low, lowC, maxWind, phase, hemisphere) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', obj.tempF, obj.tempC, obj.city, obj.state, obj.wind, obj.high, obj.low, obj.lowC, obj.maxWind, obj.phase, obj.hemisphere);
		db.close();
		this.read();
	};
	this.dele = function(id) {
		var db = Titanium.Database.open('database');
		db.execute('DELETE FROM weatherData');
		db.close();
	};
}; 