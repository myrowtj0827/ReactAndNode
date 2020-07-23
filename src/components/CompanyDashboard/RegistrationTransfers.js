import React from 'react';

class RegistrationTransfers extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Registration Transfers</div>
                    <div className="registrationTransfers-description">Allow attendees to transfer to another ticket type, registration, or event</div>
                    <div className="registrationTransfers-contents">

                        {/*  Event Type  */}
                        <div>
                            {/*<div className="registrationTransfers-title">Event Type</div>*/}
                            <div className="w3-row">
                                <div className="w3-card registrationTransfers-card registrationTransfers-padding">

                                    <div className="w3-row">
                                        <div className="w3-col l6">
                                            <label className="container-event">
                                                <a className="registration-bold">Registration Transfer</a>
                                                <input type="checkbox" />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                        <div className="w3-col l6">
                                            <label className="container-event">
                                                <a className="registration-bold">Event Transfer</a>
                                                <input type="checkbox" />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="w3-row registration-small">
                                        <div className="w3-col l6">
                                            Attendees are allowed to transfer their registration, with the exception of reserved seating events.
                                        </div>
                                        <div className="w3-col l6">
                                            Attendees are NOT allowed to transfer their registration between this event and another event.
                                        </div>
                                    </div>

                                    <div className="w3-row registration-medium">
                                        <div className="w3-col l6">
                                            Default Transfer Fee
                                        </div>
                                        <div className="w3-col l6">
                                            Event Transfer Fee
                                        </div>
                                    </div>

                                    <div className="w3-row registration-tiny">
                                        <div className="w3-col l6">
                                            This is the additional fee attendees pay to complete their transfer.
                                        </div>
                                        <div className="w3-col l6">
                                            This additional fee is applied in place of the Default Transfer Fee when attendees transfer into this event from another event.
                                        </div>
                                    </div>

                                    <div className="w3-row">
                                        <div className="w3-col l6 m6 s6">
                                            <div className="w3-row text-box-start start-finish-time"><a className="registration-bold">$ </a> 0.00</div>
                                        </div>
                                        <div className="w3-col l6 m6 s6">
                                            <div className="w3-row text-box-start start-finish-time"><a className="registration-bold">$ </a> 0.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Transfer Policy  */}
                        <div className="registrationTransfers-title transfer-padding">Transfer Policy</div>
                        <div className="w3-row">
                            <div className="w3-card registrationTransfers-card transfer-policy-padding">
                                <div className="policy-message">
                                    Enter a message to your attendees regarding your transfer policy between events
                                </div>

                                <div className="text-box">
                                    <textarea/>
                                </div>
                            </div>
                        </div>

                        {/*  Transfer Settings - Table */}
                        <div className="registrationTransfers-title">Transfer Policy</div>
                        <div className="settings-description transfer-padding">
                            Set transfer permissions and fees for each ticket or registration type.
                        </div>
                        <div className="w3-row">
                            <div className="w3-card registrationTransfers-card transfer-policy-padding">

                                <table className="w3-table">
                                    <tr className="table-font-bold">
                                        <th className="cell-checkbox check-padding">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </th>
                                        <th className="cell-type w3-center">Ticket Type</th>
                                        <th className="cell-type w3-center">Permissions</th>
                                        <th className="cell-type w3-center">Cost Difference</th>
                                        <th className="cell-type w3-center">Fee Override</th>
                                    </tr>

                                    <tr className="table-cell-color">
                                        <td className="cell-checkbox">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-type w3-center">Ticket Type</td>
                                        <td className="cell-type font-color-blue w3-center">Allowed</td>
                                        <td className="cell-type font-color-blue w3-center">Charge</td>
                                        <td className="cell-type font-color-blue w3-center">0.00</td>
                                    </tr>

                                    <tr>
                                        <td className="cell-checkbox">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-type w3-center">Ticket Type</td>
                                        <td className="cell-type font-color-blue w3-center">Allowed</td>
                                        <td className="cell-type font-color-blue w3-center">Charge</td>
                                        <td className="cell-type font-color-blue w3-center">0.00</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        {/*  Edit Transfer Settings  */}
                        <div className="w3-row">
                            <div className="w3-col l4 w3-right">
                                <div className="w3-row edit-settings">
                                    Edit Transfer Settings
                                </div>
                            </div>
                        </div>
                        <div className="w3-row">
                            <div className="w3-col l4 m12 w3-right">
                                <div className="w3-row w3-card registrationTransfers-card edit-transfer-padding">
                                    <div>
                                        <select className="attendee-option">
                                            <option selected disabled>Permissions</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                    </div>

                                    <div className="edit-setting-top">
                                        <select className="attendee-option">
                                            <option selected disabled>Fee</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                    </div>

                                    <div className="edit-setting-top">
                                        <select className="attendee-option">
                                            <option selected disabled>Cost difference</option>
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

                        {/*  Save Button  */}
                        <div className="w3-bar btn-padding">
                            <div className="btn-save">Save</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RegistrationTransfers;