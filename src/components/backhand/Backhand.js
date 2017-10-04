import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';

export default class Backhand extends Component {
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
            <div className="Backhand-1">
                <div className="container-fluid">
                    <div className="row">
                        <YouTube videoId="PVRJgHewyFY" opts={opts} id="backhand-video" className="video-fade-in" onReady={this._onReady}/>   
                        <h1 id="backhand-main-header" className="text-center">Backhand</h1>
                        <h2 id="backhand-secondary-header" className="text-center">Approach At Your Own Peril</h2>
                    </div>
                </div>
            </div>
            <div className="Backhand-2">
                <ul className="flex-container">
                    <li className="flex-item"></li>
                    <li className="flex-item">
                        <ul className="flex-container">
                            <li className="flex-item"></li>
                            <li className="flex-item">
                                <h1 id="power-accuracy">Power + Accuracy</h1>
                                <p id="backhand-paragraph">The Djokovic two-handed backhand is considered by many to be the best backhand in the history of tennis. What makes it so good? The combination of pinpoint accuracy, deceptive power, & rock-solid reliability. Novak can consistently place the ball anywhere on the court at will. Even as a baseliner, Novak can generate incredible angles off a hard-hit ball & clip the line with a passing shot. The lengths of time that he can produce these shots over and over again creates havok for Novak's opponents. Also keeping his opponent on their toes is Novak's dropshot. Disguising the shot until the very last moment, Djokovic can take his hand off at the last minute & place the ball barely over the net. Game. Set. Match.  </p>           
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
    
}