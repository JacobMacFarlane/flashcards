const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
  start() {
    const cards = prototypeQuestions.map((question) => {
      const eachCard = new Card(
        question.id,
        question.question,
        question.answers,
        question.correctAnswer
      );
      return eachCard;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
