let openCards = [];
let flippedCards = [];

cards.forEach((card) => {
  card.addEventListener("click", function () {
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
      flippedCards.push(card);

      // Her defasında sadece yeni çevrilen kartın ismini ekleyin.
      const cardName = card.getAttribute("data-card-name");
      openCards.push(cardName);

      // Eğer iki kart açıldıysa, eşleşme kontrolü yapın.
      if (flippedCards.length === 2) {
        // Eşleşme kontrolü
        if (openCards[0] === openCards[1]) {
          console.log("Match found!");
          // Eşleşen kartları işaretle veya bir sonraki adıma geç
          flippedCards.forEach((card) => card.classList.add("match"));
        } else {
          console.log("No match!");
          // Eşleşmeyen kartları geri çevir
          flippedCards.forEach((card) => {
            setTimeout(() => {
              card.classList.remove("flipped");
            }, 1000); // 1 saniye sonra kartları geri çevir
          });
        }
        // Dizileri sıfırla
        openCards = [];
        flippedCards = [];
      }
    }
  });
});

cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.add("flipped");

    let flippedCards = document.querySelectorAll(".flipped");
    let cardName = card.getAttribute("data-card-name");
    openCards.push(cardName);
    console.log(openCards);

    // matching
    if ((openCards.length = 2)) {
      if (openCards[0] === openCards[1]) {
        match++;
        matches.textContent = match;

        flippedCards.forEach((card) => card.classList.add("matched"));
        flippedCards.forEach((card) => card.classList.remove("flipped"));
      }
      // else {
      //   flippedCards.forEach((card) => card.classList.remove("flipped"));
      // }
    }
  });
});
