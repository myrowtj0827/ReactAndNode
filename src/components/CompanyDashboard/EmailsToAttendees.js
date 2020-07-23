import React from 'react';

class EmailsToAttendees extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="w3-row">
                        <div className="w3-col l8 w3-left">
                            <div className="employees-title">Email to Attendees</div>
                            <div className="emails-description">Schedule and send emails to registered attendees with event reminders or details</div>
                        </div>
                        <div className="w3-rest w3-right">
                            <div className="w3-bar w3-center create-new-email ">
                                <div className="btn-save">Create new Email</div>
                            </div>
                        </div>
                    </div>

                    <div className="emails-contents">
                        {/*  Name Input  */}
                        <div className="w3-col search-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card emails-card emails-padding">
                                    <input className="w3-input" type="text" placeholder="Name" required/>
                                </div>
                            </div>
                        </div>

                        {/*  Reply-To Email Input  */}
                        <div className="w3-col search-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card emails-card emails-padding">
                                    <input className="w3-input" type="text" placeholder="Reply-To Email" required/>
                                </div>
                            </div>
                        </div>

                        {/*  To Option  */}
                        <div className="w3-row card-padding">
                            <div className="w3-card emails-card emails-padding">
                                <select className="emails-option">
                                    <option selected disabled>To</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        {/*  Subject Input  */}
                        <div className="w3-col search-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card emails-card emails-padding">
                                    <input className="w3-input" type="text" placeholder="Subject" required/>
                                </div>
                            </div>
                        </div>

                        {/*  Message  */}
                        <div className="w3-row add-padding">
                            <div className="w3-card emails-card emails-padding">
                                <div className="auto-txt">Message</div>

                                <div className="text-box">
                                    <textarea/>
                                </div>
                            </div>
                        </div>

                        {/*  Send Email now Option  */}
                        <div className="w3-row card-padding">
                            <div className="w3-card emails-card emails-padding">
                                <select className="emails-option">
                                    <option selected disabled>Send Email now</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        {/*  Time Box  */}
                        <div className="w3-row">
                            <div className="w3-col l4 time-right-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card emails-card emails-padding">
                                        <input type="date" id="start" className="text-box-ticket-date start-finish-time" value="2020-04-03"/>
                                    </div>
                                </div>
                            </div>

                            <div className="w3-col l4 time-right-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card emails-card emails-padding">
                                        <input type="time" id="time-start" className="text-box-ticket-date start-finish-time" value="19:30"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Save & Cancel Button  */}
                        <div className="w3-bar w3-center btn-padding">
                            <div className="btn-save">Save</div>
                            <div className="btn-save">Cancel</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EmailsToAttendees;