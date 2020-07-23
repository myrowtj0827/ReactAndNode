import React from 'react';

class ManageMyEvents extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Manage my events</div>
                    <div className="manageMyEvents-contents">
                        <div>
                            <div className="manageMyEvents-title">Your events</div>

                            <div>
                                <div className="manageMyEvents-card-out">
                                    <div className="w3-row">
                                        <div className="w3-col l10 m9">
                                            <div className="w3-row">
                                                <div className="w3-col l6 m5">
                                                    <div className="title-left">Title</div>
                                                </div>
                                                <div className="w3-col l6 m7">Description</div>
                                            </div>
                                        </div>

                                        <div className="w3-col l2 m3">
                                            <div className="w3-col">Date</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w3-card manageMyEvents-card">
                                    <div className="manageMyEvents-title-padding">
                                        <div className="w3-row">
                                            <div className="w3-col l10 m12">
                                                <div className="w3-row">
                                                    <div className="w3-col l6 m12">
                                                        <div className="w3-col l5 m12">
                                                            <img className="manage-image" src={require('../../assets/images/company/manage-image.png')} alt=""/>
                                                        </div>
                                                        <div className="w3-col l7 m12 manage-bold">
                                                            Biggest 90s 00s disco outdoor festival
                                                        </div>
                                                    </div>
                                                    <div className="w3-col l6 m12 manage-medium">
                                                        Lorem lpsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w3-col l2">
                                                <div className="w3-col l6 month-bold">11 Dec</div>
                                                <div className="w3-col l6">
                                                    <div className="w3-row">
                                                        <div className="w3-col l6 m6 s6">
                                                            <img className="icon-edit-manage" src={require('../../assets/images/company/employee/edit.svg')}/>
                                                        </div>
                                                        <div className="w3-col l6 m6 s6">
                                                            <img className="icon-delete-manage" src={require('../../assets/images/company/edit/minus.png')}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/*  2nd Card  */}
                            <div className="">
                                <div className="manageMyEvents-card-out">
                                    <div className="w3-row">
                                        <div className="w3-col l10 m9">
                                            <div className="w3-row">
                                                <div className="w3-col l6 m5">
                                                    <div className="title-left">Title</div>
                                                </div>
                                                <div className="w3-col l6 m7">Description</div>
                                            </div>
                                        </div>

                                        <div className="w3-col l2 m3">
                                            <div className="w3-col">Date</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w3-card manageMyEvents-card">
                                    <div className="manageMyEvents-title-padding">
                                        <div className="w3-row">
                                            <div className="w3-col l10">
                                                <div className="w3-row">
                                                    <div className="w3-col l6">
                                                        <div className="w3-col l5 m12">
                                                            <img className="manage-image" src={require('../../assets/images/company/manage-image.png')} alt=""/>
                                                        </div>
                                                        <div className="w3-col l7 m12 manage-bold">
                                                            Biggest 90s 00s disco outdoor festival
                                                        </div>
                                                    </div>
                                                    <div className="w3-col l6 manage-medium">
                                                        Lorem lpsum is simply dummy text of the printing and typesetting industry.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w3-col l2">
                                                <div className="w3-col l6 month-bold">11 Dec</div>
                                                <div className="w3-col l6">
                                                    <div className="w3-row">
                                                        <div className="w3-col l6 m6 s6">
                                                            <img className="icon-edit-manage" src={require('../../assets/images/company/employee/edit.svg')}/>
                                                        </div>
                                                        <div className="w3-col l6 m6 s6">
                                                            <img className="icon-delete-manage" src={require('../../assets/images/company/edit/minus.png')}/>
                                                        </div>
                                                    </div>
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

export default ManageMyEvents;