import React from 'react';
import HeaderCompany from "../CompanyDashboard/Header"
import FooterCompany from "../CompanyDashboard/Footer";
import SidebarCompany from "../CompanyDashboard/Sidebar"

class Employees extends React.Component {
    constructor() {
        super();
    }

    componentDidMount(): void {
        this.props.setHeaderFooterVisible(false);
    }

    render() {
        return (
            <>
            {/*// <div className="min-height">*/}
            {/*//     <HeaderCompany/>*/}
            {/*//*/}
            {/*//     <div className="employees-style">*/}
            {/*//         <div className="w3-bar">*/}
            {/*//             <div className="w3-bar-item-self">*/}
            {/*//                 <SidebarCompany/>*/}
            {/*//             </div>*/}
            {/*//*/}
            {/*//             <div className="w3-bar-item-self employees-bg">*/}
                            <div className="employees-title">Employees</div>
                            <div className="w3-card employees-card">
                                <div className="employees-padding">
                                    <div className="w3-row employees-th">
                                        <div className="w3-col l2 w3-hover-gray">Name</div>
                                        <div className="w3-col l3 w3-hover-gray w3-center">Email</div>
                                        <div className="w3-col l3 w3-hover-gray w3-center">Phone</div>
                                        <div className="w3-col l3 w3-hover-gray w3-center">Date of birth</div>
                                    </div>
                                    <div className="w3-row employees-gray employees-left">
                                        <div className="w3-col l2 w3-hover-blue-gray-self">
                                            Name
                                        </div>

                                        <div className="w3-col l3 w3-hover-blue-gray-self w3-center">
                                            Loremipsum@gmail.com
                                        </div>

                                        <div className="w3-col l3 w3-hover-blue-gray-self w3-center">
                                            +000000000000
                                        </div>

                                        <div className="w3-col l3 w3-hover-blue-gray-self w3-center">
                                            04.29.1992
                                        </div>

                                        <div className="w3-col l1 w3-hover-blue-gray-self w3-center">
                                            <div className="w3-bar">
                                                <div className="w3-bar-item">
                                                    <a href="#">
                                                        <img className="edit-delete" src={require('../../assets/images/company/employee/edit.svg')}/>
                                                    </a>
                                                </div>
                                                <div className="w3-bar-item">
                                                    <a href="#">
                                                        <img className="edit-delete" src={require('../../assets/images/company/employee/delete.png')}/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-cursor">
                                        <div className="employees-add">
                                            <a className="w3-hover-text-amber"  data-toggle="modal" data-target="#myModal">Add employee</a>
                                        </div>

                                        <div className="w3-left modal modal-position w3-animate-zoom" id="myModal" role="dialog">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="w3-right modal-header">
                                                        <div className="close" data-dismiss="modal">&times;</div>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="employees-font">Add employee</div>
                                                        <div className="w3-row modal-padding">
                                                            <input className="w3-input" type="text" placeholder="Full name" required/>
                                                        </div>
                                                        <div className="w3-row w3-bar modal-padding">
                                                            <div className="w3-col l3 m12">Date of birth:</div>
                                                            <div className="w3-col l3 m12">
                                                                <div className="date-border">
                                                                    <input className="w3-input" type="number" placeholder="MM" min="1" max="12" required/>
                                                                </div>
                                                            </div>
                                                            <div className="w3-col l3 m12">
                                                                <div className="date-border">
                                                                    <input className="w3-input" type="number" placeholder="DD" min="1" max="31" required/>
                                                                </div>
                                                            </div>
                                                            <div className="w3-col l3 m12">
                                                                <div className="date-border">
                                                                    <input className="w3-input" type="number" placeholder="YYYY" min="1900" max="2100" required/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w3-row modal-padding">
                                                            <div className="w3-col l6 m12">
                                                                <div className="phone-password">
                                                                    <input className="w3-input" type="number" placeholder="Phone Number" required/>
                                                                </div>
                                                            </div>
                                                            <div className="w3-col l6 m12">
                                                                <div className="email-password">
                                                                    <input className="w3-input" type="email" placeholder="Email" required/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w3-row">
                                                            <div className="w3-col l6 m12">
                                                                <div className="phone-password">
                                                                    <input className="w3-input" type="password" placeholder="Password" required/>
                                                                </div>
                                                            </div>
                                                            <div className="w3-col l6 m12">
                                                                <div className="email-password">
                                                                    <input className="w3-input" type="password" placeholder="Confirm Password" required/>
                                                                </div>
                                                            </div>
                                                        </div>
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
            {/*//             </div>*/}
            {/*//         </div>*/}
            {/*//*/}
            {/*//         <FooterCompany/>*/}
            {/*//     </div>*/}
            {/*// </div>*/}
        </>
        );
    }
}

export default Employees;
