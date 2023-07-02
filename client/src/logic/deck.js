import Card from '/card.js'

class Deck {
    constructor(cardAmount, cards){
        this.cardAmount = cardAmount;
        this.cards = cards;
    }

    getCard(){
        this.cardAmount--;
        return this.cards.shift();
    }
    peekCard(){
        var peek = this.cards.shift();
        this.cards.push(peek);
        return peek;
    }
    addCard(cardToAdd) {
        this.cardAmount++;
        this.cards.push(cardToAdd);
    }

    doTurn(otherDeck){
        var curCard = this.getCard();
        var curOtherCard = otherDeck.getCard();

        var verdict = curCard.isOtherSuperior(curOtherCard);
        if (verdict.localeCompare("tie")){
            this.addCard(curCard);
            otherDeck.addCard(curOtherCard);
            return " tied";
        }
        else if (verdict.localeCompare("superior")){
            otherDeck.push(curCard);
            otherDeck.push(curOtherCard);
            return " lost!";
        }
        else{
            this.addCard(curOtherCard);
            this.addCard(curCard);
            return " won!";
        }
    }
}

export default Deck;