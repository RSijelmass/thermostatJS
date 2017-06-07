var Thermostat = function() {
	this.temperature = 20;
	this.isPowerSaving = true;

	this.up = function(number) {
		if(this.isPowerSaving && this.temperature + number > 25) {
			throw('Maximum temperature is 25!');
		} else if(!this.isPowerSaving && this.temperature + number > 32) {
			throw('Maximum temperature is 32!');
		};
		this.temperature += number;
	};

	this.down = function(number) {
		if(this.temperature - number < 10) {
			throw('Minimum temperature is 10!');
		};
		this.temperature -= number;
	};

	this.noPowerSaving = function() {
		this.isPowerSaving = false;
	};
};

/*thermostat = new Thermostat();
console.log(thermostat.isPowerSaving);
thermostat.noPowerSaving();
console.log(thermostat.isPowerSaving)*/
