import React from 'react';
import CalendarJsx from "./CalendarJsx";

class Calendar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="w3-bar-item-self employees-bg">
                    <div className="employees-title">Calendar</div>

                    <div className="calendar-contents">
                        <div className="w3-card calendar-card">
                            <div className="calendar-padding">
                                <div className="w3-bar">
                                    <div className="w3-bar-item w3-right font-calendar">Agenda</div>
                                    <div className="w3-bar-item w3-right font-calendar">Day</div>
                                    <div className="w3-bar-item w3-right font-calendar">Week</div>
                                    <div className="w3-bar-item w3-right font-calendar">Mont</div>
                                </div>

                                <div className="w3-row calendar-top">
                                    <div className="mainForm">
                                        <CalendarJsx />
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

export default Calendar;