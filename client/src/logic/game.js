import Card from "./card.js";
import Deck from './deck.js';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}



class Game{
    constructor(){
        var values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        var suits = ["C","D","H","S"];      //club, diamond, heart, spade

        var allCards= [];
        for (let v=0,s=0; s<4;v++){
            if (i==13){
                i=0;
                s++;
            }
            allCards.push(new Card(values[v],suits[s]));
        }

        shuffle(allCards);      //by this point, there are 54 cards that were shuffled

        var p1cards = [];
        var p2cards = [];

        for (let i=0; i<26;i++){        //fill two card arrays with the shuffled cards
            p1cards.push(allCards.shift());
            p2cards.push(allCards.shift());
        }
        //finally, create the two decks
        this.deckP1 = new Deck(26,p1cards);
        this.deckP2 = new Deck(26,p2cards);
    }

    doTurn(){
        var verdict = "Player 1" + this.deckP1.doTurn(this.deckP2);
        return verdict;
    }
}

