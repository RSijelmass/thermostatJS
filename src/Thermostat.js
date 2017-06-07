var Thermostat = function() {
	this.temperature = 20;

	this.up = function(number) {
		this.temperature += number;
	};
};
