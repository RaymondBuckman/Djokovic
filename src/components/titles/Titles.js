import React, { Component } from 'react';


export default class Titles extends Component {
    render() {
        return(
        <div>
            <div className="Titles-1" id="titles-section">
                <ul className="flex-container">
                    <li className="flex-item"><h1 id="titles" role="heading" tabIndex="0">Titles</h1></li>
                    <li className="flex-item" id="ao-titles-flexbox">
                        <a href="https://ausopen.com/" target="_blank" 
                        aria-label="go to the Australian Open's website" role="link">
                            <h1 id="ao-header">6 Australian Open Titles</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="fo-titles-flexbox">
                        <a href="http://www.rolandgarros.com/en_FR/index.html" target="_blank" 
                        aria-label="view more Uniqlo products on their website" role="link">
                            <h1 id="fo-header">1 French Open Title</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="w-titles-flexbox">
                        <a href="http://www.wimbledon.com/index.html" target="_blank" 
                        aria-label="view more Uniqlo products on their website" role="link">
                            <h1 id="w-header">3 Wimbledon Titles</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="uso-titles-flexbox">
                        <a href="http://www.usopen.org/index.html" target="_blank" 
                        aria-label="view more Uniqlo products on their website" role="link">
                            <h1 id="uso-header">2 US Open Titles</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="1000-flexbox">
                        <a href="https://en.wikipedia.org/wiki/ATP_World_Tour_Masters_1000" target="_blank" 
                        aria-label="View more info on Masters 1000 tournaments" role="link">
                            <h1 id="atp-1000-header">30 ATP Masters 1000 Titles</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="500-flexbox">
                        <a href="https://en.wikipedia.org/wiki/ATP_World_Tour_500_series" target="_blank" 
                        aria-label="View more info on ATP 500 tournaments" role="link">
                            <h1 id="atp-500-header">12 ATP 500 Titles</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="250-flexbox">
                        <a href="https://en.wikipedia.org/wiki/ATP_World_Tour_250_series" target="_blank" 
                        aria-label="View more info on ATP 250 Series tournaments" role="link">
                            <h1 id="atp-250-header">9 ATP 250 Titles</h1>
                        </a>
                    </li>
                    <li className="flex-item" id="money-flexbox">
                        <a href="http://www.atpworldtour.com/en/players/novak-djokovic/d643/overview" target="_blank" 
                        aria-label="check prize money & other player info on the official ATP website" role="link">
                            <h1 id="money-header">$109,805,403 in prize money</h1>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
