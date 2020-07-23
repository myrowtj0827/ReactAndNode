import MainView from './MainView';
import React from 'react';
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
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Promise = global.Promise;

const google = window.google;

const mapStateToProps = state => ({
  ...state.home,
  articleListLoaded : state.articleList.articleListLoaded,
  appName: state.common.appName,
  token: state.common.token,
  categories : state.common.categories
});

const mapDispatchToProps = dispatch => ({
  onClickCategory: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Dashboard extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    const options = {
        title: {
          text: "Tickets statistic"
        },
        data: [{        
                  type: "column",
                  dataPoints: [
                      { label: "event1",  y: 10  },
                      { label: "event2", y: 15  },
                      { label: "event3", y: 25  },
                      { label: "event4",  y: 30  },
                      { label: "event5",  y: 28  }
                  ]
         }]
     }

    return (
      <div className="company-home-page">
        <div className="c__h__header">
          <h4>Overview</h4>
        </div>
        <div className="c__h__content container page">
          {/*<CanvasJSChart options = {options} />*/}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
