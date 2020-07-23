/**
 * Step 2 Page
 */

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

class Step2 extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <>
                <div className="eventDetails-step2-contents">
                    <div>
                        <div className="eventDetail-title additional-padding">
                            <div className="w3-row">
                                <div className="w3-col l6 m12 s12 w3-left">Schedule dates</div>
                                <div className="w3-col l6 m12 s12 eventDetails-date-settings"><div className="">Date & Time Settings</div></div>
                            </div>
                        </div>
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <div className="w3-row date-time-total-padding">
                                    <div className="w3-col l7">
                                        <div className="w3-col l6 m12 date-padding">
                                            <div className="button">
                                                <img className="icon-recurring" src={require('../../../assets/images/company/edit/recurring-event.png')} alt="" />
                                                Recurring event
                                            </div>
                                        </div>

                                        <div className="w3-col l6 m12">
                                            <select className="w3-right event-option">
                                                <option selected disabled>Event repeats every ...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="w3-col l5 w3-right">
                                        <select className="w3-right time-option">
                                            <option selected disabled>Select Your Time Zone</option>
                                            <option>+ 1</option>
                                            <option>+ 2</option>
                                            <option>+ 3</option>
                                            <option>+ 4</option>
                                            <option>+ 5</option>
                                            <option>+ 6</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="w3-row event-start-finish">
                                    <div className="w3-col l7 m12">
                                        <div className="w3-half date-padding">
                                            <div className="w3-row">
                                                <div className="w3-row ">Event start</div>
                                                <div className="w3-row text-box-start start-finish-time">
                                                    <TextField
                                                        id="time"
                                                        // label="Alarm clock"
                                                        type="time"
                                                        defaultValue="07:30"
                                                        // className={this.useStyles.textField}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        inputProps={{
                                                            step: 300, // 5 min
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w3-row on-padding">
                                                <div className="w3-row">On</div>
                                                <div className="w3-row">
                                                    <input type="date" id="start" className="text-box-start" value="2020-04-03" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w3-half event-finish">
                                            <div className="w3-row">
                                                <div className="w3-row">Event finish</div>
                                                <div className="w3-row text-box-finish start-finish-time">10:00 PM</div>
                                            </div>
                                            <div className="w3-row on-padding">
                                                <div className="w3-row">On</div>
                                                <div className="w3-row">
                                                    <input type="date" id="finish" className="text-box-finish" value="2020-06-03" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-col l5 m12 w3-right event-page">
                                        <div className="event-page-title">
                                            Event Page Settings
                                        </div>
                                        <div className="event-page-content">
                                            <label className="container-event">Display start time on event page
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>

                                            <label className="container-event">Display end time on event page
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>

                                            <label className="container-event">Display time zone on event page
                                                <input type="checkbox" />
                                                <span className="checkMark" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="eventDetail-title event-additional-padding">
                            Event Image
                        </div>
                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <div className="event-image-description">
                                    We recommend using at least a 2160 * 1080px (2:1 ratio) image that's no larger than 10Mb.
                                    <a className="learn-more"> Learn more</a>
                                </div>

                                <div className="w3-row image-top">
                                    <div className="w3-half">
                                        <div className="w3-display-container w3-text-white">
                                            <img className="image-event" src={require('../../../assets/images/company/edit/image.png')} />
                                            <div className="w3-display-topright">
                                                <a><img className="delete-image-event" src={require('../../../assets/images/company/edit/delete.png')} /></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-half">
                                        <div className="add-image">
                                            <div className="w3-row">
                                                <img className="add-image-size" src={require('../../../assets/images/company/edit/add-image.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Event Description*/}
                    <div>
                        <div className="eventDetail-title">
                            Event Description
                        </div>

                        <div className="w3-card eventDetails-card">
                            <div className="eventDetail-title-padding">
                                <div className="event-organizer-description">
                                    Organizer Description
                                </div>

                                <div className="text-box">
                                    <textarea />
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

export default Step2;