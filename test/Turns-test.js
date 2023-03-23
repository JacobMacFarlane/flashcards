const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turns = require("../src/Turns");

describe("Turns", () => {
  it("Should be an instance of Turns", () => {
    const turns = new Turns();
    expect(turns).to.be.an.instanceof(Turns);
  });
  it("Should store a users guess", () => {
    const turns = new Turns("Tiger");

    expect(turns.userGuess).to.equal("Tiger");
  });
  it("Should also hold the currrent Card in play", () => {
    const card = new Card(
      1,
      "What is Jacobs fav animal",
      ["Roadrunner", "Tiger", "Monkey"],
      "Monkey"
    );
    const turns = new Turns("Tiger", card);
    expect(turns.currentCard).to.equal(card);
  });
  it("Should return the current Guess", () => {
    const card = new Card(
      1,
      "What is Jacobs fav animal",
      ["Roadrunner", "Tiger", "Monkey"],
      "Monkey"
    );
    const turns = new Turns("Tiger", card);

    userChoice = turns.returnGuess();

    expect(userChoice).to.equal("Tiger");
  });
  it("Should return the current Card", () => {
    const card = new Card(
      1,
      "What is Jacobs fav animal",
      ["Roadrunner", "Tiger", "Monkey"],
      "Monkey"
    );
    const turns = new Turns("Roadrunner", card);

    presentCard = turns.returnCard();

    expect(presentCard).to.equal(card);
  });
  it("Should be able to determine if the users guess is not correct", () => {
    let card = new Card(
      1,
      "What is Jacobs fav animal",
      ["Roadrunner", "Tiger", "Monkey"],
      "Monkey"
    );
    const turns = new Turns("Roadrunner", card);

    turns.evaluateGuess();

    expect(turns.evaluateGuess()).to.equal(false);
  });
  it("Should be able to determin if the users guess is correct", () => {
    const card = new Card(
      1,
      "What is Jacobs fav animal",
      ["Roadrunner", "Tiger", "Monkey"],
      "Monkey"
    );
    let turns = new Turns("Monkey", card);

    turns.evaluateGuess();

    expect(turns.evaluateGuess()).to.equal(true);
  });
  it("Should provide feedback if you are incorrect", () => {
    let card = new Card(
      1,
      "What is Jacobs fav animal",
      ["Roadrunner", "Tiger", "Monkey"],
      "Monkey"
    );
    const turns = new Turns("Roadrunner", card);

    turns.evaluateGuess();
    turns.giveFeedback();

    expect(turns.giveFeedback()).to.equal("incorrect!");
  });
  it("Should provide feedback if you are correct", () => {
    const card = new Card(
      1,
      "What is Jacobs fav animal",
      ["Roadrunner", "Tiger", "Monkey"],
      "Monkey"
    );
    let turns = new Turns("Monkey", card);

    turns.evaluateGuess();
    turns.giveFeedback();

    expect(turns.giveFeedback()).to.equal("correct!");
  });
});
