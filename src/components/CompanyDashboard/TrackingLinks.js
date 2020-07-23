import React from 'react';

class TrackingLinks extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Tracking Links</div>
                    <div className="trackingLinks-description">Use custom links to track the success of your promotional emails, flyers, and more.</div>
                    <div className="trackingLinks-contents">
                        <div className="w3-row">
                            <div className="w3-card trackingLinks-card trackingLinks-for-padding">
                                <table className="w3-table table-top">
                                    <tr className="table-th">
                                        <th className="link-name">Link Name</th>
                                        <th className="visits-sales">Visits</th>
                                        <th className="tickets-sold">Tickets Sold</th>
                                        <th className="visits-sales">Sales</th>
                                        <th className="td-delete"></th>
                                    </tr>

                                    <tr className="table-td">
                                        <td className="link-name">Link Name</td>
                                        <td className="visits-sales">Visits</td>
                                        <td className="tickets-sold">Tickets Sold</td>
                                        <td className="visits-sales">Sales</td>
                                        <td className="td-delete">
                                            <img className="delete-icon" src={require('../../assets/images/company/employee/delete.png')}/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="tracking-link">
                            <div className="w3-card trackingLinks-card trackingLinks-for-padding">
                                <input className="w3-input" type="text" placeholder="Name Of Your Tracking Link" required/>
                            </div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-bar btn-padding">
                                <div className="btn-save">Create</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TrackingLinks;