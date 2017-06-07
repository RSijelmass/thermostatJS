var Thermostat = function() {
	this.temperature = 20;

	this.up = function(number) {
		this.temperature += number;
	};

	this.down = function(number) {
		if(this.temperature - number < 10) {
			throw('Minimum temperature is 10!');
		};
		this.temperature -= number;
	};
};
