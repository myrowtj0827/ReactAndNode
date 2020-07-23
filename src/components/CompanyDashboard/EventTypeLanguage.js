import React from 'react';

class EventTypeLanguage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Event Type & Language</div>

                    <div className="eventTypeLanguage-description">Choose your event type and set a language for your event</div>
                    <div className="eventTypeLanguage-contents">

                        {/*  Event Type  */}
                        <div>
                            <div className="eventTypeLanguage-title">Event Type</div>
                            <div className="w3-row">
                                <div className="w3-col l4">
                                    <div className="w3-card eventTypeLanguage-card eventTypeLanguage-padding">

                                        <label className="container-event"> Ticketed Event
                                            <input type="checkbox" />
                                            <span className="checkMark"/>
                                        </label>

                                        <label className="container-event"> Registration Event
                                            <input type="checkbox" />
                                            <span className="checkMark"/>
                                        </label>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="language-padding">
                            <div className="w3-card eventTypeLanguage-card eventTypeLanguage-padding">
                                <select className="eventTypeLanguage-option">
                                    <option selected disabled>Event Page Language</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
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

export default EventTypeLanguage;