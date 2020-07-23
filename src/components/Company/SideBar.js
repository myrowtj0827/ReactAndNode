import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component {

  constructor() {
    super();
  }
  render() {

    const path = this.props.location.pathname;

    return (
      <div className="company-board-sidebar">
        <ul>
          <Link to="/settings/home">
            <li className={ (path.indexOf("/home") > -1 || path.indexOf("/event") > -1) && "active" } >
                <i className="fa fa-home" aria-hidden="true"></i>
                <span>Home</span>
            </li>
          </Link>
          <Link to="/settings/dashboard">
            <li className={ path == "/settings/dashboard" && "active" }>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/settings/calendar">
            <li className={ path == "/settings/calendar" && "active" } >
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span>Calendar</span>
            </li>
          </Link>
          <Link to="/settings/inbox">
            <li className={ path == "/settings/inbox" && "active" } >
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>Inbox</span>
            </li>
          </Link>
          <Link to="/settings/products">
            <li className={ path == "/settings/products" && "active" } >
              <i className="fa fa-ticket" aria-hidden="true"></i>
              <span>Products</span>
            </li>
          </Link>
          <Link to="/settings/invoices">
            <li className={ path == "/settings/invoices" && "active" } >
              <i className="fa fa-bookmark" aria-hidden="true"></i>
              <span>Invoices</span>
            </li>
          </Link>
          <Link to="/settings/customers">
            <li className={ path == "/settings/customers" && "active" } >
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/settings/chatroom">
            <li className={ path == "/settings/chatroom" && "active" } >
              <i className="fa fa-comments-o" aria-hidden="true"></i>
              <span>Chat Room</span>
            </li>
          </Link>
          <Link to="/settings/helpcenter">
            <li className={ path == "/settings/helpcenter" && "active" } >
              <i className="fa fa-question-circle" aria-hidden="true"></i>
              <span>Help Center</span>
            </li>
          </Link>
          <Link to="/settings/info">
            <li className={ path == "/settings/info" && "active" }>
              <i className="fa fa-cogs" aria-hidden="true"></i>
              <span>Settings</span>
            </li>
          </Link>
      </ul>
      </div>
    );
  }
}

export default withRouter(SideBar);