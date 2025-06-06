const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Valet", "Dame", "Roi", "As"];
const color = ["Piques", "Coeur", "Carreau", "Trèfle"];
let defausse = [];
let card;
let cardSuit;
let cardRank;

let deckInitial = [];
for (let suit of color) {
    for (let rank of number) {
        deckInitial.push({ suit: suit, rank: rank });
    }
}
console.log(deckInitial.length);
let deck = deckInitial;

window.onload = (event) => {
  shuffle();
};

function tirageCarte() {
    if (deck.length > 0) {
        card = Math.floor(Math.random() * deck.length);
        cardSuit = deck[card].suit;
        cardRank = deck[card].rank;
        console.log(cardRank + " de " + cardSuit);
        document.querySelector('.carte_tire').innerText = cardRank + " de " + cardSuit;
        const defausseValeur = deck.splice(card, 1);
        for (i = 0; i < defausseValeur.length; i++) {
            defausse.push(defausseValeur[i]);
        }
        document.querySelector('.carte_deck').innerText = deck.length;
        document.querySelector('.carte_defausse').innerText = defausse.length;
        document.querySelector('.cardListDefausse').innerText = "";
        for (i=0;i<defausse.length; i++) {
            document.querySelector('.cardListDefausse').innerText += ` ${defausse[i].rank} de ${defausse[i].suit} ||`;
        }
    }
}
function shuffle() {
    deck = [...deck, ...defausse];
    defausse = [];
    document.querySelector('.carte_tire').innerText = "";
    document.querySelector('.carte_deck').innerText = deck.length;
    document.querySelector('.carte_defausse').innerText = defausse.length;
    document.querySelector('.cardListDefausse').innerText = "";
}