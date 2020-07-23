import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { QRCode } from "react-qr-svg";

const mapStateToProps = state => ({
    ...state.articleList,
    currentUser: state.common.currentUser,
    profile: state.profile
});

const mapDispatchToProps = dispatch => ({

});

class Notification extends React.Component {

  render() {

    return (
        <div className="tickets-container">

            <div className="ticket-title">My tickets</div>
            <div className="w3-row">
                <div className="ticket-cart-padding">
                    <div className="w3-btn ticket-button-red w3-display-left">Ticket 1 of 3</div>

                    <div className="w3-row txt-style justify-middle-txt">
                        <div>
                            <div className="w3-row w3-text-white">Event</div>
                            <div className="w3-row big-txt-font">Biggest 90s 00s disco outdoor festival</div>
                        </div>
                    </div>
                </div>

                <div className="ticket-description">
                    <div className="w3-row">
                        <div className="w3-col l6 m6 s12 description-center">
                            <div className="w3-row txt-bold">Name </div>

                            <div className="w3-row txt-bold large-font"> Lorem lpsum </div>

                            <div className="w3-row txt-bold"> Date </div>

                            <div className="w3-row date-font">
                                <p>Sun, Mar 1, 2020</p>
                                <p>12:00 AM - 11:30 PM EET</p>
                            </div>

                            <div className="w3-row txt-bold location-top">Location</div>

                            <div className="w3-row date-font">London, United Kingdom</div>
                        </div>

                        <div className="w3-col l6 m6 s12 w3-center qr-code-top">
                            <div className="w3-row">
                                <QRCode
                                    bgColor="#FFFFFF"
                                    fgColor="#000000"
                                    level="Q"
                                    style={{ width: 190 }}
                                    value={ 'https://worldsty.com/purchase/' }
                                />
                            </div>

                            <div className="w3-row download-link">
                                <div className="justify-middle-txt">
                                    <div className="txt-bold medium-font">#1272350721</div>
                                    <img className="icon-size" src={require('../../assets/images/share.png')} ></img>
                                    <img className="icon-size" src={require('../../assets/images/download.png')} ></img>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="w3-row">
                <div className="ticket-cart-padding">
                    <div className="w3-btn ticket-button-red w3-display-left">Ticket 2 of 3</div>

                    <div className="w3-row txt-style justify-middle-txt">
                        <div>
                            <div className="w3-row w3-text-white">Event</div>
                            <div className="w3-row big-txt-font">Biggest 90s 00s disco outdoor festival</div>
                        </div>
                    </div>
                </div>

                <div className="ticket-description">
                    <div className="w3-row">
                        <div className="w3-col l6 m6 s12 description-center">
                            <div className="w3-row txt-bold">Name </div>

                            <div className="w3-row txt-bold large-font"> Lorem lpsum </div>

                            <div className="w3-row txt-bold"> Date </div>

                            <div className="w3-row date-font">
                                <p>Sun, Mar 1, 2020</p>
                                <p>12:00 AM - 11:30 PM EET</p>
                            </div>

                            <div className="w3-row txt-bold location-top">Location</div>

                            <div className="w3-row date-font">London, United Kingdom</div>
                        </div>

                        <div className="w3-col l6 m6 s12 w3-center qr-code-top">
                            <div className="w3-row">
                                <QRCode
                                    bgColor="#FFFFFF"
                                    fgColor="#000000"
                                    level="Q"
                                    style={{ width: 190 }}
                                    value={ 'https://worldsty.com/purchase/' }
                                />
                            </div>

                            <div className="w3-row download-link">
                                <div className="justify-middle-txt">
                                    <div className="txt-bold medium-font">#1272350721</div>
                                    <img className="icon-size" src={require('../../assets/images/share.png')} ></img>
                                    <img className="icon-size" src={require('../../assets/images/download.png')} ></img>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="w3-row">
                <div className="ticket-cart-padding">
                    <div className="w3-btn ticket-button-red w3-display-left">Ticket 3 of 3</div>

                    <div className="w3-row txt-style justify-middle-txt">
                        <div>
                            <div className="w3-row w3-text-white">Event</div>
                            <div className="w3-row big-txt-font">Biggest 90s 00s disco outdoor festival</div>
                        </div>
                    </div>
                </div>

                <div className="ticket-description">
                    <div className="w3-row">
                        <div className="w3-col l6 m6 s12 description-center">
                            <div className="w3-row txt-bold">Name </div>

                            <div className="w3-row txt-bold large-font"> Lorem lpsum </div>

                            <div className="w3-row txt-bold"> Date </div>

                            <div className="w3-row date-font">
                                <p>Sun, Mar 1, 2020</p>
                                <p>12:00 AM - 11:30 PM EET</p>
                            </div>

                            <div className="w3-row txt-bold location-top">Location</div>

                            <div className="w3-row date-font">London, United Kingdom</div>
                        </div>

                        <div className="w3-col l6 m6 s12 w3-center qr-code-top">
                            <div className="w3-row">
                                <QRCode
                                    bgColor="#FFFFFF"
                                    fgColor="#000000"
                                    level="Q"
                                    style={{ width: 190 }}
                                    value={ 'https://worldsty.com/purchase/' }
                                />
                            </div>

                            <div className="w3-row download-link">
                                <div className="justify-middle-txt">
                                    <div className="txt-bold medium-font">#1272350721</div>
                                    <img className="icon-size" src={require('../../assets/images/share.png')} ></img>
                                    <img className="icon-size" src={require('../../assets/images/download.png')} ></img>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
export { Notification, mapStateToProps };
