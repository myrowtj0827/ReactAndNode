import React from 'react';

class AddAttendees extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Add Attendees</div>
                    <div className="addAttendees-description">Manually add attendees info for complimentary tickets or offline payments</div>

                    <div className="addAttendees-contents">
                        <div className="w3-row card-padding">
                            <div className="w3-card addAttendees-card addAttendees-padding">
                                <select className="addAttendees-option">
                                    <option selected disabled>Payment Type</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        {/*  Total Paid Table  */}
                        <div className="w3-row add-padding">
                            <div className="w3-card addAttendees-card addAttendees-for-padding">
                                <table className="w3-table table-top">
                                    <tr className="th-font">
                                        <th className="align-ticket">Ticket Type</th>
                                        <th className="align-sold">Sold</th>
                                        <th className="align-sold">Price</th>
                                        <th className="align-sold">Quantity</th>
                                        <th className="align-amount">Amount Paid</th>
                                    </tr>

                                    <tr className="td-font gray-bg">
                                        <td className="align-ticket">Ticket name</td>
                                        <td className="align-sold">(N/A)</td>
                                        <td className="align-sold">$ price</td>
                                        <td className="align-sold">-</td>
                                        <td className="align-amount right-percent">-</td>
                                    </tr>
                                </table>

                                <div className="total-paid">TOTAL PAID: <a className="dollar-color">$ - </a></div>
                            </div>
                        </div>

                        {/*  Continue Button  */}
                        <div className="w3-row">
                            <div className="w3-bar btn-padding">
                                <div className="btn-save">Continue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddAttendees;