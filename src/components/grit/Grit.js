import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';

export default class Grit extends Component {
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
            <div className="Grit-1" id="grit-section">
                <div className="container-fluid">
                    <div className="row">
                        <YouTube videoId="ghRMOORLZKU" opts={opts} id="grit-video" className="video-fade-in" onReady={this._onReady}/>   
                        <h1 id="grit-main-header" className="text-center">Grit</h1>
                        <h2 id="grit-secondary-header" className="text-center">Never give up</h2>
                    </div>
                </div>
            </div>
            <div className="Grit-2">
                <ul className="flex-container">
                    <li className="flex-item"></li>
                    <li className="flex-item">
                        <ul className="flex-container">
                            <li className="flex-item"></li>
                            <li className="flex-item">
                                <h1 id="down-but-not-out">Down, but not out</h1>
                                <p id="grit-paragraph">Novak Djokovic speaks five languages, but there's one word that's not in his vocabulary: quit. In term fight & grit, only Rafael Nadal & Roger Federer can be put in the same sentence as Novak Djokovic. He has an incredible number of come-from-behind victories from match point down, and you can never count him out from making a comeback. Even after you've broken his serve, figured out his returns, & can win points from the baseline, you will still have to deal with the final layer of the Djokovic arsenal...his resolve. And this is something that never goes away. Think you've won just because you have a match point? Think again. </p>       
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }   
}
