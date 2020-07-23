import React from 'react';

class PaymentDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Payments details</div>
                    <div className="paymentsDetails-contents">

                        {/*  Payout details  */}
                        <div className="w3-row">
                            <div className="w3-card paymentsDetails-card payment-padding">
                                <div className="w3-row payment-txt-bold">Payment details</div>

                                {/*  Payoneer  */}
                                <div className="w3-bar">
                                    <div className="w3-bar-item">
                                        <img className="payoneer-manage" src={require('../../assets/images/company/payoneer.png')} />
                                    </div>
                                    <div className="w3-bar-item">
                                        <div className="w3-bar">
                                            <div className="w3-bar-item">
                                                <a className="w3-left">Loremlpsum@gmail.com</a>
                                                <br />
                                                <a className="w3-left">XXXXXXXXX9999</a>
                                            </div>

                                            <div className="w3-bar-item edit-top-padding">
                                                <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')} />
                                                <img className="inner-delete" src={require('../../assets/images/company/employee/delete.png')} />
                                            </div>

                                            <div className="w3-bar-item edit-top-padding txt-payment-top">
                                                Primary payment
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  MasterCard  */}
                                <div className="w3-bar master-card-top">
                                    <div className="w3-bar-item">
                                        <img className="payoneer-manage" src={require('../../assets/images/company/master-card.png')} />
                                    </div>
                                    <div className="w3-bar-item">
                                        <div className="w3-bar">
                                            <div className="w3-bar-item">
                                                <a className="w3-left">Lorem lpsum</a>
                                                <br />
                                                <a className="w3-left">XXXXXXXXX9999</a>
                                            </div>

                                            <div className="w3-bar-item edit-top-padding">
                                                <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')} />
                                                <img className="inner-delete" src={require('../../assets/images/company/employee/delete.png')} />
                                            </div>

                                            <div className="w3-bar-item edit-top-padding txt-payment-top">
                                                Choose primary payment
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  Add Payment method Modal  */}
                                <div className="modal-cursor">
                                    <div className="add-payment-method">
                                        <a data-toggle="modal" data-target="#myModal">Add payment method</a>
                                    </div>

                                    <div className="w3-left modal modal-position w3-animate-zoom" id="myModal" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="w3-right modal-header">
                                                    <div className="close" data-dismiss="modal">&times;</div>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="employees-font">Add Payment method</div>
                                                    <div className="w3-row modal-padding">
                                                        <select className="discount-option">
                                                            <option selected disabled>Credit card</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>

                                                    <div className="w3-row">
                                                        <div className="w3-col l6 modal-input-padding input-right-padding">
                                                            <input className="w3-input" type="text" placeholder="Credit card holder name" required />
                                                        </div>
                                                        <div className="w3-col l6 modal-input-padding input-left-padding">
                                                            <input className="w3-input" type="text" placeholder="Number" required />
                                                        </div>
                                                    </div>

                                                    <div className="w3-row">
                                                        <div className="w3-col l6 modal-input-padding input-right-padding">
                                                            <input className="w3-input" type="text" placeholder="MM/YY" required />
                                                        </div>
                                                        <div className="w3-col l6 modal-input-padding input-left-padding">
                                                            <input className="w3-input" type="text" placeholder="CVC" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w3-center modal-description">
                                                    I accept the <a className="txt-color">terms of service </a> and have read the <a className="txt-color">privacy policy</a>.
                                                    I agree that Glosfy may <a className="txt-color">share my information</a> with the event organizer.
                                                </div>

                                                <div className="modal-footer">
                                                    <div className="add-color" data-dismiss="modal">Add</div>
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

export default PaymentDetails;