import React, { Component } from 'react'
import './App.css';
import Button from './components/Button';
import DisplayScreen from './components/DisplayScreen';
import { evaluate } from 'mathjs';
class App extends Component {
  state={
    result:"",
    input:"",
    numbers:`${this.props.num}`
  }
  displayInput=(val)=>{
   this.setState({input:[...this.state.input,val +""]})
  }
  clear=()=>{
    this.setState({
      result:"",
      input:"",
    })
  }
  calculate=()=>{
   try{
      const inputs=this.state.input.join("")
      this.setState({result:(evaluate(inputs))})
    }
    catch{
      this.setState({result:'Error'})
    }
  }
  backspace=()=>{
    try{
      this.setState({input:this.state.input.slice(0,-1)})
   }
   catch{
     this.setState({input:""})
   }
  }

  
  render() {
    const buttonColor = 'RGB(242,163,60)'
    return (
      <div className="App">
      <div className="calc-wrapper">
        <h1>Calculator</h1>
        <DisplayScreen resultScreen={this.state.result} inputScreen={this.state.input}/>
        <div className="row">
            <Button  num=">" color='#5A5A5A' handleClick={this.backspace}/>
            <Button  num="(" color='#5A5A5A' handleClick={this.displayInput}/>
            <Button  num="C" handleClick={this.clear}/>
            <Button  num=")" handleClick={this.displayInput}/>

        </div>
        
        <div className="row">
          <Button  num="7" handleClick={this.displayInput}/>
          <Button  num="8" handleClick={this.displayInput}/>
          <Button  num="9" handleClick={this.displayInput}/>
          <Button  num="/" handleClick={this.displayInput}  color={buttonColor} />
         </div>
         <div className="row">
          <Button  num="4" handleClick={this.displayInput}/>
          <Button  num="5" handleClick={this.displayInput}/>
          <Button  num="6" handleClick={this.displayInput}/>
          <Button  num="*" handleClick={this.displayInput} color={buttonColor} />
         </div>
         <div className="row">
          <Button  num="1" handleClick={this.displayInput}/>
          <Button  num="2" handleClick={this.displayInput}/>
          <Button  num="3" handleClick={this.displayInput}/>
          <Button  num="-" handleClick={this.displayInput} color={buttonColor} />
         </div>
         <div className="row">
          <Button  num="0" handleClick={this.displayInput}/>
          <Button  num="." handleClick={this.displayInput}/>
          <Button  num="=" handleClick={this.calculate}/>
          <Button  num="+" handleClick={this.displayInput}color={buttonColor} />
         </div>
            
      </div>
    </div>
    )
  }
}

export default App

