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

class Help extends React.Component {

  constructor() {
    super();

    this.state = {
    }
  }

  render() {
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
          <div className="help-image-bg">
              <div className="help-div overlay-center">
                  <div className="help-font">How can we help you?</div>

                  <div className="input-align-help">
                      <input className="w3-input" type="text" placeholder="Enter your question"
                             value={this.state.askey}
                             onChange={(e) => this.setState({ askey: e.target.value })}
                             onKeyPress={ev => this.props.advancedSearch(ev, this.state.askey)}
                             required
                      />
                  </div>
              </div>
          </div>

          <div className="d-flex">
              <div className="w3-row center-container-help">
                  <div className="w3-row choose-category">Choose a category</div>
                  <div className="w3-row">
                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>

                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>

                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>

                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>
                  </div>

                  <div className="w3-row">
                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>

                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>

                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>

                      <div className="w3-col l3 m3 card-right-padding">
                          <div className="w3-card card-inner-padding">
                              <div className="small-txt-bold">Lorem Lpsum</div>
                              <div className="small-txt">Lorem lpsum is simply dummy text</div>
                          </div>
                      </div>
                  </div>


                  <div className="w3-row choose-category recommended-topic">Recommended Topics</div>
                  <div className="pb-4 slick-topics-container">
                      <Slider {...settings} className="slider-padding">
                          <div className="mx-2">
                              <div className="slick-card">
                                  <b>Lorem Ipsum </b>
                                  <div className="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                              </div>
                          </div>
                          <div className="mx-2">
                              <div className="slick-card">
                                  <b>Lorem Ipsum </b>
                                  <div className="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                              </div>
                          </div>
                          <div className="mx-2">
                              <div className="slick-card">
                                  <b>Lorem Ipsum </b>
                                  <div className="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                              </div>
                          </div>
                          <div className="mx-2">
                              <div className="slick-card">
                                  <b>Lorem Ipsum </b>
                                  <div className="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                              </div>
                          </div>
                      </Slider>
                  </div>

                  <div className="w3-row choose-category popular-question">Popular questions</div>
                  <div className="text-description">
                      <div className="w3-row medium-txt-bold">What is Lorem lpsum?</div>

                      <div className="w3-row">
                          Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry's
                          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book.
                      </div>

                      <div className="w3-row medium-txt-bold txt-top">Why do we use it?</div>

                      <div className="w3-row">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </div>

                      <div className="w3-row medium-txt-bold txt-top">Where does it come from?</div>

                      <div className="w3-row">
                          Contrary to popular belief, Lorem lpsum is not simply random text.
                          It has roots in a piece of classical Latin literature from 45BC, making it over 2000 years old.
                      </div>

                      <div className="w3-row medium-txt-bold txt-top">Where can I get some?</div>

                      <div className="w3-row">
                          There are many variations of passages of Lorem lpsum available, but the majority have suffered alteration in some  form,
                          by injected humour, or randomised words which don't look even slightly believable.
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
