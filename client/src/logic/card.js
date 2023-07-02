
class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
    
    getValue(){
        return this.value;
    }
    getSuit(){
        return this.suit;
    }
    
    isOtherSuperior(otherCard){
        var otherValue = otherCard.getValue();
        if (this.value.localeCompare(otherValue)==0)        //if cards have the same value
            return "tie";
        else if (this.value.localeCompare("J")==0 || this.value.localeCompare("Q")==0 || this.value.localeCompare("K")==0 || this.value.localeCompare("A")==0){     //if our card is a ace/king/queen/prince
            if (otherValue.localeCompare("J")==0 || otherValue.localeCompare("Q")==0 || otherValue.localeCompare("K")==0|| otherValue.localeCompare("A")==0){       //if both cards are ace/king/queen/prince
                var otherNum, thisNum;
                switch(this.value){
                    case 'J':
                        thisNum=1;
                        break;
                    case 'Q':
                        thisNum=2;
                        break;
                    case 'K':
                        thisNum=3;
                        break;
                    case 'A':
                        thisNum=4;
                        break;
                }
                switch(otherValue){
                    case 'J':
                        otherNum=1;
                        break;
                    case 'Q':
                        otherNum=2;
                        break;
                    case 'K':
                        otherNum=3;
                        break;
                    case 'A':
                        otherNum=4;
                        break;
                }
                if (otherNum>thisNum)
                    return "superior";
                else if (otherNum<thisNum)
                    return "inferior";
                else
                    return "tie";
            }
            else
                return "inferior";
        }
        else if (otherValue.localeCompare("J")==0 || otherValue.localeCompare("Q")==0 || otherValue.localeCompare("K")==0|| otherValue.localeCompare("A")==0)       //if only the other card is a ace/king/queen/prince
            return "superior";
        else
            return (this.value.localeCompare(otherCard)==1) ? "inferior" : "superior" ;     //else, compare the cards based on values between 2 to 10
    }
}

export default Card;