import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';

export default class Movement extends Component {
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
            <div className="Movement-1">
                <div className="container-fluid">
                    <div className="row">
                        <YouTube videoId="VUiBA7ivzCU" opts={opts} id="movement-video" onReady={this._onReady}/>   
                        <h1 id="movement-main-header" className="text-center">Movement</h1>
                        <h2 id="movement-secondary-header" className="text-center">The Wall</h2>
                    </div>
                </div>
            </div>
            <div className="Movement-2">
                <ul className="flex-container">
                    <li className="flex-item">
                        <ul className="flex-container-2">
                            <li className="flex-item">
                                <h1 id="you-shall-not-pass">You Shall Not Pass!</h1>
                                <p id="movement-paragraph">Novak Djokovic is one of the fastest players to have ever played the sport. His quickness is nearly second-to-none. Also a factor is his tremendous flexibility. When Djokovic slides to get the ball, many times he's almost doing the splits, yet can recover nearly instanteously to retreive the next shot. These two aspects (the raw speed in getting to the ball & the quick recovery from the slide) make it nearly impossible to get the ball past Novak, often forcing the opponent to hit 5 or 6 perfect shots just to win one point. Doing this constently for two, three, or four hours straight is virtually impossible which is why winning against Djokovic is such a daunting task.</p>           
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