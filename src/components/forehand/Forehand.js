import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';

export default class Forehand extends Component {
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
            <div className="Forehand-1" id="forehand-section">
                <div className="container-fluid">
                    <div className="row">
                        <YouTube videoId="C_kvfS1Jafg" opts={opts} id="forehand-video" className="video-fade-in" onReady={this._onReady}/>   
                        <h1 id="forehand-main-header" className="text-center" role="heading">Forehand</h1>
                        <h2 id="forehand-secondary-header" className="text-center">The ultimate "weakness"</h2>
                    </div>
                </div>
            </div>
            <div className="Forehand-2">
                <ul className="flex-container">
                    <li className="flex-item"></li>
                    <li className="flex-item">
                        <ul className="flex-container">
                            <li className="flex-item"></li>
                            <li className="flex-item">
                                <h1 id="attack-his-what" tabIndex="0">Attack his what?!</h1>
                                <p id="forehand-paragraph">Novak Djokovic does everything exceptionally well, but if there's any weakness to go after during a rally, it's his forehand. Don't let that statement fool you though...Novak can still generate truckloads of angled winners off his weaker wing, while still keeping unforced errors to a minimum. And because there's only one hand on the racket, it gives him longer reach on his forehand, making it that much harder to get the ball past him. In recent years, Novak has compensated for the relative lack of consistency by upping the MPHs on his forehand side. Choosing to go after his forehand might result in him slapping a flat winner up the line. So much for going after his weakness...</p>       
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
    
}
