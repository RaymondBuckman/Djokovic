import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';

export default class Return extends Component {
    render() {
        const opts = {
            height: '360',
            width: '640',
            playerVars: { 
                autoplay: 0,
                controls: 1,
                modestbranding: 1,
                showinfo: 0
            }
    }
        return(
        <div>
            <div className="Return-1">
                <div className="container-fluid">
                    <div className="row">
                        <YouTube videoId="xkxmPKjsUjc" opts={opts} id="return-video" className="video-fade-in" onReady={this._onReady}/>   
                        <h1 id="return-main-header" className="text-center">Return</h1>
                        <h2 id="return-secondary-header" className="text-center">Shut it down</h2>
                    </div>
                </div>
            </div>
            <div className="Return-2">
                <ul className="flex-container">
                    <li className="flex-item">
                        <ul className="flex-container">
                            <li className="flex-item">
                                <h1 id="return-to-sender">Return to Sender</h1>
                                <p id="return-paragraph">Relying on an ace for some free points? Think again. Novak is the undisputed G.O.A.T. in terms of his return of serve. His return position is literally right on the baseline, which takes away the server's response time. His flexibily allows him to get a clean hit on the serve despite him having less time to react himself. Once he strikes the ball, Novak usually goes for two types of returns: hard up the middle or a clean winner in the corner. The former is the default option as it's low risk, pushes the opponent back in the court, & gives them no angle. Once the opponent adapts & tries to prepare for the deep ball, he goes for the clean winner.</p>           
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
