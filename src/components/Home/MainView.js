import ArticleList from '../ArticleList';
import React, {useEffect, useState} from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import Slider from 'react-slick';
import ArticlePreview from '../ArticlePreview';

import {Slide} from "react-slideshow-image";
import SocialShare from '../SocialShare';

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault();
      props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
    };

    return (
        <li className="nav-item">
          <a href=""
             className={props.tab === 'feed' ? 'nav-link active' : 'nav-link'}
             onClick={clickHandler}>
            Your Feed
          </a>
        </li>
    );
  }
  return null;
};

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('all', agent.Articles.all, agent.Articles.all());
  };
  return (
      <li className="nav-item">
        <a
            href=""
            className={props.tab === 'all' ? 'nav-link active' : 'nav-link'}
            onClick={clickHandler}>
          Global Feed
        </a>
      </li>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
      <li className="nav-item">
        <a href="" className="nav-link active">
          <i className="ion-pound"></i> {props.tag}
        </a>
      </li>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const MainView = props => {
  const [sliderIndex, setSliderIndex] = useState(1);

  var category = 'Events';
  var location = 'near you';
  var params = props.params.search && props.params.search.split('&') || [];
  if (params && params.length > 0) {
    category = params[2].split('=')[1];
    if (category == '')
      category = 'Events';
    if (params[0] != 'location=')
      location = 'in ' + params[0].replace('location=', '').split('-')[0];
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
              ...style, display: "block", background: "red",
            }}
            onClick={onClick}
        />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
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

  let slideImages = [
    require('../../assets/images/freeEvent.png'),
    require('../../assets/images/event-img2.png'),
    require('../../assets/images/event-img3.png'),
    require('../../assets/images/event-img4.png')
  ];

  var deviceType = props.deviceType;

  var articles = props.articles;
  var listing = params.length == 0 && !props.params.tag && !props.params.askey && props.local;

  // Commented - 11-06
  // var newArticles = props.featuredArticles;
  // if (props.featuredArticles.length > 8) {
  //   newArticles = props.featuredArticles.splice(0, 8);
  // }

  const slideProperties = {
    duration: 5000,
    transitionDuration: 300,
    indicators: true,
    infinite: false,
    arrows: true,
    loop: true,

    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`Slide transition finished from ${oldIndex} to ${newIndex}`);
    }
  };

  const nextSlider = () => {
    const newValue = sliderIndex + 1;
    setSliderIndex(newValue);

    if (newValue > 3) {
      setSliderIndex(1);
    }
  };

  const previousSlider = () => {
    const newValue = sliderIndex - 1;
    setSliderIndex(newValue);

    if (newValue === 0) {
      setSliderIndex(3);
    }
  };

  useEffect((props) => {
    const timer = setTimeout(() => {
      const newValue = sliderIndex + 1;
      setSliderIndex(newValue);

      if (newValue > 3) {
        setSliderIndex(1);
      }
    }, 25000);

    return () => clearTimeout(timer);
  });

  const options = {
    items: 5,
    nav: true,

    rewind: true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true
  };

  return (
      <>
        {listing ?
            <>
              <div className="popular-events-container">
                <div className="location-label">
                  {params.length == 0 && !props.params.tag && props.local && (
                      <>
                        Popular events in
                        <div className="location-value">
                          {props.locality && (props.locality)}
                        </div>
                      </>
                  )}
                  {params.length > 0 && (
                      <>
                        Popular {category}
                        <div className="location-value">{location}</div>
                      </>
                  )}
                </div>

                <div className="home-slide-tablet-shown">

                  <OwlCarousel
                      items={1}
                      className="owl-theme"
                      loop
                      nav
                      autoplay ={true}
                      autoplaySpeed={2000}
                      autoplayTimeout={9000}
                      smartSpeed={750}
                      margin={10}
                  >
                    <div className="slider__item"><Slider1 /></div>
                    <div className="slider__item"><Slider2 /></div>
                    <div className="slider__item"><Slider3 /></div>
                  </OwlCarousel>
                </div>

                {/*  Tablet slider Shown-1  */}
                <div className="home-slide-tablet-hidden">
                  <div className="home-slide-container">
                    <Slide {...slideProperties}>
                      {slideImages.map((each, index) => (

                          <div key={index} className="each-slide">
                            <div style={{ backgroundImage: `url(${each})` }}>
                        <span>
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w3-display-topright social-top-left">
                            <SocialShare/>
                          </div>

                          <span className="garden-bg w3-display-bottomleft">
                            <div className="w3-display-bottomleft">
                              <div className="w3-row garden-bold">Diceys Garden</div>
                              <div className="w3-row date-font">Wed, 11 Dec From 12:00 to 04:00</div>
                              <div className="w3-row date-font">THE TEXT HERE DESCRIPTION</div>
                            </div>
                          </span>
                        </span>
                            </div>
                          </div>
                      ))}
                    </Slide>
                  </div>
                </div>
              </div>

              {/*  phone  */}
              <div className='mobile-download-container'>
                <div className='mobile-img'>
                    <div className="dm-width">
                      <div className="dm-device">
                        <div className="device">
                          <div className="screen">
                            <div className="slider">
                              <OwlCarousel items={1}
                                           className="owl-theme"
                                           loop
                                           nav
                                           margin={1}
                                           autoplay ={true}
                              >
                                <div className="slider__item slider__item--1"></div>
                                <div className="slider__item slider__item--2"></div>
                                <div className="slider__item slider__item--3"></div>
                                <div className="slider__item slider__item--4"></div>
                                <div className="slider__item slider__item--5"></div>
                              </OwlCarousel>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                <div className='download-section'>
                  <div className='download-header'>
                    <div>Download our App</div>
                    <div>Connect with people, accumulate points, share with your friends. Discover the best places with our app!</div>
                  </div>

                  <div className='download-btns'>
                    <div className='download-btn-googleplay'>
                      <img src={require('../../assets/images/googleplay.png')} alt='Google Play' />
                    </div>

                    <div className='download-btn-appstore'>
                      <img src={require('../../assets/images/appstore.png')} alt='App Store' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='featured-events-title'>
                Featured events
              </div>

              <div className="home-slide-tablet-shown">
                <div className='featured-events-container'>
                  <div className="events-container">
                    <div className="w3-row">
                      <div className="w3-col event-width1">
                        <div className="event-garden-bg">
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <span className='w3-display-bottomleft txt-width-even3 padding-bg'>
                            <div className="biggest-bold">Diceys Garden</div>
                            <div className="small-txt">Wed, 11 Dec From 12:00 to 04:00</div>
                            <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                          </span>
                        </div>
                      </div>

                      <div className="w3-col event-width2">
                        <div className="event-outdoor-bg">
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <span className='w3-display-bottomleft txt-width-even4 padding-bg'>
                        <div className="biggest-bold">Biggest 90s 00s disco outdoor festival</div>
                        <div className="small-txt">Thu, 16 Jan From 17:12 to 12:30</div>
                        <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                      </span>
                        </div>
                      </div>
                    </div>

                    <div className="w3-row">
                      <div className="w3-col event-width3">
                        <div className="event-half-left-bg">
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <span className='w3-display-bottomleft txt-width-even1 padding-bg'>
                        <div className="biggest-bold">Biggest 90s 00s disco outdoor festival</div>
                        <div className="small-txt">Web, 11 Dec From 12:00 to 04:00</div>
                        <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                      </span>
                        </div>
                      </div>

                      <div className="w3-col event-width3">
                        <div className="event-half-right-bg">
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <span className='w3-display-bottomleft txt-width-even2 padding-bg'>
                        <div className="biggest-bold">Cyber Expo Ireland 2019</div>
                        <div className="small-txt">Thu, 16 Jan From 17:12 to 12:30</div>
                        <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                      </span>
                        </div>
                      </div>
                    </div>

                    <div className="w3-row">
                      <div className="w3-col event-width1">
                        <div className="event-garden-bg">
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w3-display-topright social-top-right">
                            <SocialShare/>
                          </div>

                          <span className='w3-display-bottomleft txt-width-even3 padding-bg'>
                        <div className="biggest-bold">Diceys Garden</div>
                        <div className="small-txt">Wed, 11 Dec From 12:00 to 04:00</div>
                        <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                      </span>
                        </div>
                      </div>

                      <div className="w3-col event-width2">
                        <div className="event-outdoor-bg">
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <span className='w3-display-bottomleft txt-width-even4 padding-bg'>
                        <div className="biggest-bold">Biggest 90s 00s disco outdoor festival</div>
                        <div className="small-txt">Thu, 16 Jan</div>
                        <div className="small-txt">Thu, 16 Jan From 17:12 to 12:30</div>
                        <div className="medium-font-txt">THE TEXT HERE DESCRIPTION</div>
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w3-row more-events">
                    <div className="w3-right">More events ... </div>
                  </div>
                </div>
              </div>

              <div className="home-slide-tablet-hidden">
                <div className="home-slide-container">
                  <Slide {...slideProperties}>
                    {slideImages.map((each, index) => (

                        <div key={index} className="each-slide">
                          <div style={{ backgroundImage: `url(${each})` }}>
                        <span>
                          <div className='w3-display-topright'>
                            <div className="event-item-content">
                              <div className='item-header'>
                                <div className='control-btns'>
                                  <div className='control-share-btn'></div>
                                  <div className='control-like-btn'></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w3-display-topright social-top-left">
                            <SocialShare/>
                          </div>

                          <div className="garden-bg w3-display-bottomleft">
                            <div className="w3-display-bottomleft">
                              <div className="w3-row garden-bold">Diceys Garden</div>
                              <div className="w3-row date-font">Wed, 11 Dec From 12:00 to 04:00</div>
                              <div className="w3-row description-font">THE TEXT HERE DESCRIPTION</div>
                            </div>
                          </div>
                        </span>
                          </div>
                        </div>
                    ))}
                  </Slide>
                </div>

                <div className='more-events'>
                  More events...
                </div>
              </div>
            </>
            :
            <>
              <div className="popular-events-container">
                <div className="location-label">
                  {params.length === 0 && !props.params.tag && props.local && (
                      <>
                        Popular events in
                        <div className="location-value">
                          {props.curCountry && (props.curCountry)}
                        </div>
                      </>
                  )}
                  {params.length > 0 && (
                      <>
                        Popular {category}
                        <div className="location-value">
                          {location}
                        </div>
                      </>
                  )}
                </div>
              </div>

              <div className='featured-events-container'>
                <div className='events-content'>
                  {
                    props.articles.map((article, index) => {
                      return (
                          <ArticlePreview
                              key={index}
                              article={article}
                          />
                      )
                    })
                  }
                </div>
              </div>
            </>
        }
      </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);