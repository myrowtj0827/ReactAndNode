import ArticleList from './ArticleList';
import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../constants/actionTypes';


const mapStateToProps = state => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  onFollow: username => dispatch({
    type: FOLLOW_USER,
    payload: agent.Profile.follow(username)
  }),
  onLoad: payload => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnfollow: username => dispatch({
    type: UNFOLLOW_USER,
    payload: agent.Profile.unfollow(username)
  }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED })
});

class Notification extends React.Component {
  render() {
    return (
        <div className="notification-container">
          <div className="d-flex p-5">
              <div className="w-80">
                  <div className="fx-1 text-bold">Notifications</div>
                  <div className="mt-5">
                    <div className="fx-2 text-bold">Lorem Ipsum</div>
                    <div className="fx-3">04/28/2020</div>
                    <div class="w3-row position-choose">
                        <div class="w3-col l4">
                            <img src={require('../assets/images/event-img3.png')} class="img-event-notification" ></img>
                        </div>
                        <div class="w3-col l7 left-padding-txt">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                        <div class="w3-col l1 w3-display-bottomright d-flex">
                            <img src={require('../assets/images/delete.png')} class="img-event1" ></img>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="fx-2 text-bold">Lorem Ipsum</div>
                    <div className="fx-3">04/28/2020</div>
                    <div class="w3-row position-choose">
                        <div class="w3-col l4">
                            <img src={require('../assets/images/paidEvent.png')} class="img-event-notification" ></img>
                        </div>
                        <div class="w3-col l7 left-padding-txt">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                        <div class="w3-col l1 w3-display-bottomright d-flex">
                            <img src={require('../assets/images/delete.png')} class="img-event1" ></img>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
export { Notification, mapStateToProps };
