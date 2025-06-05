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

function tirageCarte() {
    card = Math.floor(Math.random() * deck.length);
    cardSuit = deck[card].suit;
    cardRank = deck[card].rank;
    console.log(cardRank + " de " + cardSuit);
    const defausseValeur = deck.splice(card, 1);
    for (i = 0; i < defausseValeur.length; i++) {
        defausse.push(defausseValeur[i]);
    }
    console.log("Nombre de cartes restantes : " + deck.length);
    console.log("Nombre de cartes dans la défause : " + defausse.length);
}

function shuffle() {
    deck = [...deck, ...defausse];
    defausse = [];
    console.clear();
}
