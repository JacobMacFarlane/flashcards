const chai = require("chai");
const expect = chai.expect;
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");

describe("Round", () => {
  let card1, card2, card3;
  let deck;
  let round;
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
  });
  it("Should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("Should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });
  it("Should be able to return the current card", () => {
    expect(round.returnCurrentCard()).to.be.an("object");
  });
  it("Should default to 0 turns", () => {
    expect(round.turns).to.equal(0);
  });
  it("Should hold an empty array in incorrect guesses", () => {
    expect(round.incorrectGuesses).to.be.an("array");
    expect(round.incorrectGuesses.length).to.equal(0);
  });
  it("Should be able to determine if a guess is correct", () => {
    expect(round.takeTurn("sea otter")).to.equal("correct!");
    expect(round.turns).to.equal(1);
    expect(round.takeTurn("spleen")).to.equal("incorrect!");
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses[0]).to.equal(14);
  });
  it("Should be able to calculate the percent correct", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");

    expect(round.calculatePercentCorrect()).to.equal(50);
  });
  it("Should display a message featuring the users score at the end", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");

    expect(round.endRound()).to.equal(
      "** Round over! ** You answered 50% of the questions correctly!"
    );
  });
});
