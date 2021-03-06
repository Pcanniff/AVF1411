exports.wView = function(data) {
	console.log(data);
	var dayWin = Ti.UI.createWindow({
		backgroundImage : "images/background2.jpg",
		fullscreen : true
	});
	var nightWin = Ti.UI.createWindow({
		backgroundImage : "images/backgroundNight.jpg",
		fullscreen : true
	});
	var forecastWin = Ti.UI.createWindow({
		backgroundImage : "images/backgroundForecast.jpg",
		fullscreen : true
	});
	//Current
	var current = Ti.UI.createView({
		top : "1%",
		bottom : "58%",
		left : "2%",
		right : "2%",
		borderRadius : "10dp",
		borderColor : "#fff",
		backgroundColor : "#80000000"
	});
	var temp = Ti.UI.createLabel({
		text : data.tempF + "º",
		font : {
			fontSize : "92dp"
		},
		color : "#fff",
		bottom : "12%",
		left : "5%"
	});
	var tempCel = Ti.UI.createLabel({
		text : data.tempC + " ºc",
		font : {
			fontSize : "28dp"
		},
		color : "#fff",
		bottom : "2%",
		left : "5%"
	});
	var city = Ti.UI.createLabel({
		text : data.city,
		font : {
			fontSize : "28dp"
		},
		color : "#fff",
		top : "7%",
		left : "5%"
	});
	var currentLabel = Ti.UI.createLabel({
		text : "Current Weather:",
		font : {
			fontSize : "24dp"
		},
		color : "#fff",
		top : "1%",
	});
	var state = Ti.UI.createLabel({
		text : data.state,
		font : {
			fontSize : "22dp"
		},
		color : "#fff",
		top : "15%",
		left : "5%"
	});
	var wind = Ti.UI.createLabel({
		text : "Wind: " + data.wind + " mph",
		font : {
			fontSize : "20dp"
		},
		color : "#fff",
		top : "7%",
		right : "5%"
	});
	//Expected
	var expected = Ti.UI.createView({
		top : "43%",
		bottom : "2%",
		left : "2%",
		right : "2%",
		borderRadius : "10dp",
		borderColor : "#fff",
		backgroundColor : "#80000000"
	});
	var expectedLabel = Ti.UI.createLabel({
		text : "Projected Weather:",
		font : {
			fontSize : "24dp"
		},
		color : "#fff",
		top : "1%",
	});
	var expecTemp = Ti.UI.createLabel({
		text : "H : " + data.high + "º" + " L : " + data.low + "º",
		font : {
			fontSize : "44dp"
		},
		color : "#fff",
		bottom : "2%",
		left: "5%"
	});
	var expecWind = Ti.UI.createLabel({
		text : "Max Wind: " + data.maxWind + " mph",
		font : {
			fontSize : "20dp"
		},
		color : "#fff",
		top : "7%",
		right : "5%"
	});
	var expecState = Ti.UI.createLabel({
		text : data.state,
		font : {
			fontSize : "22dp"
		},
		color : "#fff",
		top : "13%",
		left : "5%"
	});
	var expecCity = Ti.UI.createLabel({
		text : data.city,
		font : {
			fontSize : "28dp"
		},
		color : "#fff",
		top : "7%",
		left : "5%"
	});
	//NightTime
	var currentNight = Ti.UI.createView({
		top : "1%",
		bottom : "58%",
		left : "2%",
		right : "2%",
		borderRadius : "10dp",
		borderColor : "#fff",
		backgroundColor: "#80000000"
	});
	var nightState = Ti.UI.createLabel({
		text : data.state,
		font : {
			fontSize : "22dp"
		},
		color : "#fff",
		top : "15%",
		left : "5%"
	});
	var nightCity = Ti.UI.createLabel({
		text : data.city,
		font : {
			fontSize : "28dp"
		},
		color : "#fff",
		top : "7%",
		left : "5%"
	});
	var nightHiLo = Ti.UI.createLabel({
		text : "H : " + data.high + "º" + " L : " + data.low + "º",
		font : {
			fontSize : "44dp"
		},
		color : "#fff",
		bottom : "2%",
		left: "5%"
	});
	var nightTemp = Ti.UI.createLabel({
		text : data.low + "º",
		font : {
			fontSize : "92dp"
		},
		color : "#fff",
		bottom : "12%",
		left : "5%"
	});
	var nightCel = Ti.UI.createLabel({
		text : data.lowC + " ºc",
		font : {
			fontSize : "28dp"
		},
		color : "#fff",
		bottom : "2%",
		left : "5%"
	});
	var nightLabel = Ti.UI.createLabel({
		text : "Evening Weather:",
		font : {
			fontSize : "24dp"
		},
		color : "#fff",
		top : "1%",
	});
	var nightPhase = Ti.UI.createLabel({
		text : "Moon Phase: " + data.phase + "/" + data.hemisphere,
		font : {
			fontSize : "20dp"
		},
		color : "#fff",
		top : "7%",
		right : "5%"
	});
	dayWin.addEventListener('swipe', function(e) {
		console.log(e.direction);
		if (e.direction == "left") {
			nightWin.open();
		} else if (e.direction === "right") {
			alert("Main Window coming soon!");
		} else if (e.direction === "up") {
			//forecastWin.open();
		} else {

		}
	});
	forecastWin.addEventListener('swipe', function(e) {
		if (e.direction == "down") {
			//forecastWin.close();
		} else if (e.direction == "left") {
			nightWin.open();
		}
	});
	nightWin.addEventListener('swipe', function(e) {
		if (e.direction == "right") {
			nightWin.close();
		};
	});
	currentNight.add(nightTemp);
	//currentNight.add(nightCel);
	currentNight.add(nightLabel);
	currentNight.add(nightCity);
	currentNight.add(nightState);
	currentNight.add(nightPhase);
	currentNight.add(nightHiLo);
	current.add(wind);
	current.add(state);
	current.add(city);
	//current.add(tempCel);
	current.add(temp);
	current.add(currentLabel);
	current.add(expecTemp);
	// expected.add(expecCity);
	// expected.add(expecWind);
	// expected.add(expecState);
	// expected.add(expectedLabel);
	nightWin.add(currentNight);
	//dayWin.add(expected);
	dayWin.add(current);
	dayWin.open();
};
