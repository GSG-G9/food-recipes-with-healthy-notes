const fetch = require('node-fetch');

const getHealthData = (req, res) => {
	return 5;
};

const getRecipeData = (req, res) => {
	res.send('getRecipeData');
};

module.exports = { getHealthData, getRecipeData };
