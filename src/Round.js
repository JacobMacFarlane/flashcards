const Turns = require('../src/Turns')


class Round {
    constructor(deck) {
        this.deck = deck
        this.currentCardIndex = 0
        this.turns = 0
        this.incorrectGuesses = []
    }
    returnCurrentCard() {
        return this.deck.cards[this.currentCardIndex]
    }
    takeTurn(guess) {
        let currentCard = this.returnCurrentCard()
        let turn = new Turns(guess, currentCard)
        this.turns++
        if (turn.evaluateGuess()) {
            this.currentCardIndex++
            return 'correct!'
        } else {
            this.incorrectGuesses.push(currentCard.id)
            this.currentCardIndex++
            return 'incorrect!'
        }    
    }
    calculatePercentCorrect() {
        let numCorrect = this.turns - this.incorrectGuesses.length
        return Math.round((numCorrect / this.turns) * 100)
    }
    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}



module.exports = Round