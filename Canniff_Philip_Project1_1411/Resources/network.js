loadCrud = require("crud").orm;
var cloudSave = require("cloud");
exports.netCheck = function(url) {
	var client = Ti.Network.createHTTPClient({
		onload : function() {
			var crud = new loadCrud();
			//Clearing Database upon new, successful network connection.
			crud.dele();
			var data = JSON.parse(this.responseText);
			console.log(data);
			var object = {

				tempF : data.current_observation.feelslike_f,
				tempC : data.current_observation.feelslike_c,
				city : data.current_observation.display_location.city,
				state : data.current_observation.display_location.state_name,
				wind : data.current_observation.wind_mph,
				high : data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				low : data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				lowC : data.forecast.simpleforecast.forecastday[0].low.celsius,
				maxWind : data.forecast.simpleforecast.forecastday[0].maxwind.mph,
				phase : data.moon_phase.phaseofMoon,
				hemisphere : data.moon_phase.hemisphere
				

			};
			console.log(object.phase, object.hemisphere);
			crud.create(object);
			cloudSave.cloudSave(object);
		},
		onerror : function() {
			var crud = new loadCrud();
			if (!Ti.Network.online) {
				var object = {
					// Passing false object to emulate where data would end up with network connectivity.
					tempF : "--",
					tempC : "--",
					city : "--",
					state : "--",
					wind : "--",
					high : "--",
					low : "--"

				};
				crud.create(object);
				alert("Could not find internet connection!");

			}
		}
	});
	client.open("GET", url);
	client.send();
};
