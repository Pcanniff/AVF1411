var Cloud = require('ti.cloud');
Cloud.debug = true; 

var appCloudLogin = function() {

	if (Ti.Network.online) {
		Cloud.Users.login({
			login : "com.fullsail.demoapp",
			password : "12345"
		}, function(e) {
			if (e.success) {
				var geo = require("geo");
				geo.geo();
				Ti.API.info("Logged in user, id = " + e.users[0].id + ", session ID = " + Cloud.sessionId);
			} else {
				Ti.API.info("Login failed.");
			}
		});
	}
};


exports.appCloudLogin = appCloudLogin;