import React, { Component } from 'react'
import './App.css';
import Screen from './components/Screen';
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="screenDisplay ">
             <Screen />
        </div>
      </React.Fragment>
    )
  }
}

export default App

