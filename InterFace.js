$(function() {
var thermostat = new Thermostat();

$('#temperature').text(thermostat.temperature);

$('#regulate_temp_up').click(function() {
	thermostat.up(1);
	$('#temperature').text(thermostat.temperature);
});

$('#regulate_temp_down').click(function() {
	thermostat.down(1);
	$('#temperature').text(thermostat.temperature);
});

$('#power_save_status').text(thermostat.isPowerSaving);

$('#power_save').click(function() {
	thermostat.noPowerSaving();
	$('#power_save_status').text(thermostat.isPowerSaving);
});

$('#reset').click(function() {
	thermostat.reset();
	$('#temperature').text(thermostat.temperature);
});



});
