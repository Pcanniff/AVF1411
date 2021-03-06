win = Ti.UI.createWindow({
	backgroundColor: "#ff0000",
	fullscreen: true
});



var Cloud = require('ti.cloud');
Cloud.debug = true; 
var appCloudLogin = function() {

	if (Ti.Network.online) {
		Cloud.Users.login({
			login : "com.fullsail.demoapp",
			password : "12345"
		}, function(e) {
			if (e.success) {
				console.log("success");
				Ti.API.info("Logged in user, id = " + e.users[0].id + ", session ID = " + Cloud.sessionId);
			} else {
				Ti.API.info("Login failed.");
			}
		});
	}
};



var save = function() {

	Ti.Media.showCamera({
		savePhotoGallery : true,
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO],
		success : function(e) {
			alert(e);
			var photo;
			if (e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
				photo = e.media;
				Cloud.Photos.create({
					custom_fields : {
						"filepatch" : path
					},
					photo : photo
				}, function(e) {
					if (e.success) {
						alert("Data saved to the cloud");
					} else {
						alert("Error:\n" + ((e.error && e.message ) || JSON.stringify(e)));
					}
				});
			} else {
				alert("thought this was a photo, but it's" + e.mediaType);
			}
		},
		error : function(error) {
			if (error.code === Ti.Media.NO_CAMERA) {
				alert("please run this on a device");
			} else {
				alert("other error: " + error.code);
			}
		}
	});

};

appCloudLogin();
save();

win.open();
