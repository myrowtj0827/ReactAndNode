import React from 'react';

class EventReports extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Event Reports</div>
                    <div className="eventReports-description">View reports to learn more about your attendees, sales, and more</div>

                    <div className="eventReports-contents">
                        <div className="w3-row card-padding">
                            <div className="w3-card eventReports-card eventReports-padding">
                                <select className="eventReports-option">
                                    <option selected disabled>Common Reports</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        <div className="report-title">Report Type</div>

                        <div className="w3-row card-padding">
                            <div className="w3-card eventReports-card none-border-padding">
                                <select className="eventReports-option">
                                    <option selected disabled>Attendee Summary</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-col l6 m12 date-range">
                                <div className="w3-row card-padding">
                                    <div className="w3-card eventReports-card eventReports-padding">
                                        <select className="eventReports-option gray-color">
                                            <option selected disabled>Date Range</option>
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

                            <div className="w3-col l6 m12 attendee-status">
                                <div className="w3-row card-padding">
                                    <div className="w3-card eventReports-card eventReports-padding">
                                        <select className="eventReports-option gray-color">
                                            <option selected disabled>Attendee Status</option>
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
                        </div>

                        <div className="configure-columns">Configure Columns</div>

                        <div className="output">
                            Select the data you would like to out put
                        </div>

                        <div className="w3-col configure-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card eventReports-card eventReports-padding">
                                    <input className="w3-input" type="text" placeholder="Search for attendees by name or email" required />
                                </div>
                            </div>
                        </div>

                        {/*  Order info  */}
                        <div className="w3-row card-padding">
                            <div className="w3-card eventReports-card none-border-padding">
                                <div className="order-info" data-toggle="collapse" data-target="#orderInfo">
                                    <a>Order info
                                    <i className="caret-padding fa fa-caret-down"></i></a>
                                </div>
                                <span id="orderInfo" className="collapse">
                                    <div className="w3-row table-top">
                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Affiliate
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Glosfy Fees
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Order type
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Billing Address
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Discount
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Tax Paid
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Total Paid
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Glosfy Payment
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Order Date
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Ticket Type
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Delivery Method
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Processing
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Status
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Date Attending
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">

                                            <label className="container-event"> IP Location
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Price Tier
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Currency
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">

                                            <label className="container-event"> Fees Paid
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Quantity
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Hold
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>
                                    </div>
                                </span>

                                <hr />

                                <div className="attendee-info" data-toggle="collapse" data-target="#attendeeInfo">
                                    <a>Attendee info
                                        <i className="caret-padding fa fa-caret-down"></i></a>
                                </div>
                                <span id="attendeeInfo" className="collapse">
                                    <div className="w3-row table-top">
                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Affiliate
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Glosfy Fees
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Order type
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Billing Address
                                                <input type="checkbox" checked />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Discount
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Tax Paid
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Total Paid
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Glosfy Payment
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Order Date
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Ticket Type
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Delivery Method
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Processing
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Status
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Date Attending
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">

                                            <label className="container-event"> IP Location
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Price Tier
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Currency
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">

                                            <label className="container-event"> Fees Paid
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Quantity
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>

                                        <div className="w3-col order-check-width">
                                            <label className="container-event"> Hold
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>

                        {/*  preview  */}
                        <div className="preview-padding">
                            <img className="icon-padding" src={require('../../assets/images/company/preview-img.png')} />Preview
                        </div>

                        <div>
                            <div className="w3-row card-padding">
                                <div className="w3-card eventReports-card eventReports-padding tiny-font">

                                    <div className="">
                                        <div className="w3-bar">
                                            <div className="w3-bar-item">Order #</div>
                                            <div className="w3-bar-item">Order Date</div>
                                            <div className="w3-bar-item">First Name</div>
                                            <div className="w3-bar-item">Last Name</div>
                                            <div className="w3-bar-item">Email</div>
                                            <div className="w3-bar-item">Quantity</div>
                                            <div className="w3-bar-item">Ticket Type</div>
                                            <div className="w3-bar-item">Order Type</div>
                                            <div className="w3-bar-item">Total Paid</div>
                                            <div className="w3-bar-item">Glosfy</div>
                                            <div className="w3-bar-item">Glosfy Payment</div>
                                        </div>
                                    </div>

                                    <div className="w3-light-grey">
                                        <div className="w3-grey" style={{ height: '5px', width: '75%' }}></div>
                                    </div>

                                    <div className="report-top">
                                        Looks like there are no rows to show you in this report.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Export  */}
                        <div className="export">Export:</div>
                        <div className="w3-row">
                            <div className="w3-col l3 m6 s12">
                                <div className="w3-row card-padding">
                                    <div className="w3-card eventReports-card eventReports-padding">
                                        <select className="eventReports-option">
                                            <option selected disabled>Excel</option>
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
                            <div className="w3-rest w3-right">
                                <div className="export-learn-more">Learn more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EventReports;