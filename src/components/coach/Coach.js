import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class Coach extends Component {
    render() {
        return(
        <div>
            <div className="Coach-1" id="coach-section">
                <div className="container-fluid">
                    <div className="row">
                        <h1 id="coach-main-header" className="mx-auto" role="heading">Coaching Staff</h1>
                    </div>
                    <div className="row">
                        <h2 id="coach-secondary-header" className="mx-auto">The team behind the sensation</h2>
                    </div>
                </div>
            </div>
            <div className="Coach-2">
                <ul className="flex-container">
                    <li className="flex-item">
                        <ul className="flex-container">
                            <li className="flex-item">
                                <h1 id="support-network" tabIndex="0">Support Network</h1>
                                <p id="coach-paragraph">Strictly speaking, tennis is not a team sport. But in the modern game virtually every top player has their "camp" of trainers, physios, & dietitians. For nearly 11 years (June 2006 through May 2017), former Slovakian tennis player Marián Vajda was Novak's coach & played a major role in Novak's rise to the top of the game. In December of 2013, German tennis legend Boris Becker joined Djokovic's camp as head coach with Vajda remaining on the team as a lesser role. In mid 2017, Novak started fresh by bring on new faces to his team, principally Andre Agassi (pictured below, left), one of the greatest players of all time.    </p>           
                            </li>
                            <li className="flex-item"></li>
                        </ul>
                    </li>
                    <li className="flex-item"></li>
                </ul>
            </div>
        </div>
        );
    }   
}
