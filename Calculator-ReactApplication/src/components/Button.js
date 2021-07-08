import React, { Component } from 'react'
import './button.css'

class Button extends Component {
   
    render() {
        return (
            <div className="button-wrapper" style={{backgroundColor:this.props.color}}>
                <div  onClick={()=>this.props.handleClick(this.props.num)} className="btn-style">{this.props.num}</div>
            </div>
        )
    }
}

export default Button
