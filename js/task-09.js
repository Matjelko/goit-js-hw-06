function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const colorValue = document.querySelector(".color");
const backgroundColor = document.querySelector(".change-color")

function changeColor(){
  const randomColor = getRandomHexColor();

  bodyColor.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}

backgroundColor.addEventListener("click", changeColor);