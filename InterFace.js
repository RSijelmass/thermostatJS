$(document).ready(function() {
var thermostat = new Thermostat();
updateTemperature();

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
	thermostat.noPowerSaving();
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
