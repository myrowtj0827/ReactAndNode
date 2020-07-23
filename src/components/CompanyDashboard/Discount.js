import React from 'react';

class Discount extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Discount</div>
                    <div className="discount-description">Set up promotional codes to offer discounts, early access, and more to your attendees.</div>
                    <div className="discount-contents">
                        <div className="w3-row">
                            <div className="w3-card discount-card discount-for-padding">
                                <select className="discount-option">
                                    <option selected disabled>Create discount for ... </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        <div className="w3-row discount-top-padding">
                            <div className="w3-card discount-card discount-for-padding">
                                <select className="discount-option">
                                    <option selected disabled>Tipe of discount</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        <div className="w3-row discount-top-padding">
                            <div className="w3-card discount-card discount-amount-padding">
                                <div className="w3-bar check-amount">
                                    <div className="w3-bar-item">
                                        <label className="container-event"> $
                                            <input type="checkbox" />
                                            <span className="checkMark checkbox-align"/>
                                        </label>

                                        <label className="container-event percent-top"> %
                                            <input type="checkbox" />
                                            <span className="checkMark checkbox-align"/>
                                        </label>
                                    </div>

                                    <div className="w3-bar-item">
                                        <div className="w3-row text-box-start start-finish-time">Amount</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w3-row discount-top-padding">
                            <div className="w3-card discount-card discount-for-padding">
                                <select className="discount-option">
                                    <option selected disabled>Limit</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        <div className="w3-row discount-top-padding">
                            <div className="w3-row">
                                <div className="w3-col l4">
                                    <div className="w3-card discount-card discount-for-padding">
                                        <div className="starts-ends-padding">
                                            <div className="starts-padding">
                                                Starts
                                            </div>
                                            <select className="starts-now">
                                                <option selected disabled>Now</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select>
                                        </div>
                                        <div className="starts-ends-padding">
                                            <div className="ends-padding">
                                                Ends
                                            </div>
                                            <select className="ends-sales">
                                                <option selected disabled>When sales end</option>
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
                                <div className="w3-col l8">
                                    <div className="w3-bar btn-padding">
                                        <div className="btn-save">Save</div>
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

export default Discount;