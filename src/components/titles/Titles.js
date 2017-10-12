import React, { Component } from 'react';


export default class Titles extends Component {
    render() {
        return(
        <div>
            <div className="Titles-1" id="titles-section">
                <ul className="flex-container">
                    <li className="flex-item"><h1 id="titles">Titles</h1></li>
                    <li className="flex-item" id="ao-titles-flexbox"><h1 id="ao-header">6 Australian Open Titles</h1></li>
                    <li className="flex-item" id="fo-titles-flexbox"><h1 id="fo-header">1 French Open Title</h1></li>
                    <li className="flex-item" id="w-titles-flexbox"><h1 id="w-header">3 Wimbledon Titles</h1></li>
                    <li className="flex-item" id="uso-titles-flexbox"><h1 id="uso-header">2 US Open Titles</h1></li>
                    <li className="flex-item" id="1000-flexbox"><h1 id="atp-1000-header">30 ATP Masters 1000 Titles</h1></li>
                    <li className="flex-item" id="500-flexbox"><h1 id="atp-500-header">12 ATP 500 Titles</h1></li>
                    <li className="flex-item" id="250-flexbox"><h1 id="atp-250-header">9 ATP 250 Titles</h1></li>
                    <li className="flex-item" id="money-flexbox"><h1 id="money-header">$109,805,403 in prize money</h1></li>
                </ul>
            </div>
        </div>
        );
    }
}
