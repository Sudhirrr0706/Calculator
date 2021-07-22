import React, { Component } from 'react'
import './content.css'
class ToolTipContent extends Component {
    render() {
        return (
            <div className="content">
                <h1>Password Tips</h1>
                <ul>
                    <li className="mb-0 pb-0">
                        <p>At least one upper case letter</p>
                    </li>
                    <li>
                        <p>At least one lower case letter</p>
                    </li>
                    <li>
                        <p>At least one digit</p>
                    </li>
                    <li>
                        <p>At least one special character</p>
                    </li>
                    <li>
                        <p>Minimum eight characters</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ToolTipContent
