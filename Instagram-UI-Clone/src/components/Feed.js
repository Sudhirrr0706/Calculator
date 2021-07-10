import React, { Component } from 'react'
import './feed.css'
import heart from './images/heart.png'
import logo1 from './images/heartLogo1.png'
 class Feed extends Component {
     state={
        likesImage:`${heart}`,
        likesCount:null,
        commentsCount:null,
        info:"",
        info1:""
     }
  
    onclickHeart=()=>{
        if(this.state.likesImage!==`${logo1}`){
             this.setState({likesImage:`${logo1}`})
             this.setState({likesCount:this.state.likesCount +1})
             this.setState({info:'Like'})
        }
        else{
         this.setState({likesImage:`${heart}`})
         this.setState({likesCount:null})
         this.setState({info:''})
        }
         
     }
     onClickComment=()=>{
        if(this.state.commentsCount!==1 ){
            this.setState({commentsCount:this.state.commentsCount +1})
            this.setState({info1:'Comment'})
        }
        else if(this.state.commentsCount>=0){
            this.setState({commentsCount:null})
            this.setState({info1:''})
        }
     }
   
    render() {
        return (
            <React.Fragment> 
                <div className="feedScreen">
                    <div className="feed-1">
                        <div className=" mb-0 d-flex align-items-center  ps-3 mt-0">
                             <img className="head1 col-2 col-lg-2 px-lg-2 p-1" src={this.props.head} alt="head1"/>
                             <p className="col-3 accname p-lg-0 p-3 d-flex align-items-end px-2 mt-3 text-white">{this.props.AccName}</p>
                             <div className="ms-auto  px-2 ">
                                <img src={this.props.headLogo} alt="logo"/>
                             </div>
                        </div>
                        <img   className="col-12 " src={this.props.src}  alt="feed"/>
                        <div className="footer-logos p-2 d-flex align-items-center mb-0">
                               <img onClick={this.onclickHeart}className="px-2 heartClick" src={this.state.likesImage} alt="heart"/>
                               <img onClick={this.onClickComment} className="px-2 commentClick" src={this.props.comments} alt="comments"/>
                               <img className="px-2" src={this.props.share} alt="share"/>
                               <div className="ms-auto px-2">
                                   <img className="" src={this.props.save} alt="share"/>
                               </div>
                        </div>
                        <div className="ps-3 d-flex flex-wrap">
                            <p className="mb-0 text-white fw-bold pe-1">{this.props.AccName}</p>
                            <p id="caption" className="text-white pe-3">{this.props.Caption} {this.props.emoji}</p>
                        </div>
                        <div className="d-flex ps-3 mb-0 pb-0 ">
                            <p className="text-white ">{this.state.likesCount} {this.state.info}</p>
                            <p className="text-white px-1">{this.state.commentsCount} {this.state.info1}</p>
                        </div>
                        <div className="d-flex accProfiler align-items-center ps-3 mt-0 pt-0">
                            <img className="col-1 col-lg-1 p-lg-1" src={this.props.AccProfoilePic} alt="pic"/>
                            <p className="d-flex align-items-end pt-3 px-1">Add a comment...</p>
                            <div className="d-flex ms-auto  p-2">
                               <img className="px-1" src={this.props.commentsLogo1} alt=""/>
                               <img className="px-1" src={this.props.commentsLogo2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Feed
