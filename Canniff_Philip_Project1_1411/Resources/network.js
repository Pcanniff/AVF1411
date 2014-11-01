loadCrud = require("crud").orm;
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
				wind : data.current_observation.wind_mph

			};
			crud.create(object);
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
					wind : "--"

				};
				crud.create(object);
				alert("Could not find internet connection!");

			}
		}
	});
	client.open("GET", url);
	client.send();
};
