describe('thermostat', function() {
	var thermostat;

	beforeEach(function() {
			thermostat = new Thermostat();
	});

	describe('default temperature', function() {
		it('starts with 20C', function() {
			expect(thermostat.temperature).toEqual(20);
		});
	});

	describe('increase temperature', function() {
		it('increases temperature by 1C', function() {
			thermostat.up(1)
			expect(thermostat.temperature).toEqual(21);
		});
	});

	describe('decrease temperature', function() {
		it('decreases temperature by 1C', function() {
			thermostat.down(1)
			expect(thermostat.temperature).toEqual(19);
		});

		it('throws an error if temperature is below 10C', function() {
			expect(function() {thermostat.down(11)}).toThrow('Minimum temperature is 10!');
		});
	});

	describe('powersaving mode', function() {
		it('default powersaving mode is on', function() {
			expect(thermostat.isPowerSaving).toEqual(true);
		});

		it('if on, maximum temperature is 25', function() {
			expect(function() {thermostat.up(6)}).toThrow('Maximum temperature is 25!');
		});

		it('can be switched off', function() {
			thermostat.noPowerSaving();
			expect(thermostat.isPowerSaving).toEqual(false)
		});

		it('if off, maximum temperature is 32C', function() {
			thermostat.noPowerSaving();
			expect(function() {thermostat.up(13)}).toThrow('Maximum temperature is 32!');
		});
	});

	describe('reset temperature', function() {
		it('resets temperature to 20C', function() {
			thermostat.up(3);
			thermostat.reset();
			expect(thermostat.temperature).toEqual(20);
		});
	});
	
	describe('check energy usage', function() {
		it('returns low-usage if temperature < 18C', function() {
			thermostat.down(4);
			expect(thermostat.checkEnergyUsage()).toEqual('low-usage')
		});
	it('returns medium-usage if temperature < 25C', function() {
			expect(thermostat.checkEnergyUsage()).toEqual('medium-usage')
		});
	it('returns high-usage if temperature >= 25', function() {
			thermostat.noPowerSaving();
			thermostat.up(6)
			expect(thermostat.checkEnergyUsage()).toEqual('high-usage')
		});
});

});
