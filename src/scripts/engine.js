const emojis = [
  "🤦‍♀️",
  "🤦‍♀️",
  "😎",
  "😎",
  "👀",
  "👀",
  "🎁",
  "🎁",
  "🤡",
  "🤡",
  "👹",
  "👹",
  "😺",
  "😺",
  "🚒",
  "🚒",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

//Bônus
const state = {
  view: {
    cardsLeft: document.querySelector(".cards-left"),
  },

  values: {
    cards: 16,
  },
};
/***/

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

//Bônus

function decayCardsLeft() {
  state.values.cards = state.values.cards - 2;
  state.view.cardsLeft.textContent = "CARDS LEFT: " + state.values.cards;
}
/***/

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    decayCardsLeft();
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];
  if (document.querySelectorAll(".boxMatch").length == emojis.length) {
    alert("Você venceu! Você virou todas as " + emojis.length + " cartas!");
  }
}
