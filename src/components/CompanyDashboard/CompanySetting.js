import React from 'react';

class CompanySetting extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Company settings</div>
                    <div className="companySettings-contents">

                        <div className="companySettings-title">
                            <div className="w3-bar">
                                <div className="w3-bar-item">
                                    Company avatar
                                </div>
                                <div className="w3-bar-item">
                                    <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                                </div>
                            </div>
                        </div>

                        <div className="img-card">
                            <div className="w3-card companySettings-card companySettings-padding img-justify">
                                <img className="add-image-size" src={require('../../assets/images/company/companySetting/avata-combin.png')}/>
                            </div>
                        </div>

                        {/*  administrator name  */}
                        <div className="companySettings-title">
                            <div className="">
                                Administrator name
                            </div>
                        </div>
                        <div className="w3-card companySettings-card card-edit">
                            <div className="">
                                <a className="lorem-font">Lorem lpsum</a> <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                            </div>
                        </div>

                        {/*  Email  */}
                        <div className="companySettings-title">
                            <div className="">
                                Email
                            </div>
                        </div>
                        <div className="w3-card companySettings-card card-edit">
                            <div className="">
                                <a className="lorem-font">Lorem lpsum@gmail.com</a> <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                            </div>
                        </div>

                        {/*  Company name  */}
                        <div className="companySettings-title">
                            <div className="">
                                Company name
                            </div>
                        </div>
                        <div className="w3-card companySettings-card card-edit">
                            <div className="">
                                <a className="lorem-font">Lorem lpsum</a> <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                            </div>
                        </div>

                        {/*  Description  */}
                        <div className="companySettings-title">
                            <div className="">
                                Description
                            </div>
                        </div>
                        <div className="w3-card companySettings-card card-edit">
                            <div className="w3-row add-lorem-padding">
                                <div className="w3-col l6 w3-left">
                                    <a className="lorem-font">Lorem lpsum</a>
                                </div>
                                <div className="w3-rest w3-right">
                                    <img className="lorem-icon" src={require('../../assets/images/company/employee/edit.svg')}/>
                                </div>
                            </div>

                            <div className="">
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>

                            <div className="lorem-font add-why">Why do we use it?</div>
                            <div className="">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </div>
                        </div>

                        {/*  Social networks  */}
                        <div className="companySettings-title">
                            <div className="title-black">
                                Social networks
                            </div>
                        </div>

                        <div className="w3-card companySettings-card social-card-edit">
                            <div className="w3-center link-justify">
                                <div className="w3-bar w3-center">
                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/facebook.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>
                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/twitter.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>

                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/instagram.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>

                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/linkedin.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>

                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/google-plus.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>

                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/pinterest.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>

                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/youtube.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>

                                    <div className="w3-bar-item w3-display-container">
                                        <img className="image-size" src={require('../../assets/images/company/edit/behance.png')}/>
                                        <a className="w3-display-topright">
                                            <img className="plus-image-event" src={require('../../assets/images/company/edit/plus.png')}/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w3-row w3-bar social-top-padding">
                                <div className="w3-bar-item">
                                    <div className="w3-bar">
                                        <div className="w3-bar-item">
                                            <img className="inner-edit" src={require('../../assets/images/company/companySetting/twitter.png')}/>
                                        </div>
                                        <div className="w3-bar-item">Lorem lpsum.com</div>
                                        <div className="w3-bar-item">
                                            <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="w3-bar-item">
                                    <div className="w3-bar">
                                        <div className="w3-bar-item">
                                            <img className="inner-edit" src={require('../../assets/images/company/companySetting/facebook.png')}/>
                                        </div>
                                        <div className="w3-bar-item">Lorem lpsum.com</div>
                                        <div className="w3-bar-item">
                                            <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="w3-bar-item">
                                    <div className="w3-bar">
                                        <div className="w3-bar-item">
                                            <img className="inner-edit" src={require('../../assets/images/company/companySetting/youtube.png')}/>
                                        </div>
                                        <div className="w3-bar-item">Lorem lpsum.com</div>
                                        <div className="w3-bar-item">
                                            <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Address  */}
                        <div className="companySettings-title">
                            <div className="add-address">
                                Address  <img className="inner-edit" src={require('../../assets/images/company/employee/edit.svg')}/>
                            </div>
                        </div>
                        <div className="w3-card companySettings-card card-edit">
                            <div className="w3-row lorem-font">
                                Lorem lusum is simply dummy text of the printing and typesetting industry
                            </div>

                            <div className="w3-row lorem-font lorem-top">
                                Lorem lpsum
                            </div>

                            <div className="w3-row lorem-font lorem-top">
                                <div className="w3-col l6">Lorem lpsum</div>
                                <div className="w3-col l6">000000</div>
                            </div>

                            <div className="w3-row lorem-font lorem-top">
                                Lorem lpsum
                            </div>

                            <div className="w3-row lorem-font lorem-top">
                                +000000000000
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CompanySetting;