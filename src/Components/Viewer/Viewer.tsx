import React, { Component } from 'react';

import EntryPoint from "./Game/EntryPoint"
import "./Viewer.css"

export default class Viewer extends Component {
    threeRootElement: any;
    
    componentDidMount() {
        
        EntryPoint(this.threeRootElement);

    }
    render () {
        return (
            // <React.StrictMode>
            <div className="viewer-viewer" ref={element => this.threeRootElement = element} />
            //</React.StrictMode>
        );
    }
}