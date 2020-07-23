import React from 'react';

class Orders extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Orders</div>
                    <div className="orders-description">See all the orders for your event, including revenue and fees</div>

                    <div className="orders-contents">
                        <div className="w3-row card-padding">
                            <div className="w3-card orders-card orders-padding">
                                <select className="orders-option">
                                    <option selected disabled>Report Type</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>

                        {/*  Order, email or name  */}
                        <div className="w3-col search-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card orders-card orders-padding">
                                    <input className="w3-input" type="text" placeholder="Order, email or name" required/>
                                </div>
                            </div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-col order-width order-first-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card orders-card orders-padding">
                                        <select className="orders-option txt-gray">
                                            <option selected disabled>ORDER TYPE</option>
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

                            <div className="w3-col order-width order-second-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card orders-card orders-padding">
                                        <select className="orders-option txt-gray">
                                            <option selected disabled>DATE</option>
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

                            <div className="w3-col order-width order-third-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card orders-card orders-padding">
                                        <select className="orders-option txt-gray">
                                            <option selected disabled>SORT</option>
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

                            <div className="w3-col order-width order-forth-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card orders-card orders-padding">
                                        <select className="orders-option txt-gray">
                                            <option selected disabled>PER PAGE</option>
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

                            <div className="w3-col order-width order-fifth-padding">
                                <div className="w3-row card-padding">
                                    <div className="w3-card orders-card orders-padding">
                                        <select className="orders-option txt-gray">
                                            <option selected disabled>EXPORT</option>
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

                            <div className="w3-col order-width order-preview">
                                <div className="w3-right">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Orders;