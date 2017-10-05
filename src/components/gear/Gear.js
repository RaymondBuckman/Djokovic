import React, { Component } from 'react';


export default class Gear extends Component {
    render() {
        return(
        <div>
            <div className="Gear-1">
                <ul className="flex-container">
                    <li className="flex-item"><h1 id="gear">Gear</h1></li>
                    <li className="flex-item" id="racket-titles-flexbox"><h2 id="racket-titles">Head Graphene Touch Speed Pro</h2></li>
                    <li className="flex-item" id="apparel-titles-flexbox"><h2 id="apparel-titles">Uniqlo<br/>Past Sponsor</h2></li>
                    <li className="flex-item" id="shoes-titles-flexbox"><h2 id="shoes-titles">Adidas Novak Pro</h2></li>
                    <li className="flex-item" id="etc-titles-flexbox"><h2 id="etc-titles">Lacoste<br/>Current Sponsor</h2></li>
                    <li className="flex-item">
                        <ul id="other-sponsers-list">
                            <li>Peugeot</li>
                            <li>Seiko</li>
                            <li>Jacob's Creek</li> 
                            <li>ANZ</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
