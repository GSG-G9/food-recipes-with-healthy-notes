const router = require('express').Router();

const { getHealthData, getRecipeData,getHome } = require('./handlers');

router.get('/',getHome)
router.post('/health', getHealthData);
router.post('/recipe', getRecipeData);

module.exports = router;
