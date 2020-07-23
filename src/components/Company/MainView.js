import ArticleList from '../ArticleList';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';


const mapStateToProps = state => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({

});


const MainView = props => {
  return (
    <div className="event_list_wrapper">
      <table className="table table-striped table-hover">
        <thead>
          <tr>            
            <th className="event_title">Title</th>
            <MediaQuery minDeviceWidth={543}>
              <th className="event_desc">Description</th>
            </MediaQuery>
            <th className="event_datetime">DateTime of Event</th>            
            <th className="event_info">
              <MediaQuery minDeviceWidth={543}>
                Detail
              </MediaQuery>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            props.articles.map(article => 
              <tr>
                <td>{ article.title }</td>
                <MediaQuery minDeviceWidth={543}>
                  <td>{ article.description }</td>
                </MediaQuery>
                <td>{ article.eventDate } { article.eventTimeFrom } to { article.eventTimeTo }</td>
                <td className="p__info"onClick={ () => props.history.push(`/settings/event/${article.slug}`) }>
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainView));
