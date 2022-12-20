const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for(let i = 0; i <= ingredients.length - 1; i++){
  
  const liItem = document.createElement("li");
  liItem.textContent = ingredients[i];
  liItem.classList.add("item");

  list.append(liItem);
}
