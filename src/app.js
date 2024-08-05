/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const headerSymbol = document.getElementById("symbol-header");
const bodyNumber = document.getElementById("number-body");
const footerSymbol = document.getElementById("symbol-footer");
const reload = document.getElementById("buttonReload");
//const changeSize = document.getElementById("changeSize");

let symbols = ["♥", "♠", "♣", "♦"];
let numbers = ["As", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function random(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return randomNum;
}

window.onload = function() {
  generateCard();
};

function generateCard() {
  const randomSymbol = symbols[random(symbols)];
  const randomNumber = numbers[random(numbers)];

  if (randomSymbol === "♥" || randomSymbol === "♦") {
    headerSymbol.style.color = "red";
    footerSymbol.style.color = "red";
    bodyNumber.style.color = "red";
  } else {
    headerSymbol.style.color = "black";
    footerSymbol.style.color = "black";
    bodyNumber.style.color = "black";
  }

  footerSymbol.style.transform = "rotate(180deg)";

  if (randomNumber === "As") {
    headerSymbol.innerHTML = "";
    footerSymbol.innerHTML = "";
    bodyNumber.innerHTML = randomSymbol;
    bodyNumber.style.fontSize = "13.75rem";
  } else {
    headerSymbol.innerHTML = randomSymbol;
    bodyNumber.innerHTML = randomNumber;
    footerSymbol.innerHTML = randomSymbol;
    bodyNumber.style.fontSize = "11.25rem";
  }
  console.log(randomSymbol);
  console.log(randomNumber);
}

reload.addEventListener("click", function() {
  generateCard();
});

setInterval(generateCard, 10000);
