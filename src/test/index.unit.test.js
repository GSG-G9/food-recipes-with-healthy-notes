const { getHealthData1 } = require('../controlles/handlers');

test('test jest', () => {
	// eslint-disable-next-line no-undef
	expect(getHealthData1()).toBe(5);
});
