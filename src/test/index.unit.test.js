const { getHealthData } = require('../controlles/handlers');

test('test jest', () => {
	// eslint-disable-next-line no-undef
	expect(getHealthData()).toBe(5);
});
