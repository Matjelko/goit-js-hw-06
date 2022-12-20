"use strict"

let span = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);


const button = document.querySelectorAll("div > button");

button[0].addEventListener("click", () => {
    counterValue -= 1;
    span.textContent = counterValue;
});

button[1].addEventListener("click", () => {
    counterValue += 1;
    span.textContent = counterValue;
})