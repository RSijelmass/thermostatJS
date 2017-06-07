$(document).ready(function() {
var thermostat = new Thermostat();
updateTemperature();

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a012ce56b3fea36ffd408256d4eeb21a', function(data) {
		console.log(data.weather.main);
		$('#weather').text(data);
});

$('#regulate_temp_up').click(function() {
	thermostat.up(1);
	updateTemperature();
});

$('#regulate_temp_down').click(function() {
	thermostat.down(1);
	updateTemperature();
});

$('#power_save_status').text(thermostat.isPowerSaving);

$('#power_save').click(function() {
	thermostat.switchPowerSaving();
	$('#power_save_status').text(thermostat.isPowerSaving);
});

$('#reset').click(function() {
	thermostat.reset();
	updateTemperature();
});

function updateTemperature() {
	$('#temperature').text(thermostat.temperature);
	$('#temperature').attr('class', thermostat.checkEnergyUsage());
};


});
