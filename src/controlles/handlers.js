const fetch = require("node-fetch");
const path = require("path");
const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
};
const getHealthData = (req, res, next) => {
    const searchValue = req.body.value;
    fetch(
      `https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.recipeAppID}&app_key=${process.env.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        res.status(200).send(data.hits[0].recipe.totalNutrients);
        next();
      })
      .catch((err) => next(err));
  };

const getHealthData1=()=>5
module.exports = { getHome ,getHealthData1,getHealthData};
