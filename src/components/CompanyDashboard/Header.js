import React from 'react';
import {Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
const mapStateToProps = state => ({
    ...state.article,
    currentUser: state.common.currentUser
});
const mapDispatchToProps = dispatch => ({
    onLoad: (payload, state) =>
        dispatch(),
});
class HeaderCompany extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="header-company">
                <div className="w3-bar header-navBar">
                    <div className="w3-bar-item w3-left">
                        <Link to="/">
                            <a href="#"><img className="header-logo" src={require('../../assets/images/company/header/header-logo.png')} alt=""/></a>
                        </Link>
                    </div>
                    <div className="header-btn">
                        <div className="w3-bar-item w3-right">
                            <div className="w3-row">
                                <div className="w3-half"><img className="img-top" src={require('../../assets/images/company/header/header-account.png')} alt=""/></div>
                                <div className="w3-half header-user-left"><img src={require('../../assets/images/company/header/user-rectangle.svg')} alt=""/></div>
                            </div>
                        </div>
                        
                        <div className="w3-bar-item w3-hover-text-indigo w3-right w3-dropdown-hover w3-border-black">
                            <div>{this.props.currentUser && this.props.currentUser.companyName ? this.props.currentUser.companyName : 'Company'}</div>

                            <div className="w3-dropdown-content w3-bar-block dropdown-bg">
                                <p className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">
                                    <Link to="/companies/manageMyEvents">My events</Link>
                                </p>
                                <p className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">
                                    <Link to="/companies/edit">Create Event</Link>
                                </p>
                                <p className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">
                                    <Link to="/companies/companySetting">Settings</Link>
                                </p>
                                <a className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Pricing</a>
                                <a className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">How it works</a>
                                <a className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua" onClick={this.props.onClickLogout}>Logout</a>
                            </div>
                        </div>

                        <div className="w3-bar-item w3-hover-text-indigo w3-right">Help</div>
                    </div>

                    <div className="w3-bar-item w3-dropdown-hover w3-border-black w3-right menu-padding">
                        {/*
                        <div>
                            <img className="menubar" src={require('../../assets/images/company/header/menu.svg')} alt=""/>
                        </div>
                        <div className="w3-dropdown-content w3-bar-block dropdown-padding-header">
                            <a href="#" className="w3-bar-item w3-text-black w3-hover-text-aqua w3-hover-blue-grey">Help</a>
                            <a href="#" className="w3-bar-item w3-text-black w3-hover-text-aqua w3-hover-blue-grey">Company</a>
                            <a href="#" className="w3-bar-item w3-text-black w3-hover-text-aqua w3-hover-blue-grey">Sing in
                            </a>
                        </div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderCompany));