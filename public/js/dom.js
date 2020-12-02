/* eslint-disable no-return-assign */
const searchFood = document.querySelector('#search_food');
const searchBtn = document.querySelector('#search_btn');
const recipeDev = document.querySelector('#recipe');
const videoDev = document.querySelector('#video');
const nutrientsDev = document.querySelector('#nutrients');
const nutrientsTable = document.querySelector('#nutrients-table');
const recipeWeight = document.querySelector('#recipe-weight');

const createTableData = (obj, parent) => {
  const tr = document.createElement('tr');
  const tdArray = Object.values(obj)
    .filter((el) => typeof el === 'object')
    .map((el) => {
      const td = document.createElement('td');
      td.innerText = `${+el.quantity.toFixed(2)} ${el.unit}`;
      return td;
    });
  tr.append(...tdArray);
  parent.appendChild(tr);
};

const searchFunction = () => {
  const foodValue = searchFood.value;
  const reqData = { value: foodValue };
  requestFetch('/recipe', reqData)
    .then((response) => response.json())
    .then((data) => {
      recipeDev.textContent = data.strInstructions;
      videoDev.src = data.strYoutube.replace('watch?v=', 'embed/');
    })
    .catch((err) => console.log(err));

  requestFetch('/health', reqData)
    .then((response) => response.json())
    .then((data) => {
      recipeWeight.innerText = `${data.weight.toFixed(2)} g`;
      createTableData(data, nutrientsTable);
    })
    .catch((err) => console.log(err));
};

searchBtn.addEventListener('click', searchFunction);
searchFood.addEventListener('change', searchFunction);
