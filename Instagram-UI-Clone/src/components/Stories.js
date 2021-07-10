import React, { Component } from 'react'
import './stories.css'
import storyPic from './images/mystory.png'
import add from './images/plus.png'
import story1 from './images/story1.png'
import story2 from './images/story2.png'
import story3 from './images/story3.png'
import story4 from './images/story4.png'
import story5 from './images/story5.png'
class Stories extends Component {
    render() {
        return (
           <React.Fragment>
               <div className="stories d-flex p-1 align-items-center mb-0">
                    <div className="myStory col-3 col-lg-3 p-lg-1 ">
                            <div className="d-flex align-items-center col-10 col-lg-10  pt-1">
                                <img className="myStoryPic" src={storyPic} alt="myStory"></img>
                                <img className="plus" src={add} alt="myStory"></img>
                            </div>
                            <p className="d-flex justify-content-center text-white  mb-0 pt-1">Your Story</p>
                    </div>
            
                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2 otherStory">
                        <img src={story1} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">andrea_...</p>
                    </div>

                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2 otherStory">
                        <img src={story2} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">nick_</p>
                    </div>

                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2 otherStory">
                        <img src={story3} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">Hellana_off..</p>
                    </div>

                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2 otherStory">
                        <img src={story4} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">vaisha08</p>
                    </div>

                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2 otherStory">
                        <img src={story5} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">jerin_off...</p>
                    </div>

                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2  otherStory">
                        <img src={story1} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">andrea_...</p>
                    </div>

                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2  otherStory">
                        <img src={story3} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">Hellana_off..</p>
                    </div>

                    <div className="myStory col-3 col-lg-3 pt-1 px-1 p-lg-2 otherStory">
                        <img src={story4} alt="myStory"></img>
                        <p className="d-flex justify-content-center text-white mb-0">vaisha08</p>
                    </div>
               </div>
           </React.Fragment>
        )
    }
}

export default Stories
