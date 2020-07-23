import MainView from './MainView';
import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import * as moment from 'moment';
import $ from 'jquery';
import classNames from 'classnames';
import CanvasJSReact from '../../assets/canvasjs.react';
import "react-big-calendar/lib/css/react-big-calendar.css";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Promise = global.Promise;

const google = window.google;
const localizer = momentLocalizer(moment)

const mapStateToProps = state => ({
  currentUser : state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickCategory: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class CalendarSchedule extends React.Component {

  constructor() {
    super();

    this.state = { events : [] }

    this.handleSelect = ({ start, end }) => {
      return;
      const title = window.prompt('New Event name')
      if (title)
        this.setState({
          events: [
            ...this.state.events,
            {
              start,
              end,
              title,
            },
          ],
        })
    }
  }

  componentWillMount() {
    var _self = this;
    if(this.props.currentUser){
      agent.Articles.byAuthor(this.props.currentUser.username).then(function(res){
        var events = res.articles.map(article => {
          return {
            title : article.title,
            start : new Date(article.eventDate + ' '+ article.eventTimeFrom),
            end : new Date(article.eventDate + ' '+ article.eventTimeTo),
            link : '/settings/event/'+article.slug
          }
        });
        _self.setState({events})
      })
    }      
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    var myEventsList = [];

    return (
      <div className="company-home-page">
        <div className="">
          <div className="c__h__header">
            <h4>Calendar</h4>
          </div>
          <div className="c__h__content container page">            
            <Calendar
              selectable
              localizer={localizer}
              events={this.state.events}
              defaultView={Views.MONTH}
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date()}
              onSelectEvent={event => this.props.history.push(event.link)}
              onSelectSlot={this.handleSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSchedule);
