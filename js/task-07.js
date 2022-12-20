"use strict"

let inputSize = document.querySelector("#font-size-control");
let span = document.querySelector("#text");

let changeSize = (event) => {
    let fontSize = event.target.value + "px";
    span.style.fontSize = fontSize;
}

inputSize.addEventListener("input", changeSize);