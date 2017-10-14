import React, { Component } from 'react';


export default class Gear extends Component {
    render() {
        return(
        <div>
            <div className="Gear-1" id="gear-section">
                <ul className="flex-container">
                    <li className="flex-item"><h1 id="gear" role="heading" tabIndex="0">Gear & Sponsors</h1></li>
                    <li className="flex-item" id="head-flexbox">
                        <a href="https://www.head.com/en-IC/sports/tennis/" target="_blank" 
                        aria-label="view more Head products on their website" role="link">
                            <h1 id="head-header">Head</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="uniqlo-flexbox">
                        <a href="https://www.uniqlo.com/us/en/home/" target="_blank" 
                        aria-label="view more Uniqlo products on their website" role="link">
                            <h1 id="uniqlo-header">Uniqlo<br/>Former Sponsor</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="adidas-flexbox">
                        <a href="https://www.adidas.com/us" target="_blank" 
                        aria-label="view more Adidas products on their website" role="link">
                            <h1 id="adidas-header">Adidas</h1>
                        </a>            
                    </li>
                    <li className="flex-item" id="lacoste-flexbox">
                        <a href="https://www.lacoste.com/us/" target="_blank" 
                        aria-label="view more Lacoste products on their website" role="link">
                            <h1 id="lacoste-header">Lacoste<br/>Current Sponsor</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="peugeot-flexbox">
                        <a href="http://www.peugeot.com/en" target="_blank" 
                        aria-label="view more Peugeot products on their website" role="link">
                            <h1 id="peugeot-header">Peugeot</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="seiko-flexbox">
                        <a href="https://www.seikowatches.com/" target="_blank" 
                        aria-label="view more Seiko products on their website" role="link">
                            <h1 id="seiko-header">Seiko</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="jacob-flexbox">
                        <a href="http://www.jacobscreek.com/us" target="_blank" 
                        aria-label="view more Jacob's Creek products on their website" role="link">
                            <h1 id="jacob-header">Jacob's Creek</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="anz-flexbox">
                        <a href="https://www.anz.com.au/personal/" target="_blank" 
                        aria-label="view more info about ANZ on their website" role="link">
                            <h1 id="anz-header">ANZ</h1>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
