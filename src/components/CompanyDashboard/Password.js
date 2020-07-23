import React from 'react';

class Password extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Password</div>
                    <div className="password-your">Your Password</div>

                    <div className="password-contents">
                        {/*  Check In Search  */}
                        <div className="password-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card password-card password-padding">
                                    <input className="w3-input" type="text" placeholder="Current Password" required/>
                                </div>
                            </div>
                        </div>

                        <div className="w3-row add-top">
                            <div className="forgot-password-padding">Forgot your password?</div>
                        </div>

                        {/*  New Password  */}
                        <div className="password-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card password-card password-padding">
                                    <input className="w3-input" type="text" placeholder="New Password" required/>
                                </div>
                            </div>
                        </div>

                        {/*  Repeat new Password  */}
                        <div className="password-width">
                            <div className="w3-row card-padding">
                                <div className="w3-card password-card password-padding">
                                    <input className="w3-input" type="text" placeholder="Repeat new Password" required/>
                                </div>
                            </div>
                        </div>

                        {/*  Save & Cancel Button  */}
                        <div className="w3-bar w3-center btn-padding">
                            <div className="btn-save">Save</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Password;