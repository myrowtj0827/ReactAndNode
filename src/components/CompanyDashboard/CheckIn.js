import React from 'react';

class CheckIn extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Check-In</div>
                    <div className="checkIn-description">Check in attendees using their name or email</div>

                    <div className="checkIn-contents">
                        {/*  Check In Search  */}
                        <div className="w3-col search-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card checkIn-card checkIn-padding">
                                    <input className="w3-input" type="text" placeholder="Search for attendees by name or email" required/>
                                </div>
                            </div>
                        </div>

                        <div className="attendeeList-bold">Attendees List</div>

                        <div className="w3-row card-padding">
                            <div className="w3-card checkIn-card checkIn-padding">
                                <table className="w3-table table-top-bottom">
                                    <tr>
                                        <th className="w3-left table-th-bold">
                                            Attendee name
                                        </th>
                                        <th className="w3-center table-th-bold">
                                            Email
                                        </th>
                                        <th className="w3-center table-th-bold">
                                            Ticket tipe
                                        </th>
                                        <th className="w3-right table-th-bold">
                                           Status
                                        </th>
                                    </tr>
                                    <tr className="gray-bg">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CheckIn;