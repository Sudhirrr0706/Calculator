import React, { Component } from 'react'
import './screen.css'
import Header from './Header'
import Stories from './Stories'
import Feed from './Feed'
import head1 from './images/story3.png'
import head2 from './images/head2.png'
import head3 from './images/head3.png'
import head4 from './images/head4.png'
import head5 from './images/head5.png'
import head6 from './images/head6.png'
import image1 from './images/feed1.jpg'
import logo from './images/more.png'
import comment from './images/chat.png'
import direct from './images/direct.png'
import savePost from './images/ribbon.png'
import profiler from './images/mystory.png'
import logo1 from './images/heartLogo1.png'
import logo2 from './images/fire.png'
import home from './images/home.png'
import search from './images/loupe.png'
import reels from './images/video.png'
import notification from './images/heartFooter.png'
import feed2 from './images/feed2.jpg'
import feed3 from './images/feed3.jpg'
import feed4 from './images/feed4.jpg'
import feed5 from './images/feed5.jpg'
import feed6 from './images/feed6.jpg'
import New from './New'
import Suggested from './Suggested'
import profile1 from './images/suggestion1.png'
import profile2 from './images/suggestion2.png'
import profile3 from './images/suggestion3.png'
import profile4 from './images/suggestion4.png'
class Screen extends Component {
    state={
        dm:<New />
    }
    render() {
        return (
           <React.Fragment>
                <div className="screenDisplay d-flex justify-content-center align-items-center ">
                    {/* Main Section */}
                    <div className="screen col-lg-3 col-8">

                        {/* Header Section */}
                        <div>
                            <Header />
                        </div>

                        {/* story Section */}
                        <div className="d-flex">
                            <Stories />
                        </div>
                        <hr className="mt-0 mb-0"></hr>
                        
                        {/* Feed Section */}
                        <div className=" FeedSection mt-0">
                            <Feed
                             head={head1} 
                             src={image1}
                              AccName='Hellana_official' 
                              Caption="Don't Hold your Breath"
                              emoji='&#128540;'
                              headLogo={logo} 
                              comments={comment}
                              share={direct}
                              save={savePost}
                              AccProfoilePic={profiler}
                              commentsLogo1={logo1}
                              commentsLogo2={logo2}
                              />

                            <Feed
                             head={head2} //Profiler Images
                             src={feed2} //Feed Images
                              AccName='Merin_Josh09' //Profiler Name
                              Caption=""
                              emoji='&#128525;'
                              headLogo={logo} 
                              comments={comment}
                              share={direct}
                              save={savePost}
                              AccProfoilePic={profiler}
                              commentsLogo1={logo1}
                              commentsLogo2={logo2}
                              />

                            <Feed
                             head={head3} //Profiler Images
                             src={feed3} //Feed Images
                              AccName='Jersi_jhon' //Profiler Name
                              Caption="I'm a simple person with Complicated Mind"
                              emoji='&#129310;'
                              headLogo={logo} 
                              comments={comment}
                              share={direct}
                              save={savePost}
                              AccProfoilePic={profiler}
                              commentsLogo1={logo1}
                              commentsLogo2={logo2}
                              />

                            <div className=" d-flex SuggestionSection container pb-0">
                                <p className="text-white">Suggested for you</p>
                                <p className="ms-auto text-primary">See all</p>
                            </div>
                            <div className="d-flex suggestionCards pt-0 mt-0"> 
                                <Suggested 
                                    Acc1={profile1}
                                    ProfileName='Anderson_07'
                                    mutualAcc='andrea_official,vaisha_08 + 3 more'
                                />

                                <Suggested 
                                    Acc1={profile2}
                                    ProfileName='Reena Rose'
                                    mutualAcc='Hellana_official,Leesa,Reyna + 8 more'
                                />

                                <Suggested 
                                    Acc1={profile3}
                                    ProfileName='Mathew'
                                    mutualAcc='Brdidget,Sova_09,vaisha_08 + 4 more'
                                />

                                <Suggested 
                                    Acc1={profile4}
                                    ProfileName='Jackqueline'
                                    mutualAcc='Brdidget,Sova_09,vaisha_08 + 4 more'
                                />
                            </div>

                            <Feed
                             head={head4} //Profiler Images
                             src={feed4} //Feed Images
                              AccName='_amenda_09' //Profiler Name
                              Caption="Dear BAD-LUCK,Let's Breakup"
                              emoji='&hearts;'
                              headLogo={logo} 
                              comments={comment}
                              share={direct}
                              save={savePost}
                              AccProfoilePic={profiler}
                              commentsLogo1={logo1}
                              commentsLogo2={logo2}
                              />

                            <Feed
                             head={head5} //Profiler Images
                             src={feed5} //Feed Images
                              AccName='cristiano_ronaldo' //Profiler Name
                              Caption=""
                              emoji='&#128519;&#128536;'
                              headLogo={logo} 
                              comments={comment}
                              share={direct}
                              save={savePost}
                              AccProfoilePic={profiler}
                              commentsLogo1={logo1}
                              commentsLogo2={logo2}
                              />

                            <Feed
                             head={head6} //Profiler Images
                             src={feed6} //Feed Images
                              AccName='jenifer_01' //Profiler Name
                              Caption="Sleepy Goose"
                              emoji='&#128517;'
                              headLogo={logo} 
                              comments={comment}
                              share={direct}
                              save={savePost}
                              AccProfoilePic={profiler}
                              commentsLogo1={logo1}
                              commentsLogo2={logo2}
                              />
                              
                        </div>

                        
                        {/* Footer Section */}
                        <div className="d-flex align-items-center justify-content-evenly py-1">
                            <img src={home} alt="footer" />
                            <img src={search} alt="footer" />
                            <img src={reels} alt="footer" />
                            <img onClick={this.state.dm} src={notification} alt="footer" />
                            <img className="profiler col-1 p-lg-1" src={profiler} alt="footer" />
                        </div>
                    </div>
                </div>
                
           </React.Fragment>
        )
    }
}

export default Screen
