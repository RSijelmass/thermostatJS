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
});
