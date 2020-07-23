import React from 'react';

class CheckInTicket extends React.Component {
    constructor() {
        super();

        this.state = {
            input_type: '',
            place_holder: 'Enter ticket ID',
        }
    }

    onClickById = (e) => {
        this.setState({
            input_type: 'ticket_id',
            place_holder: 'Enter ticket ID',
        })
    };

    onClickByEmail = (e) => {
        this.setState({
            input_type: 'ticket_email',
            place_holder: 'Enter ticket Email',
        })
    };

    onClickByPhone = (e) => {
        this.setState({
            input_type: 'ticket_phone',
            place_holder: 'Enter ticket Phone',
        })
    };

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Check-in ticket</div>
                    <div className="ticket-contents">
                        <div className="w3-card ticket-card">
                            <div className="ticket-padding">
                                <div className="ticket-card-bg">
                                    <div className="box">
                                    </div>
                                </div>

                                <div className="w3-center ticket-scan">Scan QR</div>
                                <div className="w3-center ticket-or">or</div>

                                <div className="w3-center">
                                    <div className="w3-row w3-bar">
                                        <div id="checkById" className="w3-bar-item"><a className="txt-hover" onClick={this.onClickById}>Checked by ID</a></div>
                                        <div id="checkByEmail" className="w3-bar-item"><a className="txt-hover" onClick={this.onClickByEmail}>Checked by Email</a></div>
                                        <div id="checkByPhone" className="w3-bar-item"><a className="txt-hover" onClick={this.onClickByPhone}>Checked by Phone</a></div>
                                    </div>
                                </div>

                                <div className="w3-center ticket-enter-padding">
                                    <div className="w3-row w3-bar w3-card w3-white">
                                        <div className="w3-bar-item w3-center">
                                            <input className="w3-input" type="text" id={this.state.input_type} placeholder={this.state.place_holder} required/>
                                        </div>

                                        {/* Modal*/}
                                        <div className="w3-bar-item ticket-enter">
                                            <div>
                                                <a className="w3-hover-text-amber"  data-toggle="modal" data-target="#myModal">
                                                    <div className="button w3-text-white">Check</div>
                                                </a>
                                            </div>

                                            <div className="w3-left modal modal-position w3-animate-zoom" id="myModal" role="dialog">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="w3-right modal-header">
                                                            <div className="close" data-dismiss="modal">&times;</div>
                                                        </div>

                                                        <div className="w3-center modal-body">
                                                            <div className="w3-row w3-center">
                                                                <img className="icon-approved" src={require('../../assets/images/company/approved/check.svg')}/>
                                                            </div>
                                                            <div className="w3-row modal-bold-medium-font">Approved</div>
                                                            <div className="w3-row modal-bold-font">#1272350721</div>
                                                            <div className="w3-row modal-bold-small-font">User</div>
                                                            <div className="w3-row modal-small-font">Lorem Ipsum@gmail.com</div>

                                                            <div className="w3-row modal-bold-small-font">Name</div>
                                                            <div className="w3-row modal-small-font">Lorem Ipsum</div>

                                                            <div className="w3-row modal-event-small-font">EVENT</div>
                                                            <div className="w3-row modal-event-small-font">Webtalk Invite Day</div>

                                                            <div className="w3-row modal-bold-small-font">Date</div>
                                                            <div className="w3-row modal-tiny-font">Sun, Mar 1, 2020</div>
                                                            <div className="w3-row modal-tiny-font">12:00 AM - 11:30 PM EET</div>

                                                            <div className="w3-row modal-bold-small-font">Location</div>
                                                            <div className="w3-row modal-tiny-font">London, United Kingdom</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default CheckInTicket;