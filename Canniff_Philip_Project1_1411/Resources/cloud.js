exports.cloudSave = function(obj) {
	Cloud.Objects.create({
		classname : 'weather',
		fields : {
			tempF : obj.tempF,
			tempC : obj.tempC,
			city: obj.city,
			state: obj.state,
			wind: obj.wind
		}
	}, function(e) {
		if (e.success) {
			var weather = e.weather[0];
			alert('Success:\n' + 'id: ' + weather.id + '\n' + 'Fahrenheit: ' + weather.tempF + '\n' + 'Celsius: ' + weather.tempC + '\n' + 'City: ' + weather.city + '\n' + 'State:' + weather.state + '\n' + "Wind:" + weather.wind + "mph" + '\n' + "created_at:"  + weather.created_at);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}; 


