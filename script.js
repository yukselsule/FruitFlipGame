"use strict";

const cards = document.querySelectorAll(".card");
const cardSideFront = document.querySelector(".card-side__front");
const cardSideBack = document.querySelector(".card-side__back");
const matches = document.querySelector(".matches");
const moves = document.querySelector(".moves");
const newGame = document.querySelector(".btn");

// Starting conditions - New Game

let match, move;
let limit = 0;

// shuffling the cards

const shuffle = function () {
  cards.forEach((card) => {
    let order = Math.floor(Math.random() * 16);

    card.style.order = order;
  });
};

const init = function () {
  metch: 0;
  move: 0;

  matches.textContent = 0;
  moves.textContent = 0;

  shuffle();
};

init();

// Flipping card

cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.add("flipped");
  });
});
