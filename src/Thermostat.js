var Thermostat = function() {
	this.DEFAULT_TEMP = 20;
	this.MAX_TEMP_NO_PS = 32;
	this.MAX_TEMP_WITH_PS = 25;
	this.MIN_TEMP = 10;
	this.temperature = this.DEFAULT_TEMP;
	this.isPowerSaving = true;

	this.up = function(number) {
		if(this.isPowerSaving && this.temperature + number > this.MAX_TEMP_WITH_PS) {
			throw('Maximum temperature is 25!');
		} else if(!this.isPowerSaving && this.temperature + number > this.MAX_TEMP_NO_PS) {
			throw('Maximum temperature is 32!');
		};
		this.temperature += number;
	};

	this.down = function(number) {
		if(this.temperature - number < this.MIN_TEMP) {
			throw('Minimum temperature is 10!');
		};
		this.temperature -= number;
	};

	this.switchPowerSaving = function() {
		this.isPowerSaving = !this.isPowerSaving;
	};

	this.reset = function() {
		this.temperature = this.DEFAULT_TEMP;
	};

	this.checkEnergyUsage = function() {
		if(this.temperature < 18) {
			return 'low-usage';
		} else if(this.temperature < 25) {
			return 'medium-usage';
		} else {
			return 'high-usage';
		};
	};
};

/*thermostat = new Thermostat();
console.log(thermostat.isPowerSaving);
thermostat.noPowerSaving();
console.log(thermostat.isPowerSaving)*/
