let numberWrapper = document.getElementById("number");
let number = 0;

let buttonIncrease = document.getElementById("increase");
buttonIncrease.addEventListener("click", increase);

let buttonDecrease = document.getElementById("decrease");
buttonDecrease.addEventListener("click", decrease);

function increase() {
  number = number + 1;
  numberWrapper.innerHTML = number;
}

function decrease() {
  if (number > 0) {
    number = number - 1;
    numberWrapper.innerHTML = number;
  }
}
