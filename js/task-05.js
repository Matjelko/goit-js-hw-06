const input = document.querySelector("input");
const output = document.querySelector("#name-output")

input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
})