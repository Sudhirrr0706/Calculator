import React, { Component } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import './content.css'
import ToolTipContent from './ToolTipContent';

class ToolTipsPassword extends Component {
    render() {
       
        return (
            <div>
                <Tippy className="container-fluid text-white bg" content={<ToolTipContent></ToolTipContent>} placement='right' delay={500} >
                    <img src={this.props.icon} alt=""/>
                </Tippy>
            </div>
        )
    }
}

export default ToolTipsPassword
