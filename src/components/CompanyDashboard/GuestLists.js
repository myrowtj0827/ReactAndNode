import React from 'react';

class GuestLists extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Guest List</div>
                    <div className="guestLists-description">Add attendees to your event without impacting ticket inventory or event capacity</div>

                    <div className="guestLists-contents">
                        <div className="w3-row card-padding">
                            <div className="w3-card guestLists-card guestLists-padding">
                                <table className="w3-table table-top">
                                    <tr className="th-font-padding">
                                        <th className="name-right-padding th-bottom">List</th>
                                        <th>Checked In</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr className="td-font gray-bg">
                                        <td className="name-right-padding">List name</td>
                                        <td className="check-left-padding">
                                            <label className="container-event">
                                                <input type="checkbox"/>
                                                <span className="checkMark gray-bg"/>
                                            </label>
                                        </td>
                                        <td className="blue-color">
                                            <a>Add guest
                                                <img className="plus-icon" src={require('../../assets/images/company/plus.png')}/>
                                            </a>
                                        </td>
                                        <td className="blue-color">Or Import File</td>
                                        <td className="delete-right-padding">
                                            <img className="delete-icon" src={require('../../assets/images/company/employee/delete.png')}/>
                                        </td>
                                    </tr>
                                </table>

                                <div className="blue-color add-list-padding">Add List</div>
                            </div>
                        </div>

                        {/*  Add Guest  */}
                        <div className="w3-row">
                            <div className="w3-col l8 w3-right">
                                <div className="addQuests-left">
                                    Add quests
                                </div>

                                <div className="w3-row card-padding">
                                    <div className="w3-card guestLists-card guestLists-padding">
                                        <div className="w3-row input-tb-padding">
                                            <div className="w3-col l6 input-r">
                                                <input className="w3-input" type="text" placeholder="First Name" required/>
                                            </div>

                                            <div className="w3-col l6 input-l">
                                                <input className="w3-input" type="text" placeholder="Last Name" required/>
                                            </div>
                                        </div>

                                        <div className="w3-row input-tb-padding">
                                            <div className="w3-col l6 input-r">
                                                <input className="w3-input" type="text" placeholder="Email" required/>
                                            </div>

                                            <div className="w3-col l6 input-l">
                                                <input className="w3-input" type="text" placeholder="ffiliation" required/>
                                            </div>
                                        </div>

                                        <div className="w3-row">
                                            <div className="w3-col l6">
                                                <div className="text-box-start start-finish-time">
                                                    <a>- </a><a className="number-bold">6</a><a> +</a>
                                                </div>
                                            </div>
                                            <div className="w3-col l6 upon-top">
                                                <div className="w3-bar w3-right">
                                                    <div className="w3-bar-item">Notification upon arrival</div>
                                                    <div className="w3-bar-item  checkBox-width">
                                                        <label className="container-event">
                                                            <input type="checkbox"/>
                                                            <span className="checkMark"/>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w3-row">
                                            <div className="w3-bar btn-padding">
                                                <div className="btn-save btn-quest-width">Add quest</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-bar btn-padding">
                                <div className="btn-save btn-save-width">Save</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default GuestLists;