// Setting selected query in cache variables
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let linear_copy = document.querySelector("#linear_gradient");
let body = document.querySelector("#body");

// DRY

function setGradient() {
  // Set background body to linear gradient
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  //set linear_copy .textContent
        linear_copy.textContent = body.style.background + ';';
}

// .addEventListener color button

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
