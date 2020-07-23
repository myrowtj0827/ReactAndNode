/**
 * Step 4 Page
 */

import React from "react";

class Step4 extends React.Component {
    /*constructor() {
        super();
    }*/

    render() {
        return (
            <>
                <div className="create-ticket-step4-contents">
                    <div>
                        <div className="refund-title">Refund policy</div>
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <select className="sales-channel">
                                    <option selected disabled>No refunds at any time.</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>
                        <div className="refund-small-font">
                            Once your event is published, a refund policy can not be changed or added. <a className="refund-color">Learn More</a>
                        </div>
                    </div>

                    <div className="additional-settings">
                        Additional Settings
                    </div>

                    {/* Listing Privacy - 1 */}
                    <div>
                        <div className="refund-title">Listing Privacy</div>
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <select className="sales-channel">
                                    <option selected disabled>Private page: Accessible only by people you specify.</option>
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

                    {/* Listing Privacy CheckBox */}
                    <div className="empty-title-padding">
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <label className="container-event">Turn attendees into your biggest promoters by letting them share your event on Facebook, Twitter, and LinkedIn
                                    <input type="checkbox" />
                                    <span className="checkMark" />
                                </label>

                                <label className="container-event">Make your event invitation - only (guests must receive an Glosfy invitation to attend)
                                    <input type="checkbox" />
                                    <span className="checkMark" />
                                </label>

                                <label className="container-event">Require a password to view the event page:
                                    <input type="checkbox" />
                                    <span className="checkMark" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Enter password */}
                    <div className="empty-half-title-padding">
                        <div className="w3-card eventDetails-card">
                            <div className="enter-password">
                                <input className="w3-input" type="text" placeholder="Enter password" required />
                            </div>
                        </div>
                    </div>

                    {/* Listing Privacy - 2 */}
                    <div>
                        <div className="refund-title">Listing Privacy</div>
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <label className="container-event">Show ticket description on event page
                                    <input type="checkbox" />
                                    <span className="checkMark" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="icon-top" ></div>
                </div>
            </>
        )
    }

}

export default Step4;