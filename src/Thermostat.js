var Thermostat = function() {
	this.temperature = 20;
	this.ispowersaving = true;

	this.up = function(number) {
		if(this.ispowersaving && this.temperature + number > 25) {
			throw('Maximum temperature is 25!');
		}
		this.temperature += number;
	};

	this.down = function(number) {
		if(this.temperature - number < 10) {
			throw('Minimum temperature is 10!');
		};
		this.temperature -= number;
	};
};
