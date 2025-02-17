const chai = require("chai");
const expect = chai.expect;
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");
const Turns = require("../src/Turns");
const Game = require("../src/Game");

describe("Game", () => {
  let card1, card2, card3;
  let deck;
  let round;
  let game;
  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round);
  });
  it("Should keep track of the current Round and deck", () => {
    game.start();
    expect(game.currentRound).to.equal(0);
  });
});
