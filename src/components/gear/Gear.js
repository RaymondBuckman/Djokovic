import React, { Component } from 'react';


export default class Gear extends Component {
    render() {
        return(
        <div>
            <div className="Gear-1">
                <ul className="flex-container">
                    <li className="flex-item"><h1 id="gear">Gear</h1></li>
                    <li className="flex-item" id="racket-flexbox"><h2 id="racket-header">Head Graphene Touch Speed Pro</h2></li>
                    <li className="flex-item" id="past-apparel-flexbox"><h2 id="past-apparel-header">Uniqlo<br/>Past Sponsor</h2></li>
                    <li className="flex-item" id="shoes-flexbox"><h2 id="shoes-header">Adidas Novak Pro</h2></li>
                    <li className="flex-item" id="current-apparel-flexbox"><h2 id="current-apparel-header">Lacoste<br/>Current Sponsor</h2></li>
                    <li className="flex-item">
                        <ul id="other-sponsors-list">
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
