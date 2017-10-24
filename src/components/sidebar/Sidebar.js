import React, { Component } from 'react';
import $ from "jquery";

class Sidebar extends Component {
    render() {
        return(
        <div>
            <ul className="sidebar-nav" role="navigation">
                <div id="coat-of-arms"></div>
                <li>
                    <a href="#titles-section">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter" role="link">T</span>itles 
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#movement-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">M</span>ovement
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#backhand-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">B</span>ackhand
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#return-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">R</span>eturn
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#forehand-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">F</span>orehand
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#serve-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">S</span>erve
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#grit-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">G</span>rit
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#coach-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">C</span>oach
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#gear-section" role="link">
                        <span className="brackets">
                            <span className="bracket-3">&#10093;</span>
                            <span className="bracket-2">&#10093;</span>
                            <span className="bracket-1">&#10093; </span>
                        </span>
                        <span className="first-letter">G</span>ear 
                        <span className="brackets">
                            <span className="bracket-1"> &#10092;</span>
                            <span className="bracket-2">&#10092;</span>
                            <span className="bracket-3">&#10092;</span>
                        </span>
                    </a>
                </li>
            </ul>
            <div id="profile-image"></div>
        </div>
        );
    }
}

export default Sidebar;