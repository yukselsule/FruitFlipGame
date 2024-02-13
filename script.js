"use strict";

const cards = document.querySelectorAll(".card");
const cardSideFront = document.querySelector(".card-side__front");
const cardSideBack = document.querySelector(".card-side__back");
const matches = document.querySelector(".matches");
const moves = document.querySelector(".moves");
const newGame = document.querySelector(".btn");

// Variables

let match = 0;
let move = 0;
let limit = 0;
let openCards = [];
let flippedCards = [];

// Functions

// shuffling the cards
const shuffle = function () {
  cards.forEach((card) => {
    let order = Math.floor(Math.random() * 16);

    card.style.order = order;
  });
};

// game over
const gameOver = function () {
  setTimeout(() => {
    document.querySelector(".winner").style.display = "inherit";
    document.querySelector(".cards").style.display = "none";
  }, 1500);
};

// starting conditions - new game
const init = function () {
  match = 0;
  move = 0;

  matches.textContent = 0;
  moves.textContent = 0;

  document.querySelector(".winner").style.display = "none";
  document.querySelector(".cards").style.display = "grid";

  const flippedCards = document.querySelectorAll(".flipped");
  flippedCards.forEach((flippedCard) => {
    flippedCard.classList.remove("flipped");
  });

  const openCards = document.querySelectorAll(".matched");
  openCards.forEach((openCard) => {
    openCard.classList.remove("matched");
  });

  setTimeout(() => {
    shuffle();
  }, 500);
};

init();

// Flipping card

cards.forEach((card) => {
  card.addEventListener("click", function () {
    if (
      !card.classList.contains("flipped") &&
      !card.classList.contains("matched")
    ) {
      card.classList.add("flipped");
      flippedCards.push(card);

      let cardName = card.getAttribute("data-card-name");
      openCards.push(cardName);

      const isTwoCardsOpened = flippedCards.length === 2;
      const isCardsMatched = openCards[0] === openCards[1];

      if (isTwoCardsOpened) {
        if (isCardsMatched) {
          match++;
          matches.textContent = match;
          const isGameOver = match === 8;

          flippedCards.forEach((flippedCard) => {
            flippedCard.classList.add("matched");
            flippedCard.classList.remove("flipped");

            if (isGameOver) {
              gameOver();
            }
          });
        } else {
          flippedCards.forEach((flippedCard) => {
            setTimeout(() => {
              flippedCard.classList.remove("flipped");
            }, 1000);
          });
        }

        openCards = [];
        flippedCards = [];

        move++;
        moves.textContent = move;
      }
    }
  });
});

// new game button

newGame.addEventListener("click", init);
