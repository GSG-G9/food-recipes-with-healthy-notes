const fetch = require("node-fetch");
const path = require("path");
const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
};

const getHealthData = (req, res) => {
  console.log(req);
  const searchValue = req.body.value;
  fetch(
    `https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.recipeAppID}&app_key=${process.env.apiKey}`
  )
    .then((response) => response.json())
    .then((data) =>
     console.log(data)
    )
    .catch((err) => console.log(err));
  res.send("dfsdf");
};

const getRecipeData = (req, res) => {
  res.send("getRecipeData");
};

module.exports = { getHealthData, getRecipeData, getHome };
