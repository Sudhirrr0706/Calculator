import React, { Component } from 'react'
import './suggested.css'
class Suggested extends Component {
    render() {
        return (
           <React.Fragment>
                <div className="col-7 cards m-2 p-1">
                   <div className="d-flex container ">
                        <div className="container pb-0">
                                <img className="suggestionImage d-flex justify-content-center" src={this.props.Acc1} alt=""/>
                                <p className="mb-0 text-white accName">{this.props.ProfileName}</p>
                            </div>
                            <div>
                                <span>X</span>
                            </div>
                   </div>
                        <p className="mutual  d-flex flex-wrap">Followed by {this.props.mutualAcc}</p>
                        <div className="d-flex justify-content-center pb-2">
                             <button className="btn btn-sm btn-primary px-5 ">Follow</button>
                        </div>
                </div>
           </React.Fragment>
        )
    }
}

export default Suggested

