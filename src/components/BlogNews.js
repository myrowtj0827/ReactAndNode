import React from 'react';

import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import Slider from 'react-slick';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../constants/actionTypes';
import Geosuggest from "react-geosuggest";
import * as moment from 'moment';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from 'react-i18next';

const Promise = global.Promise;

const google = window.google;

const mapStateToProps = state => ({
  ...state.home,
  articleListLoaded: state.articleList.articleListLoaded,
  appName: state.common.appName,
  token: state.common.token,
  categories: state.common.categories,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickCategory: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});

class Blog extends React.Component {

  constructor() {
    super();

    this.state = {
      marginClass: '20px'
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
      <div className="home-page blog-container">
        <img className="banner-img" src={require('../assets/images/help-bck.png')} alt='banner' />
        <img src={require('../assets/images/event-img3.png')} className="blog-article-img-hidden m-0" />

        <div class="d-flex flex-column align-center mb-5 tablet-top">
          <div className="center-container-newBlog row negative-margin">
            <div className="col-md-8 col-xs-12">
              <img src={require('../assets/images/event-img3.png')} className="blog-article-img-show m-0" />

              <div className="grey-text fx-2 mt-2 wordsty-top">
                <span className="gray-font">by <span className="black-font">Glosfy</span>, 4 days ago</span>
              </div>
              <div class="fx-0 text-bold lorem-large-font">Lorem Ipsum</div>
              <div className="mt-4 text-bold fx-1 what-font">What is Lorem ipsum?</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </div>
              <div className="mt-4 text-bold fx-1 what-font">What is Lorem ipsum?</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </div>
              <div className="mt-4 text-bold fx-1 what-font">What is Lorem ipsum?</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </div>
              <div className='control-btns d-flex align-items-end justify-content-end mt-4 img-pad-bottom'>
                <img src={require('../assets/images/share.png')} class="mr-3" width="15" />
                <div className="fa fa-heart-o text-red"></div>
              </div>
            </div>

            <div className="col-md-4 col-xs-12 padding-left">
              <div className="row p-0 d-flex flex-column news-column">
                <div className="blue-header d-flex">We recommend</div>
                <div>
                  <div className="flex-column d-flex align-items-start p-0">
                    <img src={require('../assets/images/event-img3.png')} className="max-width" />
                    <div className="grey-text fx-2 mt-2 mx-2">
                      <span className="gray-font">by <span className="black-font">Glosfy</span>, 4 days ago</span>
                    </div>
                    <div class="fx-2 text-bold mx-2 lorem-medium-font">Lorem Ipsum is simply dummy text</div>
                  </div>
                </div>
                <div>
                  <div className="flex-column d-flex align-items-start p-0 mt-4">
                    <img src={require('../assets/images/event-img3.png')} className="max-width" />
                    <div className="grey-text fx-2 mt-2 mx-2">
                      <span className="gray-font">by <span className="black-font">Glosfy</span>, 4 days ago</span>
                    </div>
                    <div class="fx-2 text-bold mx-2 lorem-medium-font">Lorem Ipsum is simply dummy text</div>
                  </div>
                </div>
                <div>
                  <div className="flex-column d-flex align-items-start p-0 mt-4">
                    <img src={require('../assets/images/event-img3.png')} className="max-width" />
                    <div className="grey-text fx-2 mt-2 mx-2">
                      <span className="gray-font">by <span className="black-font">Glosfy</span>, 4 days ago</span>
                    </div>
                    <div class="fx-2 text-bold mx-2 lorem-medium-font">Lorem Ipsum is simply dummy text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
