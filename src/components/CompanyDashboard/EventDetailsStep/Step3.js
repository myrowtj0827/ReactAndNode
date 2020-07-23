/**
 * Step 3 Page
 */

import React from "react";

class Step3 extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="create-ticket-title">Create Tickets</div>

                <div className="create-ticket-step3-contents">
                    <div className="w3-row">
                        <div className="w3-col l6 m12 create-padding-right">
                            <div className="w3-card eventDetails-card create-ticket-padding">
                                <select className="create-option">
                                    <option selected disabled>In which country will you be paid?</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        <div className="w3-col l6 m12 create-padding-left">
                            <div className="w3-card eventDetails-card create-ticket-padding">
                                <select className="create-option">
                                    <option selected disabled>Currency</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="w3-row w3-bar add-ticket">
                        <div className="w3-bar-item">
                            Add Free Ticket<img className="icon-add-paid" src={require('../../../assets/images/company/edit/plus1.png')}/>
                        </div>

                        <div className="w3-bar-item">
                            Add Paid Ticket<img className="icon-add-paid" src={require('../../../assets/images/company/edit/plus1.png')}/>
                        </div>
                    </div>

                    <div className="w3-row">
                        <div className="w3-col l9 m12">
                            <div className="w3-row">
                                <div className="w3-col l6 m12 create-padding-right">
                                    <div className="w3-card eventDetails-card create-ticket-padding">
                                        <input className="w3-input create-option-left" type="text" placeholder="Ticket name *" required/>
                                    </div>
                                </div>
                                <div className="w3-col l6 m12 create-padding-right">
                                    <div className="w3-card eventDetails-card create-ticket-padding">
                                        <input className="w3-input create-option-left" type="text" placeholder="Quantity available *" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w3-col l2">
                            <div className="w3-card eventDetails-card create-ticket-padding">
                                <input className="w3-input create-option-left" type="text" placeholder="free" required/>
                            </div>
                        </div>
                        <div className="w3-col l1">
                            <div className="w3-row">
                                <div className="w3-col l6 m6 s6">
                                    <img className="icon-edit-paid" src={require('../../../assets/images/company/employee/edit.svg')}/>
                                </div>
                                <div className="w3-col l6 m6 s6">
                                    <img className="icon-delete-paid" src={require('../../../assets/images/company/edit/minus.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w3-row ticket-name-top-padding">
                        <div className="w3-card eventDetails-card create-ticket-padding">
                            <div className="settings-txt">Settings</div>

                            <div className="ticket-description">Ticket description</div>
                            <div className="text-box">
                                <textarea/>
                            </div>

                            <label className="container-event">Show ticket description on event page
                                <input type="checkbox" />
                                <span className="checkMark"/>
                            </label>

                            <div className="w3-row ticket-start-finish">
                                <div className="w3-row">
                                    <div className="ticket-sales-start">
                                        Ticket sales start
                                    </div>

                                    <div className="w3-col l8">
                                        <div className="w3-col l6">
                                            <input type="date" id="start" className="text-box-ticket-date start-finish-time" value="2020-04-03"/>
                                        </div>
                                        <div className="w3-col l6">
                                            <input type="time" id="time-start" className="text-box-ticket-date start-finish-time" value="13:30"/>
                                        </div>
                                    </div>
                                    <div className="w3-col l4 channel-padding">

                                    </div>
                                </div>

                                <div className="w3-row">
                                    <div className="ticket-sales-start">
                                        <div className="w3-bar">
                                            <div className="w3-bar-item w3-left">Ticket sales end</div>
                                            <div className="w3-bar-item w3-right">Tickets allowed per order</div>
                                        </div>
                                    </div>

                                    <div className="w3-col l8">
                                        <div className="w3-col l6">
                                            <input type="date" id="finish" className="text-box-ticket-date start-finish-time" value="2020-04-03"/>
                                        </div>
                                        <div className="w3-col l6">
                                            <input type="time" id="time-finish" className="text-box-ticket-date start-finish-time" value="13:30"/>
                                        </div>
                                    </div>
                                    <div className="w3-col l4 channel-padding">
                                        <div className="sales-text-box">
                                            <div className="w3-row">
                                                <div className="w3-col l6">
                                                    <div className="w3-row text-box-half start-finish-time">Min</div>
                                                </div>
                                                <div className="w3-col l6">
                                                    <div className="w3-row text-box-half start-finish-time">Max</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="w3-center">
                                <img className="check-up-icon" src={require('../../../assets/images/company/edit/check-up.svg')}/>
                            </div>
                        </div>
                    </div>

                    {/*  Ticket name & Quantity available  */}
                    <div className="w3-row ticket-name-top-padding">
                        <div className="w3-col l9 m12">
                            <div className="w3-row">
                                <div className="w3-col l6 m12 create-padding-right">
                                    <div className="w3-card eventDetails-card create-ticket-padding">
                                        <input className="w3-input create-option-left" type="text" placeholder="Ticket name *" required/>
                                    </div>
                                </div>
                                <div className="w3-col l6 m12 create-padding-right">
                                    <div className="w3-card eventDetails-card create-ticket-padding">
                                        <input className="w3-input create-option-left" type="text" placeholder="Quantity available *" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w3-col l2">
                            <div className="w3-card eventDetails-card create-ticket-padding">
                                <input className="w3-input create-option-left" type="text" placeholder="$ 100" required/>
                            </div>
                        </div>
                        <div className="w3-col l1">
                            <div className="w3-row">
                                <div className="w3-col l6 m6 s6">
                                    <img className="icon-edit-paid" src={require('../../../assets/images/company/employee/edit.svg')}/>
                                </div>
                                <div className="w3-col l6 m6 s6">
                                    <img className="icon-delete-paid" src={require('../../../assets/images/company/edit/minus.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="icon-top" ></div>
                </div>
            </>
        )
    }

}

export default Step3;