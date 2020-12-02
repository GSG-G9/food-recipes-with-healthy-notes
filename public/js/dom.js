const searchFood = document.querySelector("#search_food");
const searchBtn = document.querySelector("#search_btn");
searchBtn.addEventListener("click", () => {
  const foodValue = searchFood.value;
  const reqData = { value: foodValue };
  fetch('/health', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
