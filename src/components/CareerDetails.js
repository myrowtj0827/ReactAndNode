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
const SendResume = props => {
    return (
        <div className="w3-container">
            <div className="w3-row send-top-padding">
                <div className="text-center send-txt-bold">Send a Resume</div>
                <div className="w3-row name-top-padding">
                    <div className="w3-half first-name">
                        <input className="w3-input" type="text" placeholder="First name" required/>
                    </div>
                    <div className="w3-half last-name">
                        <input className="w3-input" type="text" placeholder="Last name" required/>
                    </div>
                </div>

                <div className="w3-row name-top-padding">
                    <input className="w3-input" type="text" placeholder="Email" required/>
                </div>

                <div className="w3-row">
                    <div className="resume-description">Description</div>
                    <div className="text-box">
                        <textarea/>
                    </div>
                </div>
            </div>

            <div className="w3-row upload-file">
                <input type="file" id="myFile" name="filename"></input>
            </div>

            <div className="btn-support">
                <div className="btn-save">Send a resume</div>
            </div>
        </div>
    );
};
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
      <div className="home-page career-container">
          <div className="career-bg">
              <div className="career-div career-center">
                  <div className="w3-row">
                      <div className="career-font">Search Jobs</div>
                  </div>
                  <div className="w3-row w3-bar search-align">
                      <div className="w3-bar-item">
                          <input className="w3-input" type="text" placeholder="I'm looking for" required/>
                      </div>
                      <div className="w3-bar-item">
                          <select className="country-option">
                              <option selected disabled>United Kingdom, London</option>
                              <option>Spain</option>
                              <option>Italy</option>
                              <option>Russia</option>
                              <option>Poland</option>
                              <option>India</option>
                              <option>South Africa</option>
                          </select>
                      </div>

                      <div className="w3-bar-item">
                          <img className="search-bg" src={require('../assets/images/search-btnn.png')} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
       {/* <img className="banner-img" src={require('../assets/images/help-bck.png')} alt='banner' />*/}
       {/*<div className="overlay-div "> <h2 className="mb-4">Search Jobs</h2>*/}
       {/* <div className="search__block text-black">*/}
       {/*   <input*/}
       {/*     className="form-control advanced-search-career"*/}
       {/*     type="text"*/}
       {/*     placeholder="I am looking for"*/}
       {/*     value={this.state.askey}*/}
       {/*     onChange={ (e) => this.setState({ askey : e.target.value }) }*/}
       {/*     onKeyPress={ ev => this.props.advancedSearch(ev, this.state.askey) }*/}
       {/*   />*/}
       {/*   <Geosuggest*/}
       {/*                     placeholder="Location"*/}
       {/*                     inputClassName="form-control advanced-search-location"*/}
       {/*                     skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}*/}
       {/*                     onSuggestSelect={s => this.parseLocation(s)}*/}
       {/*                   />*/}
       {/*   <div className="search__btn">*/}
       {/*     <i className="fa fa-search" aria-hidden="true"></i>*/}
       {/*   </div>*/}
       {/* </div></div>*/}
        
        <div className="d-flex">
            <div className="center-container-career row">
                <div className="col-md-8 col-sm-12 mt-4">
                    <div>
                        <div className="fx-1 lorem-title">Lorem ipsum</div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="fx-3"><i class="fa fa-map-marker mr-2 icon-location-size"></i>London, United Kingdom</div>
                            <div className='control-btns d-flex align-items-end justify-content-end'>
                                <img src={require('../assets/images/share.png')} class="mr-3" width="15"/>
                                <div className="fa fa-heart-o text-red"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 text-bold fx-2">Type of employment</div>
                    <div className="mt-2 fx-2">Full time</div>
                    <div className="mt-5 fx-2 lorem-small-bold">Lorem Ipsum</div>
                    <div className="mt-2 fx-2 lorem-small">
                        is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                    <div className="mt-5 fx-2 lorem-small-bold">What is Lorem Ipsum?</div>
                    <div className="mt-2 fx-2 lorem-small">
                        is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <SendResume/>
                </div>

                <div className="col-md-4 col-sm-12 card-padding-top">
                    <div className="mr-4 contact-us-container p-4">
                        <div className="text-bold my-4 add-padding-top">Similar jobs</div>
                        <div>
                            <div className="fx-1 lorem-txt-bold">Lorem ipsum</div>
                            <div className="">Lorem lpsum has been</div>
                            <div className="mb-4 fx-3">
                                <i class="fa fa-map-marker mr-2 icon-location-size"></i>London, United Kingdom
                            </div>
                        </div>
                        <div>
                            <div className="fx-1 lorem-txt-bold">Lorem ipsum</div>
                            <div className="">Lorem lpsum has been</div>
                            <div className="mb-4 fx-3"><i class="fa fa-map-marker mr-2 icon-location-size"></i>London, United Kingdom</div>
                        </div>
                        <div>
                            <div className="fx-1 lorem-txt-bold">Lorem ipsum</div>
                            <div className="">Lorem lpsum has been</div>
                            <div className="mb-4 fx-3"><i class="fa fa-map-marker mr-2 icon-location-size"></i>London, United Kingdom</div>
                        </div>
                        <div>
                            <div className="fx-1 lorem-txt-bold">Lorem ipsum</div>
                            <div className="">Lorem lpsum has been</div>
                            <div className="mb-4 fx-3"><i class="fa fa-map-marker mr-2 icon-location-size"></i>London, United Kingdom</div>
                        </div>
                        <div className="blue-all">SEE ALL</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
