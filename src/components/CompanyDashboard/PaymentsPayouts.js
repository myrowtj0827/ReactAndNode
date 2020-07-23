import React from 'react';

class PaymentsPayouts extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Payments & Payouts</div>
                    <div className="paymentsPayouts-contents">

                        {/*  Event payment settings  */}
                        <div>
                            <div className="paymentsPayouts-title">Event payment settings</div>
                            <div className="w3-row">
                                <div className="w3-col l6 m12 settings-padding-right">
                                    <div className="w3-card paymentsPayouts-card settings-padding">
                                        <select className="settings-option">
                                            <option selected disabled>Currency</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="w3-col l6 m12 settings-padding-left">
                                    <div className="w3-card paymentsPayouts-card settings-padding">
                                        <select className="settings-option">
                                            <option selected disabled>Payout Country</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Payout method  */}
                        <div>
                            <div className="w3-bar">
                                <div className="w3-bar-item">
                                    <div className="paymentsPayouts-method-title">Payout method</div>
                                </div>
                                <div className="w3-bar-item">
                                    <img className="icon-edit-manage" src={require('../../assets/images/company/employee/edit.svg')}/>
                                </div>
                            </div>


                            <div className="w3-row">
                                <div className="w3-card paymentsPayouts-card payout-method-padding">
                                    <div className="w3-bar">
                                        <div className="w3-bar-item">
                                            <img className="payoneer-manage" src={require('../../assets/images/company/payoneer.png')}/>
                                        </div>
                                        <div className="w3-bar-item">
                                            <div className="w3-bar">
                                                <div className="w3-bar-item">
                                                    Loremlpsum@gmail.com<br/>
                                                    XXXXXXXXX9999
                                                </div>
                                                <div className="w3-bar-item">
                                                    <img className="inner-edit-manage" src={require('../../assets/images/company/employee/edit.svg')}/>
                                                </div>
                                            </div>
                                        </div>
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

export default PaymentsPayouts;