import Banner from './Banner';
import { Link, withRouter } from 'react-router-dom';
import MainView from './MainView';
import React from 'react';
import Tags from './Tags';
import agent from '../../agent';
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
import $ from 'jquery';
import classNames from 'classnames';
import InputRange from 'react-input-range';
import Calendar from 'react-calendar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from 'react-i18next';

const Promise = global.Promise;

const google = window.google;

const mapStateToProps = state => ({
  ...state.home,
  articleListLoaded: [], // state.articleList.articleListLoaded - changed 11-06
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

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      curCountry: '',
      scope: 'nearby',
      sKey: '',
      date: '',
      curDate: new Date(),
      // date : [],
      category: '',
      selectedDay: null,
      priceRange: {
        min: 0,
        max: 240
      },
      tagInput: '',
      tags: [],
      author: '',
      // date: [new Date(), new Date()],
      pickupDate: false,
      yourEmail: '',
      deviceType: '',
      customStylesForSelect: {},
      locality: '',
      whenDate: '',
      positionFor: '',
    };

    this.onSearchKeyDown = ev => {
    };

    this.searchKeyChange = (ev) => {
      this.setState({ sKey: ev });
    };

    this.searchCompanies = (s) => {
      var locality = '';
      var province = '';
      var country = '';
      var search = '';
      var tab = 'all';
      var articlesPromise = agent.Articles.all;
      if (s != undefined) {
        for (var i = 0; i < s.gmaps.address_components.length; i++) {
          var address = s.gmaps.address_components[i];
          switch (address.types[0]) {
            case 'locality':
              locality = address.long_name;
              break;
            case 'administrative_area_level_1':
              province = address.long_name;
              break;
            case 'country':
              country = address.long_name;
              break;
          }
        }
        search = locality + ', ' + province + ', ' + country;
        this.setState({ sKey: search })

      }
    };

    this.search = () => {
      var search = 'location=';
      if (this.state.sKey && this.state.sKey !== '') {
        search += this.state.sKey.replace(/\, /g, '-');
      }
      search += '&date=';
      if (this.state.date && this.state.date !== '') {
        // search += moment(this.state.date).format("MM-DD-YYYY");
        search += this.state.date;
      }
      search += '&category=';
      if (this.state.category && this.state.category !== '') {
        search += this.state.category;
      }
      if (search !== '&date=&category=')
        this.props.history.push('/s/' + search);
      else
        this.props.history.push('/');
    };

    this.filterSearch = () => {
      var search = 'location=';
      if (this.state.sKey && this.state.sKey !== '') {
        search += this.state.sKey.replace(/\, /g, '-');
      }
      search += '&date=';
      if (this.state.date && this.state.date !== '') {
        // search += moment(this.state.date).format("MM-DD-YYYY");
        search += this.state.date;
      }
      search += '&category=';
      if (this.state.category && this.state.category !== '') {
        search += this.state.category;
      }
      search += '&priceRange=';
      if (this.state.priceRange && this.state.priceRange !== '') {
        search += this.state.priceRange['min'] + '-' + this.state.priceRange['max'];
      }
      search += '&tags=';
      if (this.state.tags && this.state.tags !== '') {
        search += this.state.tags.join('-');
      }
      search += '&author=';
      if (this.state.author && this.state.author !== '') {
        search += this.state.author;
      }
      if (search !== '&date=&category=&priceRange=0-0&tags=&author')
        this.props.history.push('/s/' + search);
      else
        this.props.history.push('/');
    };

    this.onChangeDate = (date) => {
      this.setState({ date: date });
    };

    this.onChange = date => this.setState({
      curDate: date,
      pickupDate: false,
      date: moment(date).format("YYYY-MM-DD"),
      dateType: 'picked date'
    });

    this.handleDayChange = (day) => {
      this.setState({ selectedDay: day });
    };

    this.changeTags = ev => {
      this.setState({ tagInput: ev.target.value });
    };

    this.watchForEnter = ev => {
      if (ev.keyCode === 13 && ev.target.value !== "") {
        ev.preventDefault();
        var tags = this.state.tags.concat([this.state.tagInput]);
        this.setState({
          tags: tags,
          tagInput: ''
        })
      }
    };

    this.removeTagHandler = ctag => () => {
      var tags = this.state.tags.filter(tag => tag !== ctag);
      this.setState({ tags: tags })
    };

    this.onChangeDateType = (value) => {
      var val = value;
      this.setState({ dateType: val });
      if (val == 'pick up date') {
        this.setState({ pickupDate: true });
      }
      else {
        this.setState({
          date: val
        })
      }
    }
  }

  componentWillMount() {
    if (this.props.match.params.category) {
      var category = this.props.match.params.category;
      var articlesPromise = agent.Articles.byCategory;
      // this.props.onLoad(null, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(category)]));
      // this.props.onClickCategory(category, page => agent.Articles.byCategory(category, page), agent.Articles.byCategory(category));
    }
    else if (this.props.match.params.search) {
      var search = this.props.match.params.search;
      var params = search.split('&');
      var date = params[1].replace('date=', '');
      var date_ = '';
      switch (date) {
        case 'today':
          date_ = moment().format("YYYY-MM-DD");
          break;
        case 'this week':
          date_ = moment().day(1).format("YYYY-MM-DD") + '+' + moment().day(7).format("YYYY-MM-DD");
          break;
        case 'next week':
          date_ = moment().day(8).format("YYYY-MM-DD") + '+' + moment().day(14).format("YYYY-MM-DD");;
          break;
        default:
          date_ = date;
      }
      var apiSearch = search.replace(date, date_);

      var tab = 'feed';
      var articlesPromise = agent.Articles.bySearch;
      // this.props.onLoad(tab, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(apiSearch)]));

      var sKey = params[0].replace('location=', '').replace(/\-/g, ', ');
      if (params.length > 2)
        var category = params[2].replace('category=', '');
      var priceRange = params[3].replace('priceRange=', '').split('-');
      var tags = params[4].replace('tags=', '');
      if (tags === '')
        tags = [];
      else
        tags = tags.split('-');

      var curDate = new Date();
      if (date.indexOf('-') > -1) {
        curDate = new Date(date);
      }

      this.setState({
        sKey: sKey,
        date: date,
        curDate: curDate,
        category: category,
        priceRange: {
          min: priceRange[0],
          max: priceRange[1]
        },
        tags: tags,
        author: params[5].replace('author=', ''),
        dateType: date
      });
    }
    else if (this.props.match.params.tag) {
      var tag = this.props.match.params.tag;
      var articlesPromise = agent.Articles.byTag;
      // this.props.onLoad(null, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(tag)]));
    }
    else if (this.props.match.params.askey) {
      var tag = this.props.match.params.askey;
      var articlesPromise = agent.Articles.advancedSearch;
      // this.props.onLoad(null, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(tag)]));
    }
    else {
      var locality = '';
      var province = '';
      var country = '';
      var search = 'mylocation=';
      var _self = this;

      navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          var google_maps_geocoder = new google.maps.Geocoder();
          var google_map_pos = new google.maps.LatLng(lat, lng);
          var geo_loc = '';
          new Promise(function (resolve) {
            google_maps_geocoder.geocode(
              { 'latLng': google_map_pos },
              function (results, status) {
                if (status == google.maps.GeocoderStatus.OK && results[0]) {
                  resolve(results)
                }
              }
            );

          })
            .then(function (results) {
              for (var i = 0; i < results[0].address_components.length; i++) {
                var address = results[0].address_components[i];
                switch (address.types[0]) {
                  case 'locality':
                    locality = address.long_name;
                    break;
                  case 'administrative_area_level_1':
                    province = address.long_name;
                    break;
                  case 'country':
                    country = address.long_name;
                    break;
                }
              }
              search += locality + '-' + province + '-' + country;
              var tab = 'all';
              var articlesPromise = agent.Articles.all;
              if (search !== '||') {
                tab = 'feed';
                articlesPromise = agent.Articles.bySearch;
                _self.setState({
                  scope: 'nearby',
                  curCountry: country,
                  locality: locality
                });
              }
              // _self.props.onLoad(tab, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(search)]));
            })
        },
        function (error) {
          if (error.code == error.PERMISSION_DENIED)
            alert("we can't access to your geolocation, allow it please.");
          var tab = 'all';
          var articlesPromise = agent.Articles.all;
          // _self.props.onLoad(tab, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise()]));
        }
      );
    }
    $("html, body").animate({ scrollTop: 0 }, 0);

    window.addEventListener('resize', this.handleResize.bind(this));
    this.handleResize();

    this.props.categories.map(v => {
      v.value = v.name;
      v.label = v.name;
    }, this);
  }

  componentWillUnmount() {
    this.props.onUnload();

    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    if (prevState.whenDate !== this.state.whenDate) {
    }

    if (prevState.positionFor !== this.state.positionFor) {
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      var category = nextProps.match.params.category;
      var articlesPromise = agent.Articles.byCategory;
      // this.props.onLoad(null, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(category)]));
    }
    if (this.props.match.params.tag !== nextProps.match.params.tag) {
      var tag = nextProps.match.params.tag;
      var articlesPromise = agent.Articles.byTag;
      // this.props.onLoad(null, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(tag)]));
    }
    if (this.props.match.params.askey !== nextProps.match.params.askey) {
      var tag = nextProps.match.params.askey;
      var articlesPromise = agent.Articles.advancedSearch;
      // this.props.onLoad(null, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(tag)]));
    }
    if (this.props.match.params.search !== nextProps.match.params.search) {
      var search = nextProps.match.params.search;
      var params = search.split('&');
      var date = params[1].replace('date=', '');
      var date_ = '';
      switch (date) {
        case 'today':
          date_ = moment().format("YYYY-MM-DD");
          break;
        case 'this week':
          date_ = moment().day(1).format("YYYY-MM-DD") + '+' + moment().day(7).format("YYYY-MM-DD");
          break;
        case 'next week':
          date_ = moment().day(8).format("YYYY-MM-DD") + '+' + moment().day(14).format("YYYY-MM-DD");;
          break;
        default:
          date_ = date;
      }
      var apiSearch = search.replace(date, date_);

      var tab = 'feed';
      var articlesPromise = agent.Articles.bySearch;
      // this.props.onLoad(tab, articlesPromise, Promise.all([agent.Articles.getAllCategories(), articlesPromise(apiSearch)]));

      var sKey = params[0].replace('location=', '').replace(/\-/g, ', ');
      if (params.length > 2)
        var category = params[2].replace('category=', '');
      var priceRange = params[3].replace('priceRange=', '').split('-');
      var tags = params[4].replace('tags=', '');
      if (tags === '')
        tags = [];
      else
        tags = tags.split('-');

      var curDate = new Date();
      if (date.indexOf('-') > -1) {
        curDate = new Date(date);
      }

      this.setState({
        sKey: sKey,
        date: date,
        curDate: curDate,
        category: category,
        priceRange: {
          min: priceRange[0],
          max: priceRange[1]
        },
        tags: tags,
        author: params[5].replace('author=', ''),
        dateType: date,
        categories: []
      });
    }
  }

  handleResize() {
    const { deviceType } = this.state;

    if (window.innerWidth > 767) {
      this.setState({ whenDate: 'Today' })
      this.setState({ positionFor: 'Select ...' })
    } else {
      this.setState({ whenDate: 'When ?' })
      this.setState({ positionFor: 'Select Event Type' })
    }

    if (window.innerWidth > 1440) {
      if (deviceType !== 'desktop-l') {
        this.setState({
          customStylesForSelect: {
            container: (provided, state) => (
              {
                ...provided,
                borderBottom: 'solid 1px #000000',
              }
            ),
            control: (provided, state) => (
              {
                ...provided,
                border: 'none',
                outline: 'none',
                minHeight: 20
              }
            ),
            group: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            ),
            indicatorSeparator: (provided, state) => (
              {
                ...provided,
                display: 'none'
              }
            ),
            placeholder: (provided, state) => (
              {
                ...provided,
                fontSize: '14px'
              }
            ),
            valueContainer: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            )
          }
        });

        this.setState({ deviceType: 'desktop-l' })
      }
    } else if (window.innerWidth > 1023) {
      if (deviceType !== 'desktop-s') {
        this.setState({
          customStylesForSelect: {
            container: (provided, state) => (
              {
                ...provided,
                borderBottom: 'solid 1px #000000',
              }
            ),
            control: (provided, state) => (
              {
                ...provided,
                border: 'none',
                outline: 'none',
                minHeight: 20
              }
            ),
            group: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            ),
            indicatorSeparator: (provided, state) => (
              {
                ...provided,
                display: 'none'
              }
            ),
            placeholder: (provided, state) => (
              {
                ...provided,
                fontSize: '1.2vw'
              }
            ),
            valueContainer: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            )
          }
        });

        this.setState({ deviceType: 'desktop-s' })
      }
    } else if (window.innerWidth > 767) {
      if (deviceType !== 'tablet') {
        this.setState({
          customStylesForSelect: {
            container: (provided, state) => (
              {
                ...provided,
                borderBottom: 'solid 1px #000000',
              }
            ),
            control: (provided, state) => (
              {
                ...provided,
                border: 'none',
                outline: 'none',
                minHeight: 20
              }
            ),
            group: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            ),
            indicatorSeparator: (provided, state) => (
              {
                ...provided,
                display: 'none'
              }
            ),
            input: (provided, state) => (
              {
                ...provided,
                padding: 0,
                margin: 0
              }
            ),
            option: (provided, state) => (
              {
                ...provided,
                fontSize: '14px'
              }
            ),
            placeholder: (provided, state) => (
              {
                ...provided,
                fontSize: '14px'
              }
            ),
            valueContainer: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            )
          }
        });

        this.setState({ deviceType: 'tablet' })
      }
    } else if (window.innerWidth > 320) {
      if (deviceType !== 'mobile') {
        this.setState({
          customStylesForSelect: {
            container: (provided, state) => (
              {
                ...provided,
                borderBottom: 'solid 1px #000000',
              }
            ),
            control: (provided, state) => (
              {
                ...provided,
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                minHeight: 20
              }
            ),
            group: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            ),
            indicatorSeparator: (provided, state) => (
              {
                ...provided,
                display: 'none'
              }
            ),
            input: (provided, state) => (
              {
                ...provided,
                padding: 0,
                margin: 0
              }
            ),
            option: (provided, state) => (
              {
                ...provided,
                fontSize: '14px'
              }
            ),
            placeholder: (provided, state) => (
              {
                ...provided,
                fontSize: '14px'
              }
            ),
            valueContainer: (provided, state) => (
              {
                ...provided,
                padding: 0
              }
            )
          }
        });

        this.setState({ deviceType: 'mobile' })
      }
    }
  }

  onYourEmailChanged(event) {
    this.setState({ yourEmail: event.target.value })
  }

  getFeaturedEvents(eventsList) {
    return eventsList.map((event, index) => {
      return (
        <div key={index} className='event-item'>
          <img src={event.photos[0]} />

          <div className='event-item-content'>
            <div className='item-header'>
              <div className='control-btns'>
                <div className='control-share-btn'></div>
                <div className='control-like-btn'></div>
              </div>
            </div>

            <div className='event-infos'>
              <div className='event-title'>{event.title}</div>
              <div className='event-date'>{event.eventDate}</div>
              <div className='event-time'>{event.eventTimeFrom} + {event.eventTimeTo}</div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const { yourEmail, deviceType, customStylesForSelect } = this.state
    var params = this.props.match.params.search && this.props.match.params.search.split('&') || [];

    var dateTypes = [
      { value: 'today', label: 'Today' },
      { value: 'this week', label: 'This week' },
      { value: 'next week', label: 'Next week' },
      { value: 'pick up date', label: 'Pick up date' },
    ];

    var featuredEventsList = this.props.featuredArticles;

    featuredEventsList = [
      {
        img: 'event-img3',
        title: 'Diceys Garden',
        date: 'Wed, 11 Dec',
        time: '12:00 - 04:00'
      },
      {
        img: 'event-img4',
        title: 'Biggest 90s 00s disco outdoor festival',
        date: 'Thu, 16 Jan',
        time: '10:12 - 12:30'
      },
      {
        img: 'event-img1',
        title: 'Biggest 90s 00s disco outdoor festival',
        date: 'Wed, 11 Dec',
        time: '12:00 - 04:00'
      },
      {
        img: 'event-img2',
        title: 'Cyber Expo Ireland 2019',
        date: 'Thu, 16 Jan',
        time: '10:12 - 12:30'
      },
      {
        img: 'event-img3',
        title: 'Diceys Garden',
        date: 'Wed, 11 Dec',
        time: '12:00 - 04:00'
      },
      {
        img: 'event-img4',
        title: 'Biggest 90s 00s disco outdoor festival',
        date: 'Thu, 16 Jan',
        time: '10:12 - 12:30'
      }
    ];

    const {slider} = this.state;

    const DropdownIndicator = (
      props: components.DropdownIndicator
    ) => {
      return (
        <components.DropdownIndicator {...props}>
          <div className='dropdown-icon'>
            <img src={require('../../assets/images/arrow_down.png')} />
          </div>
        </components.DropdownIndicator>
      );
    };

    return (
      <div className="home-page">
        <div className="search-field">
          <div className="search-field-container">

            <div className="text-white join-community lapDeskTop-hidden">
              Join Glosfy Community
            </div>

            <div className="join-txt">
              <div className="right-side">
                <div className="w3-display-bottomright ">
                  Search events in your favourite city
                  </div>
              </div>

              <div className="left-side lapDeskTop-hidden">
                <div className="title-description">Discover exotic places, go out and enjoy with your people</div>
                <div className="title-description">Create new experiences, while traveling or in your city</div>
                <div className="title-description">Browse by your favourite type of music</div>
              </div>
            </div>

            <div className="search-input-section">
              <Link to='/register' className="join-btn-show"> Join now</Link>
              <ul className="search-input">
                <li>
                  <Geosuggest
                    placeholder="Where to?"
                    inputClassName="form-control form-control-lg"
                    initialValue={this.state.sKey}
                    onChange={(e) => this.searchKeyChange(e)}
                    onKeyDown={(e) => this.onSearchKeyDown(e)}
                    skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}
                    onSuggestSelect={s => this.searchCompanies(s)}
                  />
                </li>
                <li>
                  <Select
                    onChange={(e) => this.onChangeDateType(e)}
                    options={dateTypes}
                    value={{
                      value: this.state.whenDate.toLowerCase(),
                      label: this.state.whenDate
                    }}
                  />
                  <div className={classNames("w__modal__wrapper", this.state.pickupDate && 'opened')}>
                    <div className="w__modal date__block">
                      <div className="w__modal__header">
                        <h3>Pick up date</h3>
                      </div>
                      <div className="w__modal__content">
                        <Calendar
                          onChange={this.onChange}
                          value={this.state.curDate}
                        />
                      </div>
                      <div className="w__modal__footer">
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Select
                    onChange={(e) => this.setState({ category: e })}
                    options={this.props.categories}
                    value={{
                      value: this.state.positionFor.toLowerCase(),
                      label: this.state.positionFor
                    }}
                  />
                </li>
                <div
                  className="search-btn"
                  onClick={(e) => this.filterSearch()} >
                  <img src={require('../../assets/images/arrow_right.png')} alt='arrow_right' />
                </div>
              </ul>
            </div>

            <div className="community-show lapDeskTop-show">
              Join Glosfy Community
            </div>

            <div className="left-side-show lapDeskTop-show">
              <div className="title-description-show">Discover exotic places, go out and enjoy with your people</div>
              <div className="title-description-show">Create new experiences, while traveling or in your city</div>
              <div className="title-description-show">Browse by your favourite type of music</div>
            </div>

            <div className="search-input-section-hidden">
              <Link to='/register' className="join-btn-hidden"> Join now</Link>
            </div>

          </div>
        </div>

        {this.props.articleListLoaded && (
          <MainView
            params={this.props.match.params}
            local="local"
            curCountry={this.state.curCountry}
            locality={this.state.locality}
            deviceType={this.state.deviceType}
          />
        )}

        <div className='subscribe-form pb-4'>
          <p>Join Glosfy community!</p>

          <div className='form-content'>
            <div className='input-content'>
              <input placeholder='Enter your email' value={yourEmail} onChange={(event) => this.onYourEmailChanged(event)} />
            </div>

            <div className='subscribe-btn'>
              Subscribe
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
