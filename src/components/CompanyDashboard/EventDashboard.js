import React from 'react';
import '../../../node_modules/react-linechart/dist/styles.css';

import CanvasJSReact from './canvasjs.react';
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class EventDashboard extends React.Component {
    constructor() {
        super();
    }

    render() {
        const options = {
            dataPointWidth: 80,
            axisY: {
                interval: 1,
                maximum: 10,
                gridColor: "#ffffff",
                crosshair: {
                    enabled: true
                }
            },

            height: "200",
            data: [{
                type: "column",

                color: "#ff0033",
                dataPoints: [
                    { label: "Apple", y: 0.3 }
                ]
            },
            {
                type: "column",
                color: "#3333cc",
                dataPoints: [
                    { label: "Apple", y: 3 }
                ]
            },
            {
                type: "column",
                color: "#9900cc",
                dataPoints: [
                    { label: "Apple", y: 9 }
                ]
            }]
        };

        const options1 = {
            animationEnabled: true,
            theme: "light2",
            fontSize: 5,

            axisX: {
                gridThickness: 1,
                gridColor: "#ccc",
                interval: 1,
                intervalType: "month",
                valueFormatString: "MMM YYYY",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                interval: 200,
                maximum: 2000,
                gridColor: "#ccc",
                crosshair: {
                    enabled: true
                }
            },

            toolTip: {
                shared: false
            },

            legend: {
                cursor: "pointer",
                dockInsidePlotArea: true,
            },

            data: [{
                type: "line",
                markerSize: 12,
                showInLegend: false,
                markerType: "square",
                xValueFormatString: "YYYY",
                color: "#3333cc",
                dataPoints: [
                    { x: new Date(2019, 11), y: 1000 },
                    { x: new Date(2019, 12), y: 1080 },
                    { x: new Date(2020, 1), y: 880 },
                    { x: new Date(2020, 2), y: 950 },
                    { x: new Date(2020, 3), y: 1000 },
                    { x: new Date(2020, 4), y: 970 },
                    { x: new Date(2020, 5), y: 1080 },
                    { x: new Date(2020, 6), y: 1130 },
                    { x: new Date(2020, 7), y: 1080 },
                    { x: new Date(2020, 8), y: 1130 }
                ]
            },
            {
                type: "line",
                markerSize: 12,
                showInLegend: false,
                markerType: "square",
                color: "#9900cc",
                dataPoints: [
                    { x: new Date(2019, 11), y: 280 },
                    { x: new Date(2019, 12), y: 360 },
                    { x: new Date(2020, 2), y: 0 },
                ]
            },
            {
                type: "line",
                markerSize: 12,
                showInLegend: false,
                markerType: "square",
                color: "#ff0033",
                dataPoints: [
                    { x: new Date(2020, 1), y: 40 },
                    { x: new Date(2020, 5), y: 90 }
                ]
            }]
        }

        return (
            <>
                <div className="w3-bar-item-self event-bg">
                    <div className="event-title">Event Dashboard</div>
                    <div className="event-chat-contents">

                        {/*  Price & Percent  */}
                        <div className="w3-row">
                            <div className="w3-col l3 right-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card event-card event-padding">
                                        <div className="w3-row ticket-sold-bg">
                                            <div className="img-padding">
                                                <div className="w3-row small-bold">
                                                    Tickets sold
                                                </div>
                                                <div className="w3-row small-blue">
                                                    All time
                                                </div>
                                            </div>

                                            <div className="large-txt">
                                                9 999
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w3-col l3 right-padding-1">
                                <div className="w3-row card-padding">
                                    <div className="w3-card event-card event-padding">
                                        <div className="page-views-bg">
                                            <div className="img-padding">
                                                <div className="w3-row small-bold">
                                                    Page views
                                                </div>
                                                <div className="w3-row small-blue">
                                                    All time
                                                </div>
                                            </div>

                                            <div className="large-txt">
                                                999
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w3-col l3 right-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card event-card event-padding">
                                        <div className="sales-bg">
                                            <div className="img-padding">
                                                <div className="w3-row small-bold">
                                                    sales
                                                </div>
                                                <div className="w3-row small-blue">
                                                    Add payout method
                                                </div>
                                            </div>

                                            <div className="large-txt">
                                                $99 900
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w3-col l3 right-padding-1">
                                <div className="w3-row card-padding">
                                    <div className="w3-card event-card event-padding">
                                        <div className="sold-out-bg">
                                            <div className="img-padding">
                                                <div className="w3-row small-bold">
                                                    Sold out
                                                </div>
                                                <div className="w3-row small-blue">
                                                    All time
                                                </div>
                                            </div>

                                            <div className="large-txt">
                                                77%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  LineChart*/}
                        <div className="right-padding-2">
                            <div className="w3-row">
                                <div className="w3-col graphics-width">
                                    <div className="w3-row card-padding">
                                        <div className="w3-card event-card event-padding">
                                            <div className="w3-row">
                                                <div className="w3-bar">
                                                    <div className="w3-bar-item ticket-tile">
                                                        Sales by Ticket Type
                                                    </div>

                                                    <div className="w3-bar-item w3-right date-type">
                                                        Daily
                                                    </div>

                                                    <div className="w3-bar-item w3-right date-type">
                                                        Weekly
                                                    </div>

                                                    <div className="w3-bar-item w3-right date-type">
                                                        Monthly
                                                    </div>
                                                </div>
                                            </div>

                                            {/*<LineChartTicket/>*/}
                                            <CanvasJSChart options={options1} />

                                        </div>
                                    </div>
                                </div>

                                <div className="w3-col ticket-show">
                                    <div className="w3-row card-padding">
                                        <div className="w3-card event-card ticket-type-padding">
                                            <div className="w3-row">
                                                <div className="w3-col l6 ticket-tile">
                                                    Ticket Types
                                                </div>
                                                <div className="w3-col l6 ticket-tile">
                                                    <div className="w3-right">
                                                        Quantity
                                                    </div>
                                                </div>
                                            </div>

                                            {/*  Ticket name1  */}
                                            <div className="w3-row name-top">
                                                <div className="w3-row ticket-name1 ticket-left">
                                                    <div className="name-font">Ticket name1</div>
                                                    <div className="end-color">
                                                        End Sales: 4/3/20 6:00 PM
                                                    </div>
                                                </div>
                                                <div className="w3-row">
                                                    <div className="w3-col l5 ticket-left">
                                                        <div className="ticket-tile">$ 100</div>
                                                    </div>
                                                    <div className="w3-col l7">
                                                        <div className="w3-right">
                                                            <div className="number-font">12</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />

                                            {/*  Ticket name2  */}
                                            <div className="w3-row name-top">
                                                <div className="w3-row ticket-name2 ticket-left">
                                                    <div className="name-font">Ticket name2</div>
                                                    <div className="end-color">
                                                        End Sales: 4/3/20 6:00 PM
                                                    </div>
                                                </div>
                                                <div className="w3-row">
                                                    <div className="w3-col l5 m12 ticket-left">
                                                        <div className="ticket-tile">$ 50</div>
                                                    </div>
                                                    <div className="w3-col l7 m12">
                                                        <div className="w3-right">
                                                            <div className="number-font">6 999</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />

                                            {/*  Ticket name3  */}
                                            <div className="w3-row name-top">
                                                <div className="w3-row ticket-name3 ticket-left">
                                                    <div className="name-font">Ticket name3</div>
                                                    <div className="end-color">
                                                        End Sales: 4/3/20 6:00 PM
                                                    </div>
                                                </div>
                                                <div className="w3-row">
                                                    <div className="w3-col l5 ticket-left">
                                                        <div className="ticket-tile">Free</div>
                                                    </div>
                                                    <div className="w3-col l7">
                                                        <div className="w3-right">
                                                            <div className="number-font">576</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*  LineChart Stick  */}
                                            <div className="canvas-top">
                                                <CanvasJSChart options={options} onRef={ref => this.chart = ref} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  your event url*/}
                        <div className="right-padding-2">
                            <div className="w3-row">
                                <div className="w3-card event-card event-padding">
                                    <div className="event-url">Your Event URL</div>
                                    <div className="eventName-com">
                                        https://eventname.glosfy.com
                                        <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*</div>*/}

                        {/*<div className="employees-bg-left">*/}
                        <div className="w3-bar-item-event employeesEvent-bg">
                            <div className="eventReports-contents">
                                <div className="report-title">Common Reports</div>

                                <div className="date-attendees">Report Type</div>

                                <div className="w3-row card-padding">
                                    <div className="w3-card eventReports-card none-border-padding">
                                        <select className="eventReports-option">
                                            <option selected disabled>Custom Questions Responses</option>
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
                                        <div className="date-attendees">Date Range</div>
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
                                        <div className="date-attendees">Attendees Status</div>
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
                                    Select the data you would like to output
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
                                            <a>Attendee info <i className="caret-padding fa fa-caret-down"></i></a>
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
                    </div>
                </div>
            </>
        );
    }
}

export default EventDashboard;