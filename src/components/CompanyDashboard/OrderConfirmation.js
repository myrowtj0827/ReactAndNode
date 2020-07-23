import React from 'react';

class OrderConfirmation extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Order Confirmation</div>

                    <div className="orderConfirmation-contents">

                        {/*  Attendee Information  */}
                        <div>
                            <div className="webPage-title">Customize Webpage</div>

                            <div>
                                <div className="w3-card orderConfirmation-card orderConfirmation-padding">
                                    After registering for your event, attendees will see an onscreen message until they navigate away from the page.
                                    Add special instructions or other useful information here,
                                    but also add important information in the Customize Email section so the attendee can access it later.
                                </div>
                            </div>

                            {/*  Text Editor Message */}
                            <div>
                                <div className="w3-row message-card-top">
                                    <div className="w3-card orderConfirmation-card">
                                        <div className="massage-padding">Message For Order Confirmation Page (No Html Tags Allowed)</div>

                                        <div className="txt-editor-padding">
                                            <div className="text-box">
                                                <textarea/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  Text Editor Email */}
                            <div className="email-title">Customize Email</div>
                            <div>
                                <div className="w3-row">
                                    <div className="w3-card orderConfirmation-card">
                                        <div className="orderConfirmation-padding">
                                            Your attendees will also receive an email after registration, confirming their in order.
                                            Add important instructions or other useful information here so attendees can access it at any time.
                                        </div>

                                        <div className="email-input-padding">
                                            <input className="w3-input" type="text" placeholder="Default 'Reply-To' Email Address" required/>
                                        </div>

                                        <div className="pdf-padding">
                                            Message For Email And Printable PDF (If included)
                                        </div>

                                        <div className="txt-editor-padding">
                                            <div className="text-box">
                                                <textarea/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  Additional Settings */}
                            <div>
                                <div className="email-title">Additional Settings</div>
                                <div className="w3-card orderConfirmation-card">
                                    <div className="additional-settings-padding">
                                        <select className="attendee-option">
                                            <option selected disabled>Configure whether attendees should receive a printable PDF when they register.</option>
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

                            {/*  Printable Tickets  */}
                            <div>
                                <div className="printable-tickets">Printable Tickets</div>

                                <div className="w3-row">
                                    <div className="w3-col l6">
                                        <div className="w3-card orderConfirmation-card">
                                            <div className="additional-settings-padding printable-height">
                                                <label className="container-event">Include printable tickets in all orders
                                                    <input type="checkbox" />
                                                    <span className="checkMark"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w3-col l6">
                                        <div className="btn-padding">
                                            <div className="btn-save">Save</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default OrderConfirmation;