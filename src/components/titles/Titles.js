import React, { Component } from 'react';


export default class Titles extends Component {
    render() {
        return(
        <div>
            <div className="Titles-1">
                <ul className="flex-container">
                    <li className="flex-item"><h1 id="titles">Titles</h1></li>
                    <li className="flex-item" id="ao-titles-flexbox"><h2 id="ao-titles">6 Australian Open Titles</h2></li>
                    <li className="flex-item" id="fo-titles-flexbox"><h2 id="fo-titles">1 French Open Title</h2></li>
                    <li className="flex-item" id="w-titles-flexbox"><h2 id="w-titles">3 Wimbledon Titles</h2></li>
                    <li className="flex-item" id="uso-titles-flexbox"><h2 id="uso-titles">2 US Open Titles</h2></li>
                    <li className="flex-item">
                        <ul id="other-titles-list">
                            <li>30 ATP Masters 1000 Titles</li>
                            <li>12 ATP 500 Titles</li>
                            <li>9 ATP 250 Titles</li> 
                            <li>$109,805,403 in prize money</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
