const router = require('express').Router();

const { getHealthData, getRecipeData } = require('./handlers');

router.post('/health', getHealthData);
router.post('/recipe', getRecipeData);

module.exports = router;
