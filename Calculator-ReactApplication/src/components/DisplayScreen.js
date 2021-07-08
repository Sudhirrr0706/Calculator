import React, { Component } from 'react'
import './display.css'
class DisplayScreen extends Component {
    render() {
        return (
            <div className="display-section">
                <div className="results">
                    <h1>{this.props.resultScreen}</h1>
                </div>
                <div className="input">
                    <p>{this.props.inputScreen}</p>
                </div>

            </div>
        )
    }
}

export default DisplayScreen
