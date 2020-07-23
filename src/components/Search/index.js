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
import classNames from 'classnames';
// import DatePicker from "react-datepicker";
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import * as moment from 'moment';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from 'react-i18next';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { Accordion, Button, Card, useAccordionToggle } from 'react-bootstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Pagination } from 'react-bootstrap';
import SocialShare from '../SocialShare';


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

const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 0, lng: 0 }}
    >
      <Marker
          position={{ lat: 0, lng: 0 }}
      />
    </GoogleMap>
);
class Section extends React.Component {
  constructor() {
    super();

    this.state = {
      open: true,
      class: "section open"
    }
  }

  handleClick = () => {
    if (this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    } else {
      this.setState({
        open: true,
        class: "section open"
      });
    }
  };
  render() {
    return (
        <div className={this.state.class}>
          <button class="toggleButton">toggle</button>
          <div className="sectionhead px-0 fx-3 text-bold" onClick={this.handleClick}>{this.props.title}</div>
          <div className="articlewrap">
            <div className="article  px-0">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}

class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      dateTab: 'anyDay',
      categoryTab: 'anyCategory',
      priceTab: 'anyPrice',
      value: { min: 500, max: 5000 },
      formatTab: 'anyFormat',
      date: new Date(),
    }
  }

  onChange = date => this.setState({ date });
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
      ],
      tag: ''
    };

    return (
        <div className="d-flex">
          <div class="w3-row full-width border-top-black">

            {/*  Sidebar  */}
            <div class="w3-col sidebar-max-width tablet-sidebar-shown">
              <div className="sidebar-scroll">
                <div className="main filter-container">

                  <div className="filter-tablet-shown">
                    <div className="d-flex justify-content-between filter-padding">
                      <div className="fx-3 text-bold">Filters <span className="red-bubble">3</span></div>
                      <div className="fx-3">Clear</div>
                    </div>
                  </div>

                {/* <div className="title">{this.props.title}</div> */}

                <div className="location-font">Location</div>
                <div className="search__block my-4 padding-minus">
                  <input
                      className="form-control advanced-search"
                      type="text"
                      placeholder="Location"
                  />
                  <div className="search__btn">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </div>
                </div>

                <Section title="Date">
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "anyDay" && "active")} onClick={() => this.setState({ dateTab: 'anyDay' })} >Any Day</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "pickDate" && "active")} onClick={() => this.setState({ dateTab: 'pickDate' })}>Pick A Date..</div>
                  {this.state.dateTab === "pickDate" && <Calendar
                      onChange={this.onChange}
                      value={this.state.date}
                  />}
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "today" && "active")} onClick={() => this.setState({ dateTab: 'today' })}>Today</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "tomorrow" && "active")} onClick={() => this.setState({ dateTab: 'tomorrow' })}>Tomorrow</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "weekend" && "active")} onClick={() => this.setState({ dateTab: 'weekend' })}>This Weekend</div>

                  <div className="more-details" data-toggle="collapse" data-target="#Options1">
                    More dates
                  </div>
                  <span id="Options1" className="collapse">
                    <div className="menu-title">
                        Yesterday
                    </div>
                    <div className="menu-title">
                        This month
                    </div>
                    <div className="menu-title">
                        This Year
                    </div>
                  </span>
                </Section>

                <Section title="Category">
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "anyCategory" && "active")} onClick={() => this.setState({ categoryTab: 'anyCategory' })} >Any category</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "nightclub" && "active")} onClick={() => this.setState({ categoryTab: 'nightclub' })}>Nightclub</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "beachclub" && "active")} onClick={() => this.setState({ categoryTab: 'beachclub' })}>Beachclub</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "concert" && "active")} onClick={() => this.setState({ categoryTab: 'concert' })}>Concerts</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "festival" && "active")} onClick={() => this.setState({ categoryTab: 'festival' })}>Festivals</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "pub" && "active")} onClick={() => this.setState({ categoryTab: 'pub' })}>Pubs</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "bar" && "active")} onClick={() => this.setState({ categoryTab: 'bar' })}>Bars</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "livemusic" && "active")} onClick={() => this.setState({ categoryTab: 'livemusic' })}>Live Music</div>

                  <div className="more-details" data-toggle="collapse" data-target="#Options2">
                    More categories
                  </div>
                  <span id="Options2" className="collapse">
                    <div className="menu-title">
                        Category 1
                    </div>
                    <div className="menu-title">
                        Category 2
                    </div>
                    <div className="menu-title">
                        Category 3
                    </div>
                    <div className="menu-title">
                        Category 4
                    </div>
                  </span>
                </Section>

                <Section title="Price">
                  <div class="pb-4 price-range-padding">
                    <InputRange
                        class="py-4 mb-4"
                        maxValue={10000}
                        minValue={0}
                        formatLabel={value => `$${value}`}
                        value={this.state.value}
                        onChange={value => this.setState({ value })} />
                  </div>

                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.priceTab === "anyPrice" && "active")} onClick={() => this.setState({ priceTab: 'anyPrice' })} >Any Price</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.priceTab === "Free" && "active")} onClick={() => this.setState({ priceTab: 'Free' })}>Free</div>
                  <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.priceTab === "Paid" && "active")} onClick={() => this.setState({ priceTab: 'Paid' })}>Paid</div>

                  <div className="search__block my-4">
                    <input
                        className="form-control advanced-search"
                        type="text"
                        placeholder="Tags"
                    />
                    <div className="search__btn">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                  </div>

                </Section>
              </div>
              </div>

              <div className="trending-margin">
                <div className="w3-center">
                  <img src={require('../../assets/images/chart.png')} className="img-chart"/>
                </div>
                <div className="w3-center">
                  Trending searched in London, United Kingdom
                </div>
              </div>
            </div>

            <div className="w3-col sidebar-max-width collapse" id="Filters">
              <div className="sidebar-scroll">
                <div className="main filter-container">

                  <div className="filter-tablet-shown">
                    <div className="d-flex justify-content-between filter-padding">
                      <div className="fx-3 text-bold">Filters <span className="red-bubble">3</span></div>
                      <div className="fx-3">Clear</div>
                    </div>
                  </div>

                  {/* <div className="title">{this.props.title}</div> */}

                  <div className="location-font">Location</div>
                  <div className="search__block my-4 padding-minus">
                    <input
                        className="form-control advanced-search"
                        type="text"
                        placeholder="Location"
                    />
                    <div className="search__btn">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                  </div>

                  <Section title="Date">
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "anyDay" && "active")}
                        onClick={() => this.setState({dateTab: 'anyDay'})}>Any Day
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "pickDate" && "active")}
                        onClick={() => this.setState({dateTab: 'pickDate'})}>Pick A Date..
                    </div>
                    {this.state.dateTab === "pickDate" && <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />}
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "today" && "active")}
                        onClick={() => this.setState({dateTab: 'today'})}>Today
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "tomorrow" && "active")}
                        onClick={() => this.setState({dateTab: 'tomorrow'})}>Tomorrow
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.dateTab === "weekend" && "active")}
                        onClick={() => this.setState({dateTab: 'weekend'})}>This Weekend
                    </div>

                    <div className="more-details" data-toggle="collapse" data-target="#Options3">
                      More dates
                    </div>
                    <span id="Options3" className="collapse">
                    <div className="menu-title">
                        Yesterday
                    </div>
                    <div className="menu-title">
                        This month
                    </div>
                    <div className="menu-title">
                        This Year
                    </div>
                  </span>
                  </Section>

                  <Section title="Category">
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "anyCategory" && "active")}
                        onClick={() => this.setState({categoryTab: 'anyCategory'})}>Any category
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "nightclub" && "active")}
                        onClick={() => this.setState({categoryTab: 'nightclub'})}>Nightclub
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "beachclub" && "active")}
                        onClick={() => this.setState({categoryTab: 'beachclub'})}>Beachclub
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "concert" && "active")}
                        onClick={() => this.setState({categoryTab: 'concert'})}>Concerts
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "festival" && "active")}
                        onClick={() => this.setState({categoryTab: 'festival'})}>Festivals
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "pub" && "active")}
                        onClick={() => this.setState({categoryTab: 'pub'})}>Pubs
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "bar" && "active")}
                        onClick={() => this.setState({categoryTab: 'bar'})}>Bars
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.categoryTab === "livemusic" && "active")}
                        onClick={() => this.setState({categoryTab: 'livemusic'})}>Live Music
                    </div>

                    <div className="more-details" data-toggle="collapse" data-target="#Options4">
                      More categories
                    </div>
                    <span id="Options4" className="collapse">
                    <div className="menu-title">
                        Category 1
                    </div>
                    <div className="menu-title">
                        Category 2
                    </div>
                    <div className="menu-title">
                        Category 3
                    </div>
                    <div className="menu-title">
                        Category 4
                    </div>
                  </span>
                  </Section>

                  <Section title="Price">
                    <div className="pb-4 price-range-padding">
                      <InputRange
                          class="py-4 mb-4"
                          maxValue={10000}
                          minValue={0}
                          formatLabel={value => `$${value}`}
                          value={this.state.value}
                          onChange={value => this.setState({value})}/>
                    </div>

                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.priceTab === "anyPrice" && "active")}
                        onClick={() => this.setState({priceTab: 'anyPrice'})}>Any Price
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.priceTab === "Free" && "active")}
                        onClick={() => this.setState({priceTab: 'Free'})}>Free
                    </div>
                    <div
                        className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.priceTab === "Paid" && "active")}
                        onClick={() => this.setState({priceTab: 'Paid'})}>Paid
                    </div>

                    <div className="search__block my-4">
                      <input
                          className="form-control advanced-search"
                          type="text"
                          placeholder="Tags"
                      />
                      <div className="search__btn">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </div>
                    </div>

                  </Section>
                </div>
              </div>

              <div className="trending-margin">
                <div className="w3-center">
                  <img src={require('../../assets/images/chart.png')} className="img-chart"/>
                </div>
                <div className="w3-center">
                  Trending searched in London, United Kingdom
                </div>
              </div>
            </div>

            <div className="w3-col search-content right-img-width">

                {/*  Search input tag  */}
                <div className=" d-flex-owner justify-content-start align-items-center search-left-margin">
                  <div className="fx-1 text-bold pr-2 search-txt">

                    <div className="w3-bar">
                      <div className="w3-bar-item tablet-shown-filter">
                        <img src={require('../../assets/images/filter.png')} className="img-filter" data-toggle="collapse" data-target="#Filters"/>
                        <div className="red-txt-filter">Filters</div>
                      </div>
                      <div className="w3-bar-item search-top">Search anything in</div>
                    </div>
                  </div>
                  <div className="search__block">
                    <input
                        className="w3-input form-control advanced-search custom-input-location"
                        type="text"
                        placeholder="What are you looking for?"
                        required
                    />
                    <div className="search__btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div class="d-flex my-4 row help-card">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src={require('../../assets/images/freeEvent.png')} class="img-event" />
                      <div className="amountButton-red">Free</div>
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div class="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div class="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>

                        <div className='w3-right control-btns'>
                          <div className="control-share-btn modify-padding"></div>
                          <div className="control-like-btn modify-padding"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex my-4 row help-card">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src={require('../../assets/images/paidEvent.png')} class="img-event" />
                      <div className="amountButton-blue">From 12 $ to 280$</div>
                    </div>

                    <div class="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div class="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div class="w-100">
                        <div class="fx-3 text-grey">Olympia London • London</div>
                        <div class="fx-3 text-blue">Wed, 11 Dec</div>
                        <div class="d-flex align-items-start justify-content-between">
                          <div class="fx-3 text-blue">12:00 - 04:00</div>
                        </div>

                        <div className='w3-right control-btns'>
                          <a className="social-show"> <SocialShare/></a>
                          <div className="control-share-btn"></div>
                          <div className="control-like-btn"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex my-4 row help-card social-hide">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={require('../../assets/images/freeEvent.png')} className="img-event"/>
                      <div className="amountButton-red">Free</div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div className="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div className="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>
                        <div className='w3-right control-btns'>
                          <div className="control-share-btn"></div>
                          <div className="control-like-btn"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex my-4 row help-card">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src={require('../../assets/images/paidEvent.png')} class="img-event" />
                      <div className="amountButton-blue">From 12 $ to 280$</div>
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div class="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div className="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>

                        <div className='w3-right control-btns'>
                          <a className="social-hide"> <SocialShare/></a>
                          <div className="control-share-btn modify-padding"></div>
                          <div className="control-like-btn modify-padding"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex my-4 row help-card social-hide">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={require('../../assets/images/freeEvent.png')} className="img-event"/>
                    <div className="amountButton-red">Free</div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                    <div className="text-bold">Biggest 90s 00s disco outdoor festival</div>
                    <div className="description-font">
                      This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                    </div>
                    <div className="w-100">
                      <div className="fx-3 text-grey">Olympia London • London</div>
                      <div className="fx-3 text-blue">Wed, 11 Dec</div>
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="fx-3 text-blue">12:00 - 04:00</div>
                      </div>
                      <div className='w3-right control-btns'>
                        <div className="control-share-btn"></div>
                        <div className="control-like-btn"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div class="d-flex my-4 row help-card">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src={require('../../assets/images/paidEvent.png')} class="img-event" />
                      <div className="amountButton-blue">From 12 $ to 280$</div>
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div class="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div className="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>

                        <div className='w3-right control-btns'>
                          <a className="social-hide"> <SocialShare/></a>
                          <div className="control-share-btn modify-padding"></div>
                          <div className="control-like-btn modify-padding"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex my-4 row help-card social-hide">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={require('../../assets/images/freeEvent.png')} className="img-event"/>
                    <div className="amountButton-red">Free</div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                    <div className="text-bold">Biggest 90s 00s disco outdoor festival</div>
                    <div className="description-font">
                      This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                    </div>
                    <div className="w-100">
                      <div className="fx-3 text-grey">Olympia London • London</div>
                      <div className="fx-3 text-blue">Wed, 11 Dec</div>
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="fx-3 text-blue">12:00 - 04:00</div>
                      </div>
                      <div className='w3-right control-btns'>
                        <div className="control-share-btn"></div>
                        <div className="control-like-btn"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div class="d-flex my-4 row help-card">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src={require('../../assets/images/paidEvent.png')} class="img-event" />
                      <div className="amountButton-blue">From 12 $ to 280$</div>
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div class="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div className="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>

                        <div className='w3-right control-btns'>
                          <a className="social-hide"> <SocialShare/></a>
                          <div className="control-share-btn modify-padding"></div>
                          <div className="control-like-btn modify-padding"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex my-4 row help-card social-hide">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={require('../../assets/images/freeEvent.png')} className="img-event"/>
                    <div className="amountButton-red">Free</div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                    <div className="text-bold">Biggest 90s 00s disco outdoor festival</div>
                    <div className="description-font">
                      This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                    </div>
                    <div className="w-100">
                      <div className="fx-3 text-grey">Olympia London • London</div>
                      <div className="fx-3 text-blue">Wed, 11 Dec</div>
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="fx-3 text-blue">12:00 - 04:00</div>
                      </div>
                      <div className='w3-right control-btns'>
                        <div className="control-share-btn"></div>
                        <div className="control-like-btn"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div class="d-flex my-4 row help-card">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src={require('../../assets/images/paidEvent.png')} class="img-event" />
                      <div className="amountButton-blue">From 12 $ to 280$</div>
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div class="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div className="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>

                        <div className='w3-right control-btns'>
                          <a className="social-hide"> <SocialShare/></a>
                          <div className="control-share-btn modify-padding"></div>
                          <div className="control-like-btn modify-padding"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex my-4 row help-card social-hide">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={require('../../assets/images/freeEvent.png')} className="img-event"/>
                    <div className="amountButton-red">Free</div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                    <div className="text-bold">Biggest 90s 00s disco outdoor festival</div>
                    <div className="description-font">
                      This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                    </div>
                    <div className="w-100">
                      <div className="fx-3 text-grey">Olympia London • London</div>
                      <div className="fx-3 text-blue">Wed, 11 Dec</div>
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="fx-3 text-blue">12:00 - 04:00</div>
                      </div>
                      <div className='w3-right control-btns'>
                        <div className="control-share-btn"></div>
                        <div className="control-like-btn"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div class="d-flex my-4 row help-card">
                  <div class="row">
                    <div class="col-lg-6">
                      <img src={require('../../assets/images/paidEvent.png')} class="img-event" />
                      <div className="amountButton-blue">From 12 $ to 280$</div>
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div class="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div className="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>

                        <div className='w3-right control-btns'>
                          <a className="social-hide"> <SocialShare/></a>
                          <div className="control-share-btn modify-padding"></div>
                          <div className="control-like-btn modify-padding"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex my-4 row help-card social-hide">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={require('../../assets/images/freeEvent.png')} className="img-event"/>
                      <div className="amountButton-red">Free</div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start txt-padding">
                      <div className="text-bold">Biggest 90s 00s disco outdoor festival</div>
                      <div className="description-font">
                        This description is "Discover exotic places, go out and enjoy with your people. Discover exotic places, go out and enjoy with your people."
                      </div>
                      <div className="w-100">
                        <div className="fx-3 text-grey">Olympia London • London</div>
                        <div className="fx-3 text-blue">Wed, 11 Dec</div>
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="fx-3 text-blue">12:00 - 04:00</div>
                        </div>
                        <div className='w3-right control-btns'>
                          <div className="control-share-btn"></div>
                          <div className="control-like-btn"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nex-previous-btn">
                  <div className="text-box-start start-finish-time">
                    <img className="back-next-btn" src={require('../../assets/images/back.png')}/>
                  </div>

                  <a className="number-left">2 </a>
                  <a> ...</a>
                  <a className="number-right"> 9999</a>

                  <div className="text-box-start start-finish-time">
                    <img className="back-next-btn" src={require('../../assets/images/next.png')}/>
                  </div>
                </div>
            </div>

            <div className="w3-col w3-right search-content right-map-width">
                <div className="map-container pl-0 pr-0">
                  <div className="google-map-block p-0">
                    <MapWithAMarker
                        containerElement={<div style={{height: `560px`}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                        lat={0}
                        lng={0}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
