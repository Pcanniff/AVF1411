exports.netCheck = function(e) {
	var url = "http://api.soundcloud.com/tracks.json?&client_id=78a6712cbc12d0e0afe7f1c26930c3e6&genres=hiphop";
	var client = Ti.Network.createHTTPClient({
		onload : function() {
			var streamArray = [];
			var data = JSON.parse(this.responseText);
			//console.log(data);
			for (i=0;i <= 9; i++){
				var object = {
					title : data[i].title,
					user : data[i].user.username,
					stream : i,
					genre : data[i].genre
				};
				streamArray.push(object);
				console.log(object);
			}
			console.log(streamArray);
		},
		onerror : function() {
			var crud = new loadCrud();
			if (!Ti.Network.online) {
				alert("Could not find internet connection!");

			}
		}
	});
	client.open("GET", url);
	client.send();
};