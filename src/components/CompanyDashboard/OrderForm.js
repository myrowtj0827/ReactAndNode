import React from 'react';

class OrderForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Order Form</div>

                    <div className="orderFrom-description">Edit your order form to ask attendees survey questions during checkout.</div>
                    <div className="orderFrom-contents">

                        {/*  Attendee Information  */}
                        <div>
                            <div className="orderFrom-title">Attendee Information</div>
                            <div className="w3-row">
                                <div className="w3-col l6 m12 attendee-padding-right">
                                    <div className="w3-card attendee-card attendee-padding">
                                        <select className="attendee-option">
                                            <option selected disabled>Collect information from</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="w3-col l6 m12 attendee-padding-left">
                                    <div className="w3-card attendee-card attendee-custom-padding">
                                        <div className="w3-row w3-center">
                                            <span className="w3-col l11 m11 s11">Customize Checkout questions</span>
                                            <span className="w3-col l1 m1 s1">
                                                <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark"/>
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="w3-card attendee-card orderForm-padding attendee-table-padding">
                                <div>
                                    Choose from the following common questions or create a new question more specific to your needs.
                                </div>

                                <table className="w3-table">
                                    <tr>
                                        <th className="cell-name"></th>
                                        <th className="cell-check w3-center">Include</th>
                                        <th className="cell-check w3-center">Require</th>
                                    </tr>

                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Prefix (Mr., Mrs., etc.)
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            First Name
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>

                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Last Name
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Suffix
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Email Address
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Home Phone
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Cell Phone
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Tax & Business Info
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Billing Address
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Card Info
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Home Address
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Shipping Address
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Job Title
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Company / Organization
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Work Address
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Work Phone
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Website
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Blog
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>


                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Gender
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cell-name">
                                            Birth Date
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align"/>
                                            </label>
                                        </td>
                                    </tr>

                                    <tr className="table-cell-color">
                                        <td className="cell-name">
                                            Age
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                        <td className="cell-check w3-center">
                                            <label className="container-event">
                                                <input type="checkbox" />
                                                <span className="checkMark checkbox-align checkMark-gray"/>
                                            </label>
                                        </td>
                                    </tr>
                                </table>

                                <a className="question">My question</a>
                            </div>
                        </div>

                        <div>
                            <div className="w3-card attendee-card orderForm-padding group-registration-padding">
                                <div className="group-large-font">
                                    <a className="registration-padding">Group Registration</a>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="group-small-font">
                                    Allow or require attendees to register as part of a group, team, organization, company or association.
                                    To activate group registration, you must collect information for each attendee.
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="w3-row group-max">
                                <div className="w3-col l6 m12 attendee-padding-right">
                                    <div className="w3-card attendee-card attendee-padding group-input-padding">
                                        <select className="attendee-option">
                                            <option selected disabled>Group Type</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="w3-col l6 m12 attendee-padding-left">
                                    <div className="w3-card attendee-card attendee-padding group-input-padding">
                                        <input className="w3-input" type="text" placeholder="Max Attendees Per Group" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group-description">This group type will appear when attendees register</div>

                        <div>
                            <div className="w3-row group-page-headline">
                                <div className="">
                                    <div className="w3-card attendee-card attendee-padding group-input-padding">
                                        <input className="w3-input" type="text" placeholder="Group Page Headline" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Text Editor 1 */}
                        <div>
                            <div className="w3-row group-page-headline">
                                <div className="adding-top">
                                    <div className="w3-card attendee-card group-input-padding group-input-padding">
                                        <div className="group-page-description">Group Page Description</div>

                                        <div className="text-box">
                                            <textarea/>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/*  Registration Options  */}
                        <div>
                            <div className="registration-style">
                                Registration Options
                            </div>
                            <div className="w3-row registration-title">
                                <div className="w3-col l6 m12 attendee-padding-right">
                                    <div className="w3-card attendee-card attendee-padding group-input-padding">
                                        <input className="w3-input" type="text" placeholder="Title For The Registration Page" required/>
                                    </div>
                                </div>

                                <div className="w3-col l6 m12 attendee-padding-left">
                                    <div className="w3-card attendee-card attendee-padding group-input-padding">
                                        <input className="w3-input" type="text" placeholder="Registration Time Limit" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Text Editor 2 */}
                        <div>
                            <div className="w3-row group-page-headline">
                                <div className="adding-tops">
                                    <div className="w3-card attendee-card group-input-padding group-input-padding">
                                        <div className="group-page-description">Instructions For Your Attendees</div>

                                        <div className="text-box">
                                            <textarea/>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/*  Text Editor 3 */}
                        <div>
                            <div className="w3-row group-page-headline">
                                <div className="adding-tops">
                                    <div className="w3-card attendee-card group-input-padding group-input-padding">
                                        <div className="group-page-description">Message To Display After Ticket Sales End</div>

                                        <div className="text-box">
                                            <textarea/>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/*  Allow Check */}
                        <div>
                            <div className="w3-row group-page-headline">
                                <div className="adding-tops">
                                    <div className="w3-card attendee-card group-input-padding group-input-padding">
                                        <div className="allow-check">
                                            <label className="container-event"> Allow Will Call Pickup
                                                <input type="checkbox" />
                                                <span className="checkMark"/>
                                            </label>

                                            <label className="container-event"> Allow Attendees To Edit Information After Registration
                                                <input type="checkbox" />
                                                <span className="checkMark"/>
                                            </label>

                                            <label className="container-event"> Accept Refund Requests
                                                <input type="checkbox" />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>

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

export default OrderForm;