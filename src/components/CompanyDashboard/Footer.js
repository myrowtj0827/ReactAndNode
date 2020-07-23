import React from 'react';
import { withRouter } from 'react-router-dom';

class FooterCompany extends React.Component {
    render() {
        return (
            <div className="footer-company">
                <div className="footer-link-company">
                    <div className="w3-row footer-link-padding-1">
                        <div className="w3-col l4 m12">
                            <img className="footer-logo" src={require('../../assets/images/company/footer/footer-logo.png')} />
                        </div>

                        <div className="w3-col l4 m6 w3-bar google-app-top">
                            <div className="icon-align-left">
                                <div className="w3-bar-item">
                                    <img className="footer-google-pay" src={require('../../assets/images/company/footer/google-play.png')} />
                                </div>
                                <div className="w3-bar-item">
                                    <img className="footer-app-store" src={require('../../assets/images/company/footer/app-store.png')} />
                                </div>
                            </div>
                        </div>

                        <div className="w3-col l4 m6 w3-bar google-app-top">
                            <div className="icon-align-right">
                                <div className="w3-bar-item">
                                    <a href="mailto:info@worldsty.com" target="blank">
                                        <img className="icon" src={require('../../assets/images/company/footer/email.png')} />
                                    </a>
                                </div>

                                <div className="w3-bar-item">
                                    <a href="https://facebook.com" target="blank">
                                        <img className="icon" src={require('../../assets/images/company/footer/fase-book.png')} />
                                    </a>
                                </div>

                                <div className="w3-bar-item">
                                    <a href="https://www.linkedin.com/company/Glosfy" target="blank">
                                        <img className="icon" src={require('../../assets/images/company/footer/linkedin.png')} />
                                    </a>
                                </div>

                                <div className="w3-bar-item">
                                    <a href="https://instagram.com" target="blank">
                                        <img className="icon" src={require('../../assets/images/company/footer/instagram.png')} />
                                    </a>
                                </div>

                                <div className="w3-bar-item">
                                    <a href="https://twitter.com/Glosfyapp" target="blank">
                                        <img className="icon" src={require('../../assets/images/company/footer/twitter.png')} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-worldSty">
                    <div className="w3-row-padding footer-link-padding">
                        <div className="footer-title">@2020 Glosfy</div>

                        <div>
                            <div className="footer-title">
                                <a className="w3-hover-text-orange footer-btn">About</a>
                                <a className="w3-hover-text-orange footer-btn">Blog</a>
                                <a className="w3-hover-text-orange footer-btn">Investors</a>
                                <a className="w3-hover-text-orange footer-btn">Security</a>
                            </div>
                            <div className="footer-title">
                                <a className="w3-hover-text-orange footer-btn">Careers</a>
                                <a className="w3-hover-text-orange footer-btn">Cookies</a>
                                <a className="w3-hover-text-orange footer-btn">Privacy</a>
                                <a className="w3-hover-text-orange footer-btn">Terms</a>
                            </div>
                        </div>

                        <div className="footer-title">
                            <a className="w3-dropdown-hover w3-border-black dropUp">
                                <a className="dropBtn">
                                    <img className="icon" src={require('../../assets/images/company/footer/ico.png')} />
                                    <a className="w3-hover-text-orange language-dropdown">English</a>
                                    <span className="main-menu-arrow" aria-hidden="true">▼</span>
                                </a>

                                <a className="w3-dropdown-content w3-bar-block dropdown-padding dropUp-content">
                                    <a href="#" className="w3-bar-item w3-text-black w3-blue">
                                        <img className="icon" src={require('../../assets/images/company/footer/ico.png')} />
                                        <span className="w3-hover-text-aqua language-dropdown" >English</span>
                                    </a>
                                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Spanish</a>
                                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Dutch</a>
                                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Italian</a>
                                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">French</a>
                                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Portuguese</a>
                                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Russian</a>
                                </a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FooterCompany);