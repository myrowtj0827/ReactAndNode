import React from 'react';

class AttendeeList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Attendee List</div>
                    <div className="addAttendeeList-description">View and download a list of your attendees for check-in</div>

                    <div className="addAttendeeList-contents">
                        <div className="w3-row card-padding">
                            <div className="w3-card addAttendeeList-card addAttendeeList-padding">
                                <select className="addAttendeeList-option">
                                    <option selected disabled>Pre-sort your attendee list on the field that works for your door</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        <div className="w3-bar add-padding">
                            <div className="w3-center">
                                <div className="w3-bar-item w3-right select-include-width">
                                    <div className="include-description">Include barcode on attendee list for scanners</div>
                                </div>
                            </div>

                            <div className="w3-center">
                                <div className="w3-bar-item w3-right select-include-width">
                                    <div className="select-description">Select the ticket types to include in the attendee list:</div>
                                </div>
                            </div>
                        </div>

                        {/*  Total Paid Table  */}
                        <div className="w3-row">
                            <div className="w3-card addAttendeeList-card addAttendeeList-for-padding">
                                <table className="w3-table table-top">
                                    <tr className="td-font gray-bg">
                                        <td className="align-name">Ticket name</td>
                                        <td className="width-select">
                                            <label className="container-event">
                                                <input type="checkbox" checked/>
                                                <span className="checkMark gray-bg"/>
                                            </label>
                                        </td>
                                        <td className="width-include">
                                            <label className="container-event">
                                                <input type="checkbox" checked/>
                                                <span className="checkMark gray-bg"/>
                                            </label>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        {/*  Continue Button  */}
                        <div className="w3-row">
                            <div className="w3-bar btn-padding">
                                <div className="btn-save">Download List</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AttendeeList;