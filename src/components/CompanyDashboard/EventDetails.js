import React, { Component } from 'react';

import Step1 from "./EventDetailsStep/Step1";
import Step2 from "./EventDetailsStep/Step2";
import Step3 from "./EventDetailsStep/Step3";
import Step4 from "./EventDetailsStep/Step4";

class EventDetails extends React.Component {
	state = {
		page: 1,
		step1: {
			title: '',
			desc: '',
			orgdesc: '',
			venuename: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			country: ''
		},

		step2: {
			repeat: '',
			timezone: '',
			starttime: '',
			startdate: '',
			endtime: '',
			enddate: '',
			settings: '',
			image: '',
			desc: '',
			social: ''
		}
	};

	constructor() {
		super();
	}

	nextPage = (values) => {

		console.log('nextPage values', values);
		const page = this.state.page;
		if (page !== 4) {
			// Make api call
			this.setState({ page: page + 1 });
		}
	};

	previousPage = (values) => {

		console.log('previousPage values', values);
		const page = this.state.page;
		if (page !== 1) {
			this.setState({ page: page - 1 });
		}
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		console.log('this.state', this.state);
	}

	render() {
		const { page } = this.state;
		const { title, desc, orgdesc, venuename, address, city, state, zip, country } = this.state;
		const step1Values = { title, desc, orgdesc, venuename, address, city, state, zip, country };
		const step2Values = { title, desc, orgdesc, venuename, address, city, state, zip, country };

		return (
			<>
				<div className="w3-bar-item-self employees-bg">
					<div className="employees-title">Event Details</div>

					{
						page === 1 &&
						<Step1
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={step1Values}
						/>
					}

					{
						page === 2 && <Step2
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={step1Values}
						/>
					}

					{
						page === 3 && <Step3 />
					}

					{
						page === 4 && <Step4 />
					}

					<div className="event-details-btn-contents">
						<div className="w3-bar w3-center btn-padding">
							<div onClick={this.nextPage} className="btn-save">Next</div>
							<div onClick={this.previousPage} className="btn-save">Previous</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default EventDetails;