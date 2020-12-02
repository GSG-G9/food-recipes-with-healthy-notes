const searchFood = document.querySelector("#search_food");
const searchBtn = document.querySelector("#search_btn");
const recipeDev = document.querySelector("#recipe");
const videoDev = document.querySelector("#video");
const nutrientsDev = document.querySelector("#nutrients");

const searchFunction = () => {
  const foodValue = searchFood.value;
  const reqData = { value: foodValue };
  requestFetch("/recipe", reqData)
    .then((response) => response.json())
    .then((data) => {
      recipeDev.textContent = data.strInstructions;
      videoDev.src = data.strYoutube.replace("watch?v=", "embed/");
    })
    .catch((err) => console.log(err));

  requestFetch("/health", reqData)
    .then((response) => response.json())
    .then((data) => (nutrientsDev.textContent = JSON.stringify(data)))
    .catch((err) => console.log(err));
};

searchBtn.addEventListener("click", searchFunction);
searchFood.addEventListener("change", searchFunction);
