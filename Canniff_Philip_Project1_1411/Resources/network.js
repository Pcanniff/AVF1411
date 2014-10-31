loadView = require("ui").wView;
exports.netCheck = function(url) {
	var client = Ti.Network.createHTTPClient({
		onload : function() {
			var data = JSON.parse(this.responseText);
			loadView(data);
		},
		onerror : function() {
			if (!Ti.Network.online) {

				alert("Could not find connection!");

			}
		}
	});
	client.open("GET", url);
	client.send();
};
