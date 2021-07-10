import React, { Component } from 'react'
import plus from './images/add.png'
import image from './images/notificationMessage.png'
import './header.css'
import number from './images/1.png'

class Header extends Component {
    render() {
        return (
            <div className="header d-flex justify-content-between p-2 ">
                <div className="mt-2">
                    <img src={plus} alt="logo2"/>
                </div>
                    <h1 className="text-white insta-head">Instagram</h1>
                <div className="mt-2">
                    <img src={image} alt="Logo1"/>
                    <img className="notification col-4" src={number} alt=""/>
                </div>
                
            </div>
        )
    }
}

export default Header
