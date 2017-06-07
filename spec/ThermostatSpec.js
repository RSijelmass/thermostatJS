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
});
