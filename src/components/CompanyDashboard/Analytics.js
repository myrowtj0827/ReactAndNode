import React from 'react';

class Analytics extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Analytics</div>
                    <div className="analytics-description">See where your sales are coming from, in real time.</div>

                    <div className="w3-bar">
                        <div className="w3-bar-item w3-right">
                            <label className="container-event"> Daily
                                <input type="checkbox" />
                                <span className="checkMark checkMark-gray"/>
                            </label>
                        </div>

                        <div className="w3-bar-item w3-right">
                            <label className="container-event"> Total
                                <input type="checkbox" />
                                <span className="checkMark checkMark-gray"/>
                            </label>
                        </div>
                    </div>

                    <div className="analytics-contents">
                        <div className="w3-row card-padding">
                            <div className="w3-col l4 m12 s12 card-first-padding">
                                <div className="w3-card analytics-card analytics-padding">
                                    <select className="analytics-option">
                                        <option selected disabled>Sales</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w3-col l4 m12 s12 card-second-padding">
                                <div className="w3-card analytics-card analytics-padding">
                                    <select className="analytics-option">
                                        <option selected disabled>Last 30 days</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w3-col l4 m12 s12 card-third-padding">
                                <div className="w3-card analytics-card analytics-padding">
                                    <select className="analytics-option">
                                        <option selected disabled>Daily data</option>
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

                        <div className="w3-row card-padding">
                            <div className="w3-col l4 m12 s12 card-first-padding">
                                <div className="w3-card analytics-card analytics-padding">
                                    <select className="analytics-option">
                                        <option selected disabled>Related to</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w3-col l4 m12 s12 card-second-padding">
                                <div className="w3-card analytics-card analytics-padding">
                                    <select className="analytics-option">
                                        <option selected disabled>Group by</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w3-col l4 m12 s12 card-third-padding">
                                <div className="w3-card analytics-card analytics-padding">
                                    <select className="analytics-option">
                                        <option selected disabled>Quality sold</option>
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

                        <div className="w3-row">
                            <div className="w3-card analytics-card analytics-for-padding">
                                <table className="w3-table table-top">
                                    <tr className="table-th">
                                        <th className="cell-width td-th-left">Sold date</th>
                                        <th className="cell-width">Amount</th>
                                        <th className="cell-width">Sold by</th>
                                        <th className="cell-rest">Sales</th>
                                    </tr>

                                    <tr className="table-td gray-bg">
                                        <td className="cell-width td-th-left">-</td>
                                        <td className="cell-width">-</td>
                                        <td className="cell-width">-</td>
                                        <td className="cell-rest rest-left">-</td>
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

export default Analytics;