import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';

export default class Serve extends Component {
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
            <div className="Serve-1" id="serve-section">
                <div className="container-fluid">
                    <div className="row">
                        <YouTube videoId="_HvKoOmMDYg" opts={opts} id="serve-video" className="video-fade-in" onReady={this._onReady}/>   
                        <h1 id="serve-main-header" className="text-center">Serve</h1>
                        <h2 id="serve-secondary-header" className="text-center">One-way traffic</h2>
                    </div>
                </div>
            </div>
            <div className="Serve-2">
                <ul className="flex-container">
                    <li className="flex-item">
                        <ul className="flex-container">
                            <li className="flex-item">
                                <h1 id="the-straw">The straw that broke the camel's back</h1>
                                <p id="serve-paragraph">As if everything else wasn't enough to deal with, Novak is a very underrated server. Although he struggled with his serve in the ealier days of his career, Novak has improved his serve dramatically to the point where it's extremely solid. Although not an ace machine like Ivo Karlovic or Milos Raonic, Novak's serve has great placement & usually puts him in a position to hit a winner on the next shot. He also manages to produce aces to get him out of trouble. Just when you've managed to win several 20-shot rallies & have a break point opportunity, Novak will erase it in the blink of an eye like it was never there. Even if you do manage to break, be prepared to get broken back next game.</p>           
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
