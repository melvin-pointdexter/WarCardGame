import React from 'react';
import Club from "../../graphics/club.png";
import Diamond from "../../graphics/diamond.png";
import Heart from "../../graphics/heart.png";
import Spade from "../../graphics/spade.png";

import Style from "../../graphics/renders.css";

const CardUI = (props) => {
    const value = props.value;
    const suit = props.suit;
    const suitImage = (suit.localeCompare("C")) ? Club : (suit.localeCompare("D")) ? Diamond : (suit.localeCompare("H")) ? Heart : Spade;
    
    return <div style={{ display: "flex",  width: "200px", height: "350px", backgroundColor: "white", borderRadius: "10%"  }}>
                <text style={{ float: "right" }}>{value}</text>
                <img src={suitImage} alt="suit image" style={{ width: '120px', }}/>
                <text style={{ float: "left" }}>{value}</text>
            </div>;
};

export default CardUI