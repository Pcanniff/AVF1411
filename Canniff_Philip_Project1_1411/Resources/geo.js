var loadNet = require("network").netCheck;
exports.geo = function() {
	Ti.Geolocation.getCurrentPosition(function(e) {
		var os = Ti.Platform.osname;
		if (os != "android") {

			if (Ti.Geolocation.AUTHORIZATION_AUTHORIZED) {
				//The AUTHORIZED statement is consistently causing an error. More times than succeeding. 
				var longi = e.coords.longitude;
				var lat = e.coords.latitude;
				var url = "http://api.wunderground.com/api/aed45b0544469542/conditions/astronomy/forecast/hourly/bestfct/q/" + lat + "," + longi + ".json";

			} else {

				alert("We're sorry. We need your location to retrieve weather data!");

			}
			loadNet(url);
		} else {

			var longi = "-122.407166";
			var lat = "37.782803";
			var url = "http://api.wunderground.com/api/aed45b0544469542/conditions/astronomy/forecast/bestfct/q/" + lat + "," + longi + ".json";
			
			loadNet(url);

		}
		
	});

};
