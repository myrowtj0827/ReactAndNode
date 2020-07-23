/**
 * Step 1 Page
 */

import React from "react";

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', this.props)
    }

    render() {
        return (
            <>
                <div className="eventDetails-step1-contents">
                    <div>
                        <div className="eventDetail-title">Title</div>
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <input className="w3-input" type="text" placeholder="Event Title *" name="step1.title" value={this.props.values.title} onChange={this.props.handleChange} required />
                            </div>
                        </div>
                    </div>

                    {/*  Location  */}
                    <div>
                        <div className="eventDetail-title">Location</div>
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <input className="w3-input" type="text" placeholder="Venue's name" name="step1.venuename" value={this.props.values.venuename} onChange={this.props.handleChange} required />
                            </div>

                            <div className="eventDetail-title-padding">
                                <input className="w3-input" type="text" placeholder="Address" name="step1.address" value={this.props.values.address} onChange={this.props.handleChange} required />
                            </div>

                            <div className="eventDetail-title-padding">
                                <input className="w3-input" type="text" placeholder="City" name="step1.city" value={this.props.values.city} onChange={this.props.handleChange} required />
                            </div>

                            <div className="eventDetail-title-padding">
                                <div className="w3-row">
                                    <div className="w3-half eventDetails-state">
                                        <input className="w3-input" type="text" placeholder="State" name="step1.state" value={this.props.values.state} onChange={this.props.handleChange} required />
                                    </div>
                                    <div className="w3-half eventDetails-zip">
                                        <input className="w3-input" type="text" placeholder="Zip" name="step1.zip" value={this.props.values.zip} onChange={this.props.handleChange} required />
                                    </div>
                                </div>
                            </div>

                            <div className="eventDetail-title-padding">
                                <select className="country-option" name="step1.country" value={this.props.values.country} onChange={this.props.handleChange}>
                                    <option selected disabled>Country</option>
                                    <option>Spain</option>
                                    <option>Italy</option>
                                    <option>Russia</option>
                                    <option>Poland</option>
                                    <option>India</option>
                                    <option>South Africa</option>
                                </select>

                                <div className="map-padding">
                                    <img className="map-size" src={require('../../../assets/images/company/edit/map.png')} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="icon-top" ></div>
                </div>
            </>
        )
    }
}

export default Step1;