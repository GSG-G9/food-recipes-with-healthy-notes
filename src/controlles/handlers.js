const fetch = require('node-fetch');

const getHealthData = (req, res) => {
  res.send('getHealthData');
};

const getRecipeData = (req, res) => {
  res.send('getRecipeData');
};

module.exports = { getHealthData, getRecipeData };
