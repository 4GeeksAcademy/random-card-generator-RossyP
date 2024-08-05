/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const headerSymbol = document.getElementById("symbol-header");
const bodyNumber = document.getElementById("number-body");
const footerSymbol = document.getElementById("symbol-footer");

let symbols = ["hearts", "spades", "clubs", "diamonds"];
let numbers = ["As", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function random(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return randomNum;
}

window.onload = function() {
  const randomSymbol = symbols[random(symbols)];
  const randomNumber = numbers[random(numbers)];

  headerSymbol.style.fontSize = "100px";
  footerSymbol.style.fontSize = "100px";

  if (randomSymbol === "hearts") {
    headerSymbol.innerHTML = "♥";
    footerSymbol.innerHTML = "♥";
    headerSymbol.style.color = "red";
    footerSymbol.style.color = "red";
    bodyNumber.style.color = "red";
  } else if (randomSymbol === "spades") {
    headerSymbol.innerHTML = "♠";
    footerSymbol.innerHTML = "♠";
  } else if (randomSymbol === "clubs") {
    headerSymbol.innerHTML = "♣";
    footerSymbol.innerHTML = "♣";
  } else {
    headerSymbol.innerHTML = "♦";
    footerSymbol.innerHTML = "♦";
    headerSymbol.style.color = "red";
    footerSymbol.style.color = "red";
    bodyNumber.style.color = "red";
  }

  if (randomNumber === "As") {
    headerSymbol.innerHTML = "";
    footerSymbol.innerHTML = "";
    bodyNumber.style.fontSize = "220px";
    if (randomSymbol === "hearts") {
      bodyNumber.innerHTML = "♥";
      bodyNumber.style.color = "red";
    } else if (randomSymbol === "spades") {
      bodyNumber.innerHTML = "♠";
    } else if (randomSymbol === "clubs") {
      bodyNumber.innerHTML = "♣";
    } else {
      bodyNumber.innerHTML = "♦";
      bodyNumber.style.color = "red";
    }
  } else {
    bodyNumber.innerHTML = randomNumber;
    bodyNumber.style.fontSize = "180px";
  }

  console.log(randomSymbol);
  console.log(randomNumber);
};
