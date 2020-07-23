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

const Promise = global.Promise;

const google = window.google;

const mapStateToProps = state => ({
  ...state.home,
  articleListLoaded : state.articleList.articleListLoaded,
  currentUser: state.common.currentUser,
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

class Home extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    // const tab = this.props.token ? 'feed' : 'all';
    // const articlesPromise = this.props.token ?
    //   agent.Articles.feed :
    //   agent.Articles.all;
    var locality = '';
    var province = '';
    var country = '';
    var search = '';
    var _self = this;
    const tab =  'myPost';
    const articlesPromise = agent.Articles.byAuthor;
    if(this.props.currentUser)
      this.props.onLoad(tab, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(this.props.currentUser.username)]));
    $("html, body").animate({ scrollTop: 0 }, 0);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    return (
      <div className="company-home-page">        
        <div className="c__h__header">
          <h4>All Events</h4>
          <button className="btn" onClick={ () => this.props.history.push('/settings/event')}>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            New event
          </button>
        </div>
        <div className="c__h__content container page">
          {this.props.articleListLoaded && (
            <MainView 
              params={this.props.match.params}
              local="local"
            />
          )}
        </div>        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
