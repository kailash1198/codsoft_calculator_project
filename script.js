// alert("Hello world")

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");

let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

let zero = document.querySelector(".zero");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

let equal = document.querySelector(".equal");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let resetBtn = document.querySelector(".reset");

let precentage = document.querySelector(".precentage");

// output tag
let output = document.querySelector(".output");

resetBtn.addEventListener("click", () => {
  output.innerHTML = 0;
});
one.addEventListener("click", (e) => {
  output.innerHTML++;
});
two.addEventListener("click", () => {
  alert("Hello");
});
