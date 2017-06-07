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
			expect(thermostat.ispowersaving).toEqual(true);
		});

		it('if on, maximum temperature is 25', function() {
			expect(function() {thermostat.up(6)}).toThrow('Maximum temperature is 25!');
		});
	});

});
