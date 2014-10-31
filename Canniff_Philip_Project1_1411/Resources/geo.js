var loadNet = require("network").netCheck;
exports.geo = function() {
	Ti.Geolocation.getCurrentPosition(function(e) {
		var os = Ti.Platform.osname;
		if (os === "iphone") {
			var longi = e.coords.longitude;
			var lat = e.coords.latitude;
			var url = "http://api.wunderground.com/api/aed45b0544469542/conditions/bestfct/q/" + lat + "," + longi + ".json";

		} else {
			var longi = "43";
			var lat = "-123";
			var url = "http://api.wunderground.com/api/aed45b0544469542/conditions/bestfct/q/" + lat + "," + longi + ".json";
		}
		loadNet(url);
	});

};
