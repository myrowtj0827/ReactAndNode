import React from 'react';
import { Route, Switch, Redirect,BrowserRouter as Router } from "react-router-dom"
import HeaderCompany from "../CompanyDashboard/Header"
import FooterCompany from "../CompanyDashboard/Footer";
import SidebarCompany from "../CompanyDashboard/Sidebar"
import { connect } from 'react-redux';
import DashboardEmployees from "../CompanyDashboard/DashboardEmployees";
import AddAttendees from "../CompanyDashboard/AddAttendees";
import Analytics from "../CompanyDashboard/Analytics";
import AttendeeList from "../CompanyDashboard/AttendeeList";
import Calendar from "../CompanyDashboard/Calendar";
import CheckIn from "../CompanyDashboard/CheckIn";
import CheckInTicket from "../CompanyDashboard/CheckInTicket";
import CompanySetting from "../CompanyDashboard/CompanySetting";
import Discount from "../CompanyDashboard/Discount";
import EmailsToAttendees from "../CompanyDashboard/EmailsToAttendees";
import EventDashboard from "../CompanyDashboard/EventDashboard";
import EventDetails from "../CompanyDashboard/EventDetails";
import EventReports from "../CompanyDashboard/EventReports";
import EventTypeLanguage from "../CompanyDashboard/EventTypeLanguage";
import GuestLists from "../CompanyDashboard/GuestLists";
import ManageMyEvents from "../CompanyDashboard/ManageMyEvents";
import OrderConfirmation from "../CompanyDashboard/OrderConfirmation";
import OrderForm from "../CompanyDashboard/OrderForm";
import Orders from "../CompanyDashboard/Orders";
import Password from "../CompanyDashboard/Password";
import PaymentDetails from "../CompanyDashboard/PaymentDetails";
import PaymentsPayouts from "../CompanyDashboard/PaymentsPayouts";
import RegistrationTransfers from "../CompanyDashboard/RegistrationTransfers";
import TrackingLinks from "../CompanyDashboard/TrackingLinks";
import WaitlistSettings from "../CompanyDashboard/WaitlistSettings";
const mapStateToProps = state => {
  return {
    token: state.common.token,
    currentUser: state.common.currentUser,
    isCompany:state.common.isCompany
  }
};
const mapDispatchToProps = dispatch => ({});

class Company extends React.Component {
    constructor() {
        super();
    }

    componentDidMount(): void {
        this.props.setHeaderFooterVisible(false);
    }

    componentWillUnmount(): void {
        this.props.setHeaderFooterVisible(true);
    }

    render() {
       
        /*if(!(this.props.token && this.props.isCompany)){
            return (
                <div className="min-height">
                    <HeaderCompany/>

                    <div className="employees-style">
                        <div className="w3-bar">
                            <div className="w3-bar-item-self">
                                <SidebarCompany/>
                            </div>
                            <Router forceRefresh={true}>
                            <Switch>
                                <Redirect to="/login"/>
                            </Switch>
                            </Router>
                        </div>
                        <FooterCompany/>
                    </div>
                </div>
            );
        }*/
        return (
            <div className="min-height">
                {/*<HeaderCompany/>*/}

                <div className="employees-style">
                    <div className="w3-bar">
                        <div className="w3-bar-item-self">
                            <SidebarCompany/>
                        </div>
                        <Router forceRefresh={true}>
                        <Switch>
                            <Route
                                path={"/companies/dashboard"}
                                render={() => (
                                    <DashboardEmployees/>
                                )}
                            />
                            <Route
                                path={"/companies/addAttendees"}
                                component={AddAttendees}
                            />
                            <Route
                                path={"/companies/analytics"}
                                component={Analytics}
                            />
                            <Route
                                path={"/companies/attendeeList"}
                                component={AttendeeList}
                            />
                            <Route
                                path={"/companies/calendar"}
                                component={Calendar}
                            />
                            <Route
                                path={"/companies/checkIn"}
                                component={CheckIn}
                            />
                            <Route
                                path={"/companies/checkInTicket"}
                                component={CheckInTicket}
                            />
                            <Route
                                path={"/companies/companySetting"}
                                component={CompanySetting}
                            />
                            <Route
                                path={"/companies/discount"}
                                component={Discount}
                            />
                            <Route
                                path={"/companies/emailsToAttendees"}
                                component={EmailsToAttendees}
                            />
                            <Route
                                path={"/companies/eventDashboard"}
                                component={EventDashboard}
                            />
                            <Route
                                path={"/companies/edit"}
                                component={EventDetails}
                            />
                            <Route
                                path={"/companies/eventReports"}
                                component={EventReports}
                            />
                            <Route
                                path={"/companies/eventTypeLanguage"}
                                component={EventTypeLanguage}
                            />
                            <Route
                                path={"/companies/guestLists"}
                                component={GuestLists}
                            />
                            <Route
                                path={"/companies/manageMyEvents"}
                                component={ManageMyEvents}
                            />
                            <Route
                                path={"/companies/orderConfirmation"}
                                component={OrderConfirmation}
                            />
                            <Route
                                path={"/companies/orderForm"}
                                component={OrderForm}
                            />
                            <Route
                                path={"/companies/orders"}
                                component={Orders}
                            />
                            <Route
                                path={"/companies/password"}
                                component={Password}
                            />
                            <Route
                                path={"/companies/paymentDetails"}
                                component={PaymentDetails}
                            />
                            <Route
                                path={"/companies/paymentsPayouts"}
                                component={PaymentsPayouts}
                            />
                            <Route
                                path={"/companies/registrationTransfers"}
                                component={RegistrationTransfers}
                            />
                            <Route
                                path={"/companies/trackingLinks"}
                                component={TrackingLinks}
                            />
                            <Route
                                path={"/companies/WaitlistSettings"}
                                component={WaitlistSettings}
                            />
                            <Redirect to="/companies/dashboard"/>
                        </Switch>
                        </Router>
                    </div>
                    {/*<FooterCompany/>*/}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);

