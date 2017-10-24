import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

export default class End extends Component {
    render() {
        return(
        <div>
            <div className="End-1">
                <div className="container-fluid" id="one-container">
                    <div className="row">   
                        <h1 id="end-main-header" className="mx-auto" role="heading">Idemo Nole!</h1>
                    </div>
                    <div className="row">
                        <h2 id="end-secondary-header" className="mx-auto">Let's go Nole!</h2>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

