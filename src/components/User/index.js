import React from 'react';

import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import Slider from 'react-slick';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import Geosuggest from "react-geosuggest";
// import DatePicker from "react-datepicker";
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import * as moment from 'moment';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from 'react-i18next';

const Promise = global.Promise;

const google = window.google;

const mapStateToProps = state => ({
  ...state.home,
  articleListLoaded : state.articleList.articleListLoaded,
  appName: state.common.appName,
  token: state.common.token,
  categories : state.common.categories,
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

class User extends React.Component {

  constructor() {
    super();

    this.state = {
        interests: [
            {
                name: 'Music'
            },
            {
                name: 'Alternative'
            }
        ]
    }


  

   
 


  }


  render() {
     const seeTickets = () => {
        this.props.history.push('/tickets')
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  
    return (
      <div className="home-page">
          <div className="w3-row blue-bg">

              <div className="overlay-div">
                  {
                      this.props.currentUser && this.props.currentUser.image &&
                      <img className="user-image" src={this.props.currentUser.image}
                           alt={require('../../assets/images/profile.png')} alt="profile"/>
                  }
                  {
                      this.props.currentUser && !this.props.currentUser.image &&
                      <div className="user-image d-flex"><img src={require('../../assets/images/profile.png')}
                                                              alt="profile"/></div>
                  }
              </div>

              <div className="profile-width">

                  <div className="justify-between">
                      <div>
                          <div className="user-name">
                              { this.props.currentUser && this.props.currentUser.fullName }
                          </div>

                          <img className="edit-icon" src={require("../../assets/images/edit.svg")} />

                          <div className="w3-row text-bold shown-phoneTablet-user">My Tickets</div>
                      </div>
                  </div>

                  <div className="w3-row w3-card">
                      <div className="user-card-padding">
                          <div className="w3-row text-black text-bold hidden-phoneTablet">My Tickets</div>

                          <div className="w3-row title-top">
                              <div className="w3-col ticket-img-width">
                                  <img src={require('../../assets/images/paidEvent.png')} className="w3-right img-event-user"/>
                                  <div className="w3-btn w3-display-middle btn-red hidden-phoneTablet">3 ticket</div>
                              </div>

                              <div className="w3-col ticket-description-width">
                                  <div className="description-padding">
                                      <div className="w3-row text-font">Biggest 90s 00s disco outdoor festival</div>

                                      <div className="w3-row position-top">
                                          <div className="w3-row text-black">Olympia London • London</div>
                                          <div className="w3-row text-blue">Wed, 11 Dec</div>
                                          <div className="w3-row text-blue">12:00 - 04:00</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row d-flex cursor-pointer text-blue past-ticket-padding" onClick={seeTickets}>See past tickets</div>
                  </div>

                  <div className="tag-block block padding-left">
                      <div className="fx-2 text-bold">Interests</div>
                      <ul className="tag-list pl-4 pt-3">
                          {
                              this.state.interests.map(item => {
                                  return (
                                      <li
                                          className="tag-default tag-pill tag-outline"
                                          key={item.name}
                                      >
                                          {item.name}
                                      </li>
                                  );
                              })
                          }
                      </ul>
                  </div>

                  <div className="fx-2 text-bold padding-left">Collections</div>

                  <div class="fx-2 text-bold mt-5 mb-5 bold-txt-font">Followed Organisers</div>

                  <div className="w3-row img4-width">
                      <div className="flex-grid-img">
                          <div>
                              <img className="img-bottom-padding" src={require('../../assets/images/dummyOrg.png')} />
                              <div className="w3-row">Lightopia</div>
                              <div className="w3-row">Festival London</div>
                          </div>

                          <div>
                              <img className="img-bottom-padding" src={require('../../assets/images/dummyOrg.png')} />
                              <div className="w3-row">Lightopia</div>
                              <div className="w3-row">Festival London</div>
                          </div>

                          <div>
                              <img className="img-bottom-padding" src={require('../../assets/images/dummyOrg.png')} />
                              <div className="w3-row">Lightopia</div>
                              <div className="w3-row">Festival London</div>
                          </div>

                          <div>
                              <img className="img-bottom-padding" src={require('../../assets/images/dummyOrg.png')} />
                              <div className="w3-row">Lightopia</div>
                              <div className="w3-row">Festival London</div>
                          </div>
                      </div>
                  </div>

                  <div className="fx-2 text-bold mt-5 mb-5 bold-txt-font">Favorite events</div>
                  <div class="pb-4 slider-container mb-5">
                      <Slider {...settings} className="">
                          <div class="mx-2">
                              <div className="px-3 d-flex flex-column align-items-start">
                                  <img src={require('../../assets/images/paidEvent.png')} class="img-event2" ></img>
                                  <div className="text-bold fx-1 mt-2">Cyber Expo Ireland 2020</div>
                                  <div className="text-gray fx-3">Thu 16, Jan 17:00 - 19:00</div>
                              </div>
                          </div>

                          <div class="mx-2">
                              <div className="px-3 d-flex flex-column align-items-start">
                                  <img src={require('../../assets/images/paidEvent.png')} class="img-event2" ></img>
                                  <div className="text-bold fx-1  mt-2">Cyber Expo Ireland 2020</div>
                                  <div className="text-gray fx-3">Thu 16, Jan 17:00 - 19:00</div>
                              </div>
                          </div>

                          <div class="mx-2">
                              <div className="px-3 d-flex flex-column align-items-start">
                                  <img src={require('../../assets/images/paidEvent.png')} class="img-event2" ></img>
                                  <div className="text-bold fx-1  mt-2">Cyber Expo Ireland 2020</div>
                                  <div className="text-gray fx-3">Thu 16, Jan 17:00 - 19:00</div>
                              </div>
                          </div>

                          <div class="mx-2">
                              <div className="px-3 d-flex flex-column align-items-start">
                                  <img src={require('../../assets/images/paidEvent.png')} class="img-event2" ></img>
                                  <div className="text-bold fx-1  mt-2">Cyber Expo Ireland 2020</div>
                                  <div className="text-gray fx-3">Thu 16, Jan 17:00 - 19:00</div>
                              </div>
                          </div>
                      </Slider>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
