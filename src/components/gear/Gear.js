import React, { Component } from 'react';


export default class Gear extends Component {
    render() {
        return(
        <div>
            <div className="Gear-1" id="gear-section">
                <ul className="flex-container">
                    <li className="flex-item"><h1 id="gear">Gear & Sponsors</h1></li>
                    <li className="flex-item" id="head-flexbox"><h1 id="head-header">Head</h1></li>
                    <li className="flex-item" id="uniqlo-flexbox"><h1 id="uniqlo-header">Uniqlo<br/>Former Sponsor</h1></li>
                    <li className="flex-item" id="adidas-flexbox"><h1 id="adidas-header">Adidas</h1></li>
                    <li className="flex-item" id="lacoste-flexbox"><h1 id="lacoste-header">Lacoste<br/>Current Sponsor</h1></li>
                    <li className="flex-item" id="peugeot-flexbox"><h1 id="peugeot-header">Peugeot</h1></li>
                    <li className="flex-item" id="seiko-flexbox"><h1 id="seiko-header">Seiko</h1></li>
                    <li className="flex-item" id="jacob-flexbox"><h1 id="jacob-header">Jacob's Creek</h1></li>
                    <li className="flex-item" id="anz-flexbox"><h1 id="anz-header">ANZ</h1></li>
                </ul>
            </div>
        </div>
        );
    }
}
