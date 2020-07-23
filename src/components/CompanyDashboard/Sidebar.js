import React from 'react';
import {withRouter} from "react-router-dom";

class SidebarCompany extends React.Component {

    render() {
        return (
            <div className="w3-sidebar w3-bar-block sidebar-company">
                <div className="edit-check">
                    <div className="w3-bar-item w3-hover-black check-in-ticket-edit">
                        <a href="/companies/checkInTicket">Check-in ticket</a>
                    </div>
                </div>
                <div className="edit-check">
                    <div className="w3-bar-item w3-hover-black check-in-ticket-edit">
                        <a href="/companies/edit">Edit</a>
                    </div>
                </div>
                <div className="w3-bar-item w3-hover-black check-in-ticket-edit">
                    <a href="/companies/dashboard">Dashboard</a>
                </div>

                <div className="w3-bar-item w3-hover-black item-padding">
                    <a href="/companies/eventDashboard">
                        <img className="icon-padding" src={require('../../assets/images/company/sidebar/event-dashboard.svg')}/>
                        Event Dashboard
                    </a>
                </div>

                <div className="w3-bar-item w3-hover-black item-padding">
                    <a href="/companies/calendar">
                        <img className="icon-padding" src={require('../../assets/images/company/sidebar/calendar.svg')}/>
                        Calendar
                    </a>
                </div>

                <div className="w3-bar-item w3-hover-black item-padding">
                    <a href="/companies/manageMyEvents">
                        <img className="icon-padding" src={require('../../assets/images/company/sidebar/manage-my-events.png')}/>
                        Manage my events
                    </a>
                </div>

                <div className="w3-bar-item w3-hover-black item-padding">
                    <a href="/companies/paymentsPayouts">
                        <img className="icon-padding" src={require('../../assets/images/company/sidebar/setPaymentPayouts.svg')}/>
                        Set Payments & Payouts
                    </a>
                </div>

                <div className="w3-bar-item w3-hover-black item-padding" data-toggle="collapse" data-target="#Options">
                    <img className="icon-padding" src={require('../../assets/images/company/sidebar/order-options.png')}/>
                    Order Options
                    <a><i className="caret-padding w3-right fa fa-caret-down"></i></a>
                    <a><i className="caret-padding w3-right fa fa-caret-up hide"></i></a>
                </div>
                <span id="Options" className="collapse">
                    <div className="menu-title">
                        <a href="/companies/orderForm">Order Form</a>
                    </div>
                    <div className="menu-title">
                        <a href="/companies/orderConfirmation">Order Confirmation</a>
                    </div>
                    <div className="menu-title">
                        <a href="/companies/eventTypeLanguage">Event Type & Language</a>
                    </div>
                    <div className="menu-title">
                        <a href="/companies/registrationTransfers">Registration Transfers</a>
                    </div>
                    <div className="menu-title">
                        <a href="/companies/waitlistSettings">Waitlist Settings</a>
                    </div>
                </span>

                <div className="w3-bar-item w3-hover-black item-padding" data-toggle="collapse" data-target="#InvitePromote">
                    <img className="icon-padding" src={require('../../assets/images/company/sidebar/invite-promote.png')} alt=""/>
                    Invite & Promote
                    <a><i className="caret-padding w3-right fa fa-caret-down"></i></a>
                    <a><i className="caret-padding w3-right fa fa-caret-up hide"></i></a>
                </div>
                <span id="InvitePromote" className="collapse">
                    <div className="menu-title">
                        <a href="/companies/discount">Discount</a>
                    </div>
                    <div className="menu-title">
                        <a href="/companies/trackingLinks">Tracking Links</a>
                    </div>
                </span>

                <div className="w3-bar-item w3-hover-black item-padding" data-toggle="collapse" data-target="#Analyze">
                    <img className="icon-padding" src={require('../../assets/images/company/sidebar/analyze.png')}/>
                    Analyze
                    <a><i className="caret-padding w3-right fa fa-caret-down"></i></a>
                    <a><i className="caret-padding w3-right fa fa-caret-up hide"></i></a>
                </div>
                <span id="Analyze" className="collapse">
                    <div className="menu-title">
                        <a href="/companies/analytics">Analytics</a>
                    </div>
                    <div className="menu-title">
                        <a href="/companies/eventReports">Event Reports</a>
                    </div>
                </span>

                <div className="w3-bar-item w3-hover-black item-padding" data-toggle="collapse" data-target="#ManageAttendees">
                    <img className="icon-padding" src={require('../../assets/images/company/sidebar/manage-attendees.png')}/>
                    Manage Attendees
                    <a><i className="caret-padding w3-right fa fa-caret-down"></i></a>
                    <a><i className="caret-padding w3-right fa fa-caret-up hide"></i></a>
                </div>
                <span id="ManageAttendees" className="collapse">
                    <div className="menu-title"><a href="/companies/orders">Orders</a></div>
                    <div className="menu-title"><a href="/companies/addAttendees">Add Attendees</a></div>
                    <div className="menu-title"><a href="/companies/emailsToAttendees">Emails to Attendees</a></div>
                    <div className="menu-title"><a href="/companies/attendeeList">Attendee List</a></div>
                    <div className="menu-title"><a href="/companies/guestLists">Guest Lists</a></div>
                    <div className="menu-title"><a href="/companies/checkIn">Check-in</a></div>
                </span>

                <div className="w3-bar-item w3-hover-black item-padding">
                    <a href="/companies/dashboard">
                        <img className="icon-padding" src={require('../../assets/images/company/sidebar/employees.svg')}/>
                        Employees
                    </a>
                </div>

                <div className="w3-bar-item w3-hover-black item-padding setting-text" data-toggle="collapse" data-target="#Settings">
                    <img className="icon-padding" src={require('../../assets/images/company/sidebar/settings.svg')}/>
                    Setting
                    <a><i className="caret-padding w3-right fa fa-caret-down"></i></a>
                    <a><i className="caret-padding w3-right fa fa-caret-up hide"></i></a>
                </div>
                <span id="Settings" className="collapse">
                    <div className="menu-title">
                        <a href="/companies/companySetting">Company settings</a>
                    </div>
                    <div className="menu-title">
                        <a href="/companies/paymentDetails">Payment details</a>
                    </div>
                    <div className="menu-title password-padding">
                        <a href="/companies/password">password</a>
                    </div>
                </span>
            </div>
        )
    }
}

export default withRouter(SidebarCompany);