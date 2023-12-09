const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const age = document.querySelector("#age");
const count = document.querySelector(".count");
const result = document.querySelector(".result");
const error = document.querySelector(".error");
const description = document.querySelector(".description");
const inputs = document.querySelectorAll("input");
const patternH = /[1-9][0-9][0-9]/;
const patternWA = /[1-9][0-9]*/;

const counting = () => {
  let heightR = height.value / 100;
  let weightR = parseFloat(weight.value);
  let bmi = weightR / (heightR * heightR);
  result.innerHTML = bmi.toFixed(2);
  definition();
};

const valMinMAx = () => {
  for (const el of inputs) {
    if (el.value != "") {
      if (parseFloat(el.value) < parseFloat(el.min)) {
        el.nextElementSibling.classList.add("show");
      } else if (parseFloat(el.value) > parseFloat(el.max)) {
        el.nextElementSibling.classList.add("show");
        result.style.display = "none";
      } else {
        el.nextElementSibling.classList.remove("show");
      }
    }
  }
};

// const patternForH = (e) =>
// {if (height.value.match(patternH)) {
//   height.nextElementSibling.classList.remove("show");

// } else {
//   height.nextElementSibling.classList.add("show");
//   result.style.display = "none";
//   description.style.display = "none";

// }}

const checkEmpty = () => {
  for (const element of inputs) {
    if (
      element.value == "" ||
      element.value == " " ||
      element.value == null ||
      element.value == undefined
    ) {
      error.classList.add("show");
      result.style.display = "none";
      description.style.display = "none";
    } else {
      error.classList.remove("show");
      result.style.display = "block";
      description.style.display = "block";
    }
  }
};

const checkCharacter = () => {
  for (const element of inputs) {
    if (!element.value.match(patternWA)) {
      element.nextElementSibling.classList.add("show");
      result.style.display = "none";
      description.style.display = "none";
    } else {
      element.nextElementSibling.classList.remove("show");
    }
  }
};

const definition = () => {
  if (result.innerHTML < 18.5) {
    description.innerHTML = "Underweight";
  } else if (result.innerHTML >= 18.5 && result.innerHTML < 24.99) {
    description.innerHTML = "Normal range";
  } else if (result.innerHTML >= 25 && result.innerHTML < 29.99) {
    description.innerHTML = "Overweight";
  } else if (result.innerHTML >= 30) {
    description.innerHTML = "Obesity";
  }
};

height.addEventListener("keyup", valMinMAx);
//height.addEventListener("keyup",patternForH);
weight.addEventListener("keyup", valMinMAx);
age.addEventListener("keyup", valMinMAx);
count.addEventListener("click", (e) => {
  e.preventDefault();
});
count.addEventListener("click", checkEmpty);
count.addEventListener("click", checkCharacter);
count.addEventListener("click", counting);
