const fetch = require('node-fetch');
const path = require('path');

const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const handleNutrients = (
  {
    ENERC_KCAL, PROCNT, FAT, SUGAR, CHOCDF, CHOLE,
  },
  weight,
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
  if (searchValue.trim() === '') {
    res.json('no value');
    return;
  }
  fetch(
    `https://api.edamam.com/search?q=${searchValue.trim()}&app_id=${
      process.env.recipeAppID
    }&app_key=${process.env.apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.count) {
        res
          .send(
            handleNutrients(
              data.hits[0].recipe.totalNutrients,
              data.hits[0].recipe.totalWeight,
            ),
          );
      }
      res.json('no result');
    })
    .catch((err) => next(err));
};

const getRecipeData = (req, res, next) => {
  const searchValue = req.body.value;
  if (searchValue.trim() === '') {
    res.json('no value');
    return;
  }
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue.trim()}`,
  )
    .then((response) => response.json())

    .then((data) => {
      if (data.meals) {
        res.send(handleRecipe(data.meals[0]));
      }
      res.json('no value');
    })
    .catch((err) => next(err));
};

module.exports = {
  getHome,
  getHealthData,
  getRecipeData,
  handleNutrients,
  handleRecipe,
};
