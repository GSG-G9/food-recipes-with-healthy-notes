const fetch = require('node-fetch');
const path = require('path');
const getHome = (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const handleNutrients = (
	{ ENERC_KCAL, PROCNT, FAT, SUGAR, CHOCDF, CHOLE },
	weight
) => ({
	ENERC_KCAL,
	PROCNT,
	FAT,
	SUGAR,
	CHOCDF,
	CHOLE,
	weight,
});

const handleRecipe = ({ strYoutube, strInstructions }) => ({
	strYoutube,
	strInstructions,
});

const getHealthData = (req, res, next) => {
	const searchValue = req.body.value;
	fetch(
		`https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.recipeAppID}&app_key=${process.env.apiKey}`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(
				handleNutrients(
					data.hits[0].recipe.totalNutrients,
					data.hits[0].recipe.totalWeight
				)
			);
			res
				.status(200)
				.send(
					handleNutrients(
						data.hits[0].recipe.totalNutrients,
						data.hits[0].recipe.totalWeight
					)
				);
			next();
		})
		.catch((err) => next(err));
};

const getRecipeData = (req, res, next) => {
	const searchValue = req.body.value;
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
		.then((response) => response.json())
		.then((data) => {
			res.status(200).send(handleRecipe(data.meals[0]));
			next();
		})
		.catch((err) => next(err));
};

const getHealthData1 = () => 5;
module.exports = {
	getHome,
	getHealthData1,
	getHealthData,
	getRecipeData,
	handleNutrients,
	handleRecipe,
};
