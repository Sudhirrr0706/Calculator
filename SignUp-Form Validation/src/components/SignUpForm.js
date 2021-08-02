import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import React, { Component } from 'react'
import './signUp.css'
import { Animated } from 'react-animated-css';
class SignUpForm extends Component {
    state={

        userName:'',
        firstName:'',
        lastName:'',
        mailId:'',
        password:'',
        confirmPassword:'',
        userNameError:'',
        FirstNameError:'',
        LastNameError:'',
        mailIdError:'',
        passwordError:'',
        passwordMissMatch:'',
        passwordType:'password',
        showModal:false,
        shake1:false,
        shake2:false,
        shake3:false,
        shake4:false,
        shake5:false,
        shake6:false,
        shake7:false,
    }

//Form Handling

    userName=(event)=>{

       this.setState ({userName:event.target.value})

    }

    firstName=(event)=>{
        
        this.setState ({firstName:event.target.value})

    }

    lastName=(event)=>{

        this.setState ({lastName:event.target.value})

    }
    
    mailId=(event)=>{

        this.setState ({mailId:event.target.value})

    }

    password=(event)=>{

        this.setState ({password:event.target.value})

    }

    confirmPassword=(event)=>{

        this.setState ({confirmPassword:event.target.value})

    }

//Toggle password
    showPassword=()=>{

        if(this.state.passwordType==='password'){
            this.setState({passwordType:'text'})
        }
        else{
            this.setState({passwordType:'password'})
        }
        
    }

//Submit Button
    onClickSubmit=(event)=>{

        let mailFormat= new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let passwordFormat = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
        let userNameFormat = new RegExp(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/)

        this.setState({
            
            userNameError:'',
            FirstNameError:'',
            LastNameError:'',
            mailIdError:'',
            passwordError:'',
            passwordMissMatch:'',
            shake1:false,
            shake2:false,
            shake3:false,
            shake4:false,
            shake5:false,
            shake6:false,
            shake7:false,

        })

        if(this.state.userName===""){
            this.setState({userNameError:'User Name required',shake1:true})
        }
        else if(!this.state.userName.match(userNameFormat)){
            this.setState({userNameError:'Invalid user name',shake1:true})
        }
     
        else if(this.state.firstName===""){
            this.setState({FirstNameError:'Field required',shake2:true})
        }
        else if(this.state.lastName===""){
            this.setState({LastNameError:'Field required',shake3:true})
        }
        else if(this.state.mailId===""){
            this.setState({mailIdError:'Mail id required',shake4:true})
        }
        else if(!this.state.mailId.match(mailFormat)){
            this.setState({mailIdError:'Incorrect mail id format',shake4:true})
        }
        else if(this.state.password===""){
            this.setState({passwordError:"Password required",shake6:true})
        }
        else if(!this.state.password.match(passwordFormat)){
            this.setState({passwordError:"Incorrect format",shake6:true})
        }
        else if(this.state.confirmPassword==="" || this.state.password!== this.state.confirmPassword){
            this.setState({passwordMissMatch:'Password miss match',shake7:true})
        }
        else{
            this.setState({showModal:true})
        }
    event.preventDefault()

    }
// Modal on Hided 

    onModalHide=()=>{

        this.setState({showModal:false})
        
    }

//Reset Button
    onClickReset=()=>{

        this.setState({
        userName:'',
        firstName:'',
        lastName:'',
        mailId:'',
        password:'',
        confirmPassword:'',
        userNameError:'',
        FirstNameError:'',
        LastNameError:'',
        mailIdError:'',
        passwordError:'',
        passwordMissMatch:'',
        shake:false,
        shake1:false,
        shake2:false,
        shake3:false,
        shake4:false,
        shake5:false,
        shake6:false,
        shake7:false
        
    })

    }

    render() {
        return (
            <React.Fragment>
                <div className="p-lg-4 p-0  mt-lg-4 mt-3">
                    <Animated animationIn='fadeInLeft' animationInDuration={1500}>
                        <form className="col-lg-4 col-12 form-floating  p-4 mx-auto formSection">
                            <div className="p-3 head">
                                <h3 className="text-white">Create account</h3>
                                <p>Already have an account? <a href="#floatingInput"> Sign-in</a></p>
                            </div>
                            <div className=" mx-auto">

                                <div class="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.userName} onChange={this.userName}/>
                                    <label for="floatingInput" className="">User Name</label>
                                </div>
                                <Animated animationIn='shake' isVisible={this.state.shake1}>
                                    <p className="text-danger">{this.state.userNameError}</p>
                                </Animated>
                                

                                <div class="mb-3 d-flex justify-content-between">
                                <div className="form-floating col-5">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Jhon" value={this.state.firstName} onChange={this.firstName} />
                                        <label for="floatingInput" className="">First Name</label>
                                        <Animated animationIn='shake' isVisible={this.state.shake2}>
                                            <p className="text-danger">{this.state.FirstNameError}</p>
                                        </Animated>
                                        
                                </div>
                                
                                <div className="form-floating  col-5">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Smith" value={this.state.lastName} onChange={this.lastName}/>
                                        <label for="floatingInput" className="">last Name</label>
                                        <Animated animationIn='shake' isVisible={this.state.shake3}>
                                            <p className="text-danger">{this.state.LastNameError}</p>
                                        </Animated>
                                </div>
                                </div>
                                

                                <div class="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.mailId} onChange={this.mailId}/>
                                    <label for="floatingInput" className="">Email address</label>
                                </div>
                                <Animated animationIn='shake' isVisible={this.state.shake4}>
                                    <p className="text-danger">{this.state.mailIdError}</p>
                                </Animated>

                                <div class="form-floating  mb-3">
                                    <input type={this.state.passwordType} className="form-control" id="floatingPassword" placeholder="Password" value={this.state.password} onChange={this.password}/>
                                    <label for="floatingPassword" className="">Password</label>
                                </div>
                                <Animated animationIn='shake' isVisible={this.state.shake6}>
                                    <p className="text-danger">{this.state.passwordError}</p>
                                </Animated>

                                <div class="form-floating mb-3">
                                    <input  type={this.state.passwordType} className="form-control" id="floatingPassword" placeholder="Password" value={this.state.confirmPassword} onChange={this.confirmPassword}/>
                                    <label for="floatingPassword" className="">Confirm Password</label>
                                </div>
                                <Animated animationIn='shake' isVisible={this.state.shake7}>
                                     <p className="text-danger">{this.state.passwordMissMatch}</p>
                                </Animated>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={this.showPassword}/>
                                    <label className="form-check-label text-primary" for="exampleCheck1" >Show Password</label>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button variant="outline-primary" className="px-5 mx-1" type="submit" onClick={this.onClickSubmit}>
                                        Sign Up
                                    </Button>
                                    <Button  variant="outline-primary" className="px-5 mx-1"  onClick={this.onClickReset}>
                                        Reset
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </Animated>
                    
                </div>

                <div className="modal">
                    <Modal show={this.state.showModal} onHide={this.onModalHide}>

                        <Modal.Header closeButton>
                            <Modal.Title className="text-primary">Successfully Registered!</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p className="text-secondary">{this.state.firstName} {this.state.lastName} ,Kindly check your details</p>
                            <p>User Name: <p className="text-primary"> {this.state.userName}</p></p>
                            <p>Mail id: <p className="text-primary"> {this.state.mailId}</p></p>
                        </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.onModalHide}>
                                    Close
                                </Button>
                            </Modal.Footer>

                    </Modal>
                </div>


            </React.Fragment>
        )
    }
}

export default SignUpForm
