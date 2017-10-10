import React, { Component } from 'react';
import $ from "jquery";

class Sidebar extends Component {
    render() {
        return(
        <div>
            <ul className="sidebar-nav">
                <div id="coat-of-arms"></div>
                <li>
                    <a href="#titles-section">Titles <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#movement-section">Movement <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#backhand-section">Backhand <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#return-section">Return <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#forehand-section">Forehand <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#serve-section">Serve <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#grit-section">Grit <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#coach-section">Coach <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
                <li>
                    <a href="#gear-section">Gear <span className="brackets">&#10092;&#10092;&#10092;</span></a>
                </li>
            </ul>
            <div id="profile-image"></div>
        </div>
        );
    }
}

export default Sidebar;

<ul className="nav sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                           Brand
                        </a>
                    </li>
                    
                </ul>
