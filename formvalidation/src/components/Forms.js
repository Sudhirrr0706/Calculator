import React, { Component } from 'react'
import ToolTipsPassword from './ToolTipsPassword';
import './forms.css'
import icon from './icons/question-mark.png'
class Forms extends Component {
    constructor(props) {
        super(props);
    this.state={
        mailId: '',
        hidden: true,
        password:'',
        mailError:'',
        passwordError: '',
        mailIncorrect:'',
        passwordIncorrect:''

    }
    this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
}
    onChangeMailHandler=(event)=>{
        this.setState({mailId:event.target.value})
    }

    onChangePasswordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
   toggleShow(){
       this.setState({hidden: !this.state.hidden});
   }
   componentDidMount(){
       if(this.props.password){
        this.setState({ password: this.props.password });
       }
   }
    onClickEvent=(event)=>{
        let mailFormat= new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let passwordFormat = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
        this.setState({mailError:'',mailIncorrect:' ',passwordIncorrect:'',passwordError:''})

    
        if(this.state.mailId===''){
            this.setState({mailError:'Mail id required'})
        }
        else if(!this.state.mailId.match(mailFormat)){
            this.setState({mailIncorrect:'  Incorrect Id format'})
        }
        else if(this.state.password.length===0){
            this.setState({passwordError:'Password required'})
        }
        else if(!this.state.password.match(passwordFormat)){
            this.setState({passwordIncorrect:'Your password looks incorrect format'})
        }
        else{
            alert(`Welcome ${this.state.mailId} `)
        }
      event.preventDefault()
    }

    render() {
        return (
            <React.Fragment>
                <form className="d-flex align-items-center bg-dark ">
                        <div className="col-lg-4 col-12  mx-auto forms p-5">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label text-primary">Email address</label>
                                <input type="text" className="form-control"  value={this.state.mailId} onChange={this.onChangeMailHandler} placeholder="Email id" />
                                <p className="text-danger mb-0 mt-0">{this.state.mailError}</p>
                                <p className="text-danger mb-0 mt-0">{this.state.mailIncorrect}</p>
                                <div id="emailHelp" className="form-text">We'll never share your mail id with anyone</div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex">
                                    <label for="exampleInputPassword1" className="form-label text-primary mx-2">Password</label>
                                    <ToolTipsPassword icon={icon}/>
                                </div>
                                
                                <input type={this.state.hidden ? 'password':'text'} className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChangePasswordHandler}/>
                                <p className="text-danger">{this.state.passwordError}</p>
                                <p className="text-danger">{this.state.passwordIncorrect}</p>
                            </div>
                           
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={this.toggleShow}/>
                                <label className="form-check-label text-primary" for="exampleCheck1" >Show Password</label>
                            </div>
                                <button onClick={this.onClickEvent}  type="submit" className="btn btn-outline-primary  col-12">Submit</button>
                        </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Forms
