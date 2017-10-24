import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';
import downArrow from '../../img/down-arrow.png';

export default class Intro extends Component {
    render() {
        const opts = {
            height: '360',
            width: '640',
            playerVars: { 
                autoplay: 1,
                controls: 1,
                modestbranding: 1,
                showinfo: 0
            }
    }
        return(
        <div>
            <div id="top-of-page" className="Intro-1">
                <div className="container" id="one-container">
                    <div className="row">
                        <div className="col-12">
                            <YouTube videoId="4U9I5gHHWvU" opts={opts} id="intro-video" className="mx-auto" onReady={this._onReady}/> 
                        </div>
                    </div>
                    <div className="row">
                        <h1 id="intro-main-header" className="mx-auto" role="heading">Novak Djokovic</h1>
                    </div>
                    <div className="row">
                        <h2 id="intro-secondary-header" className="mx-auto">Man meets machine</h2>
                    </div>
                    <div className="row">
                        <img id="down-arrow" src={downArrow} height="35px" className="text-center"></img>
                    </div>
                </div>
            </div>
            <div id="arrow-dest" className="Intro-2">
                <ul className="flex-container-1">
                    <li className="flex-item" id="belgrade-flexbox">
                        <h1 id="belgrade-serbia">Belgrade, Serbia</h1>
                    </li>
                    <li className="flex-item">
                        <ul className="flex-container-2">
                            <li className="inner-flex-item"></li>
                            <li className="inner-flex-item">
                                <h1 id="the-origin-of-a-champion">The Origin of a Champion</h1>
                                <p id="origin-paragraph">Novak Djokovic was born on 22 May 1987 in Belgrade, SR Serbia, Yugoslavia, to parents Srđan and Dijana (née Žagar). Novak's father is Montenegrin in origin and his mother is Croatian by background, with Novak considering himself to be Serbian. His two younger brothers, Marko and Djordje, are also tennis players with professional aspirations. A resident in Monte Carlo, Djokovic was coached by former Slovak tennis player Marián Vajda from 2006 until Boris Becker took over the role of head coach in December 2013. Djokovic is a self-described fan of languages, speaking Serbian, English, French, German, and Italian.</p>           
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
    _onReady(event) {
    // access to player in all event handlers via event.target 
    event.target.playVideo();
  }
}

