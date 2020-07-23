import React from 'react';
import { withRouter } from 'react-router-dom';
import SocialShare from "../SocialShare";

class Slider3 extends React.Component {
    render() {
        return (
            <>
                <div className="w3-row w3-animate-left">
                    <div className="w3-col slide-third-width">
                        <div className="event-img4-cover">

                            <div className='w3-display-topright'>
                                <div className="event-item-content">
                                    <div className='item-header'>
                                        <div className='control-btns'>
                                            <div className='control-share-btn'></div>
                                            <div className='control-like-btn'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span className='w3-display-bottomleft txt-width-even4 padding-bg'>
                                <div className="biggest-bold">Biggest 90s 00s disco outdoor festival</div>
                                <div className="small-txt">Thu, 16 Jan From 17:12 to 12:30</div>
                                <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                            </span>
                        </div>
                    </div>

                    <div className="w3-col slide-first-width">
                        <div className="w3-row">
                            <div className="w3-col height-first-half">
                                <div className="event-img1-cover">

                                    <div className='w3-display-topright'>
                                        <div className="event-item-content">
                                            <div className='item-header'>
                                                <div className='control-btns'>
                                                    <div className='control-share-btn'></div>
                                                    <div className='control-like-btn'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <span className='w3-display-bottomleft txt-width-even1 padding-bg'>
                                        <div className="biggest-bold">Biggest 90s 00s disco outdoor festival</div>
                                        <div className="small-txt">Web, 11 Dec From 12:00 to 04:00</div>
                                        <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                                    </span>

                                </div>
                            </div>

                            <div className="w3-col height-second-half">
                                <div className="event-img2-cover">

                                    <div className='w3-display-topright'>
                                        <div className="event-item-content">
                                            <div className='item-header'>
                                                <div className='control-btns'>
                                                    <div className='control-share-btn'></div>
                                                    <div className='control-like-btn'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <span className='w3-display-bottomleft txt-width-even2 padding-bg'>
                                        <div className="biggest-bold">Cyber Expo Ireland 2019</div>
                                        <div className="small-txt">Web, 11 Dec From 12:00 to 04:00</div>
                                        <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w3-col slide-second-width">
                        <div className="event-img3-cover">

                            <div className='w3-display-topright'>
                                <div className="event-item-content">
                                    <div className='item-header'>
                                        <div className='control-btns'>
                                            <div className='control-share-btn'></div>
                                            <div className='control-like-btn'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w3-display-topright social-top-right">
                                <SocialShare/>
                            </div>

                            <span className='w3-display-bottomleft txt-width-even3 padding-bg'>
                                <div className="biggest-bold">Diceys Garden</div>
                                <div className="small-txt">Wed, 11 Dec From 12:00 to 04:00</div>
                                <div className="medium-font-txt">
                                    Our carvery is open Monday-Friday from 12pm - 2.30pm and we offer a $5 hunch for students ($7 regular price).
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Slider3);