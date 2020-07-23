import React from 'react';

class WaitlistSettings extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Waitlist Settings</div>
                    <div className="waitList-description">Let people join a waitlist if tickets sell out or your event reaches capacity</div>
                    <div className="waitList-contents">
                        <div className="w3-row">
                            <div className="w3-col l4">
                                <div className="w3-card waitList-card waitList-padding">
                                    <div className="w3-row">
                                        <div className="w3-col l8 m8 s8 enable-font">Enable Waitlist:</div>
                                        <div className="w3-col l4 m4 s4">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                    <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w3-row enable-top">
                            <div className="w3-col l4">
                                <div className="w3-card waitList-card trigger-padding">
                                    <select className="trigger-option">
                                        <option selected disabled>Waitlist Trigger</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="title-maximum">Maximum Waitlist Size:</div>
                        <div className="w3-row enable-top">
                            <div className="w3-col l4">
                                <div className="w3-card waitList-card waitlist-size-padding">
                                    <div className="text-box">
                                        <textarea />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="title-maximum">Attendee Information To Collect:</div>
                        <div className="w3-row enable-top">
                            <div className="w3-col l4">
                                <div className="w3-card waitList-card waitlist-size-padding">
                                    <label className="container-event">Full Name (Required)
                                        <input type="checkbox" />
                                        <span className="checkMark checkbox-align"/>
                                    </label>

                                    <label className="container-event"> Email Address (Required)
                                        <input type="checkbox" />
                                        <span className="checkMark checkbox-align"/>
                                    </label>

                                    <label className="container-event"> Phone Number
                                        <input type="checkbox" />
                                        <span className="checkMark checkbox-align"/>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="w3-row auto-response-padding">
                            <div className="w3-card waitList-card response-message-padding">
                                <div className="auto-txt">Auto-Response Message</div>

                                <div className="text-box">
                                    <textarea/>
                                </div>
                            </div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-card waitList-card response-message-padding">
                                <div className="auto-txt">Auto-Response Message</div>
                                <div className="text-box">
                                    <textarea/>
                                </div>
                            </div>
                        </div>

                        {/*  Save Button  */}
                        <div className="w3-bar btn-padding">
                            <div className="btn-save">Save</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WaitlistSettings;