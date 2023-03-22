const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round')
const Turns = require('../src/Turns')
const Deck = require('../src/Deck')
const Card = require('../src/Card');

class Game {
  constructor() {
    this.deck = null
    this.currentRound = null
  }

  start() {

    const cards = prototypeQuestions.map(question => new Card(question.id,question.question, question.answers, question.correctAnswer))
    this.deck = new Deck(cards)
    this.currentRound = new Round(this.deck)

    this.printMessage()
    this.printQuestion()
  }
  createCards() {
    return prototypeQuestions.map(question => new Card(question.id,question.question, question.answers, question.correctAnswer))
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;