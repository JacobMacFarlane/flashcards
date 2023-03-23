const Turns = require("../src/Turns");
class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return (this.currentCard = this.deck[this.turns]);
  }
  takeTurn(guess) {
    const turn = new Turns(guess, this.currentCard);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.returnCurrentCard();
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    let numCorrect = this.turns - this.incorrectGuesses.length;
    return Math.round((numCorrect / this.turns) * 100);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
